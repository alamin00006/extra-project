"use client";
import React, { useState } from "react";
import {
  Search,
  ChevronUp,
  ChevronDown,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
} from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { getBaseUrl } from "@/helpers/config/envConfig";

interface User {
  _id: string;
  id: string;
  user: string | null;
  name: string;
  phoneNumber: string;
  email: string | null;
  streetAddress: string;
  city: string;
  status: "Approved" | "Pending" | "Rejected";
  createdAt: string;
  updatedAt: string;
}

interface UsersTableProps {
  users: any;
  refetch: () => void;
  onView?: (user: User) => void;
  onEdit?: (user: User) => void;
  onDelete?: (userId: string) => void;
  onStatusUpdate?: (userId: string, newStatus: User["status"]) => void;
}

const DashboardTable: React.FC<UsersTableProps> = ({
  users,
  refetch,
  onDelete,
  onEdit,
  onStatusUpdate,
  onView,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortField, setSortField] = useState<keyof User>("createdAt");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [actionMenu, setActionMenu] = useState<string | null>(null);

  // Filter users based on search term and status
  const filteredUsers = users?.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phoneNumber.includes(searchTerm) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.city?.toLowerCase().includes(searchTerm?.toLowerCase());

    const matchesStatus =
      selectedStatus === "all" || user.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  // Sort users
  const sortedUsers = filteredUsers
    ? [...filteredUsers]?.sort((a, b) => {
        let aValue: any = a[sortField];
        let bValue: any = b[sortField];

        if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
        if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
        return 0;
      })
    : [];

  // Pagination
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = sortedUsers.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleSort = (field: keyof User) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getStatusBadge = (status: User["status"]) => {
    const statusStyles = {
      Approved:
        "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
      Pending:
        "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800",
      Rejected:
        "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
    };

    return (
      <span
        className={`rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[status]}`}
      >
        {status}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getSortIcon = (field: keyof User) => {
    if (sortField !== field) {
      return <ChevronUp className="h-4 w-4 opacity-30" />;
    }
    return sortDirection === "asc" ? (
      <ChevronUp className="h-4 w-4" />
    ) : (
      <ChevronDown className="h-4 w-4" />
    );
  };

  const updateStatus = async (userId: string, newStatus: User["status"]) => {
    try {
      const { data } = await axios.patch(`${getBaseUrl()}/member/${userId}`, {
        status: newStatus,
      });
      toast.success(data.message || "Status updated successfully");
      refetch();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update status");
      console.error("Failed to update status", error);
    }
  };

  const deleteMember = async (userId: string) => {
    try {
      const { data } = await axios.delete(`${getBaseUrl()}/member/${userId}`);
      toast.success(data.message || "Member deleted successfully");
      refetch();
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete member");
      console.error("Failed to delete member", error);
    }
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-900/30">
      {/* Table Header with Search and Filters */}
      <div className="border-b border-gray-200 p-6 dark:border-gray-700">
        <div className="flex flex-col items-start justify-between space-y-4 lg:flex-row lg:items-center lg:space-y-0">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Member Management
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Manage and monitor all member accounts in the system
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none sm:w-64 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
              />
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Filter className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="appearance-none rounded-lg border border-gray-300 bg-white py-2 pr-8 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
                >
                  <option value="all">All Status</option>
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              {/* <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="rounded-lg border border-gray-300 px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
              >
                <option value={5}>5 per page</option>
                <option value={10}>10 per page</option>
                <option value={25}>25 per page</option>
                <option value={50}>50 per page</option>
              </select> */}
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                className="cursor-pointer px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                onClick={() => handleSort("id")}
              >
                <div className="flex items-center space-x-1">
                  <span>ID</span>
                  {getSortIcon("id")}
                </div>
              </th>
              <th
                className="cursor-pointer px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                onClick={() => handleSort("name")}
              >
                <div className="flex items-center space-x-1">
                  <span>Name</span>
                  {getSortIcon("name")}
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300">
                Contact
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300">
                Location
              </th>
              <th
                className="cursor-pointer px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                onClick={() => handleSort("status")}
              >
                <div className="flex items-center space-x-1">
                  <span>Status</span>
                  {getSortIcon("status")}
                </div>
              </th>
              <th
                className="cursor-pointer px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                onClick={() => handleSort("createdAt")}
              >
                <div className="flex items-center space-x-1">
                  <span>Created</span>
                  {getSortIcon("createdAt")}
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
            {paginatedUsers.map((user) => (
              <tr
                key={user._id}
                className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-mono text-sm font-medium text-gray-900 uppercase dark:text-white">
                    {user.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {user.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-white">
                    {user.phoneNumber}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {user.email || "No email"}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 dark:text-white">
                    {user.streetAddress}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {user.city}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(user.status)}
                </td>
                <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                  {formatDate(user.createdAt)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <select
                      value={user.status}
                      onChange={(e) =>
                        updateStatus?.(
                          user._id,
                          e.target.value as User["status"],
                        )
                      }
                      className="rounded-md border border-gray-300 px-2 py-1 text-xs focus:border-transparent focus:ring-1 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
                    >
                      <option value="Approved">Approved</option>
                      <option value="Pending">Pending</option>
                      <option value="Rejected">Rejected</option>
                    </select>

                    <div className="relative">
                      <button
                        onClick={() =>
                          setActionMenu(
                            actionMenu === user._id ? null : user._id,
                          )
                        }
                        className="rounded p-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        <MoreVertical className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                      </button>

                      {actionMenu === user._id && (
                        <div className="absolute right-0 z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-700">
                          <div className="py-1">
                            <button
                              onClick={() => {
                                onView?.(user);
                                setActionMenu(null);
                              }}
                              className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </button>
                            <button
                              onClick={() => {
                                onEdit?.(user);
                                setActionMenu(null);
                              }}
                              className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                            >
                              <Edit className="mr-2 h-4 w-4" />
                              Edit User
                            </button>
                            <button
                              onClick={() => {
                                deleteMember?.(user._id);
                                setActionMenu(null);
                              }}
                              className="flex w-full items-center px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 dark:text-red-400 dark:hover:bg-gray-600"
                            >
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {sortedUsers.length === 0 ? (
        <div className="py-12 text-center">
          <div className="mb-2 text-gray-400 dark:text-gray-500">
            <Search className="mx-auto h-12 w-12" />
          </div>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            No users found
          </p>
          <p className="mt-1 text-sm text-gray-400 dark:text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-between space-y-4 border-t border-gray-200 px-6 py-4 sm:flex-row sm:space-y-0 dark:border-gray-700">
          <div className="text-sm text-gray-700 dark:text-gray-300">
            Showing <span className="font-medium">{startIndex + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(startIndex + itemsPerPage, sortedUsers.length)}
            </span>{" "}
            of <span className="font-medium">{sortedUsers.length}</span> results
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Previous
            </button>

            <div className="flex space-x-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`min-w-[40px] rounded-md border px-3 py-2 text-sm font-medium transition-colors ${
                      currentPage === pageNum
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Next
            </button>
          </div>
        </div>
      )}
      <Toaster
        position="top-center"
        containerStyle={{ marginTop: "80px" }}
        reverseOrder={false}
      />
    </div>
  );
};

export default DashboardTable;
