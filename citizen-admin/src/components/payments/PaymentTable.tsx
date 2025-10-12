"use client";
import React, { useState } from "react";
import {
  Search,
  ChevronUp,
  ChevronDown,
  Filter,
  MoreVertical,
  Eye,
  Download,
  FileText,
  Calendar,
  CreditCard,
} from "lucide-react";

interface Payment {
  _id: string;
  member: string;
  amount: number;
  trxID: string;
  paymentNumber: string;
  paymentType: string;
  paymentDate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface PaymentsTableProps {
  payments: Payment[];
  onView?: (payment: Payment) => void;
  onDownload?: (payment: Payment) => void;
  onExport?: (payments: Payment[]) => void;
}

const PaymentsTable: React.FC<PaymentsTableProps> = ({
  payments,
  onView,
  onDownload,
  onExport,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortField, setSortField] = useState<keyof Payment>("paymentDate");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [actionMenu, setActionMenu] = useState<string | null>(null);

  // Filter payments based on search term and type
  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.trxID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.paymentNumber.includes(searchTerm) ||
      payment.paymentType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.amount.toString().includes(searchTerm);

    const matchesType =
      selectedType === "all" || payment.paymentType === selectedType;

    return matchesSearch && matchesType;
  });

  // Sort payments
  const sortedPayments = [...filteredPayments].sort((a, b) => {
    let aValue: any = a[sortField];
    let bValue: any = b[sortField];

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedPayments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPayments = sortedPayments.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleSort = (field: keyof Payment) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getPaymentTypeBadge = (type: string) => {
    const typeStyles = {
      bkash:
        "bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/30 dark:text-pink-400 dark:border-pink-800",
      nagad:
        "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
      rocket:
        "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
      bank: "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/30 dark:text-gray-400 dark:border-gray-800",
    };

    const style =
      typeStyles[type as keyof typeof typeStyles] ||
      "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/30 dark:text-gray-400 dark:border-gray-800";

    return (
      <span
        className={`rounded-full border px-3 py-1 text-xs font-medium ${style}`}
      >
        {type.toUpperCase()}
      </span>
    );
  };

  const getAmountColor = (amount: number) => {
    return amount > 0
      ? "text-green-600 dark:text-green-400 font-semibold"
      : "text-red-600 dark:text-red-400 font-semibold";
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatCurrency = (amount: number) => {
    return `৳${amount.toLocaleString()}`;
  };

  const getSortIcon = (field: keyof Payment) => {
    if (sortField !== field) {
      return <ChevronUp className="h-4 w-4 opacity-30" />;
    }
    return sortDirection === "asc" ? (
      <ChevronUp className="h-4 w-4" />
    ) : (
      <ChevronDown className="h-4 w-4" />
    );
  };

  const paymentTypes = [...new Set(payments.map((p) => p.paymentType))];

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-900/30">
      {/* Table Header with Search and Filters */}
      <div className="border-b border-gray-200 p-6 dark:border-gray-700">
        <div className="flex flex-col items-start justify-between space-y-4 lg:flex-row lg:items-center lg:space-y-0">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Payment Transactions
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Manage and monitor all payment transactions
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
            <div className="relative">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
              <input
                type="text"
                placeholder="Search by TRX ID, number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none sm:w-64 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
              />
            </div>
            <div className="flex gap-3">
              <div className="relative">
                <Filter className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="appearance-none rounded-lg border border-gray-300 bg-white py-2 pr-8 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-400"
                >
                  <option value="all">All Types</option>
                  {paymentTypes.map((type) => (
                    <option key={type} value={type}>
                      {type.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
              <select
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
              </select>
              {/* <button
                onClick={() => onExport?.(sortedPayments)}
                className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                <Download className="h-4 w-4" />
                Export
              </button> */}
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
                onClick={() => handleSort("trxID")}
              >
                <div className="flex items-center space-x-1">
                  <span>TRX ID</span>
                  {getSortIcon("trxID")}
                </div>
              </th>
              <th
                className="cursor-pointer px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                onClick={() => handleSort("amount")}
              >
                <div className="flex items-center space-x-1">
                  <span>Amount</span>
                  {getSortIcon("amount")}
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300">
                Payment Method
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300">
                Payment Number
              </th>
              <th
                className="cursor-pointer px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                onClick={() => handleSort("paymentDate")}
              >
                <div className="flex items-center space-x-1">
                  <span>Payment Date</span>
                  {getSortIcon("paymentDate")}
                </div>
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
            {paginatedPayments.map((payment) => (
              <tr
                key={payment._id}
                className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-mono text-sm font-medium text-gray-900 dark:text-white">
                    {payment.trxID}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    ID: {payment._id.slice(-8)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    className={`text-lg font-bold ${getAmountColor(payment.amount)}`}
                  >
                    {formatCurrency(payment.amount)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getPaymentTypeBadge(payment.paymentType)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {payment.paymentNumber}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Member: {payment.member.slice(-8)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-white">
                    {formatDate(payment.paymentDate)}
                  </div>
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="mr-1 h-3 w-3" />
                    {new Date(payment.paymentDate).toLocaleDateString()}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onView?.(payment)}
                      className="rounded-lg bg-blue-100 p-2 text-blue-600 transition-colors hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
                      title="View Details"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    {/* <button
                      onClick={() => onDownload?.(payment)}
                      className="rounded-lg bg-green-100 p-2 text-green-600 transition-colors hover:bg-green-200 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/50"
                      title="Download Receipt"
                    >
                      <Download className="h-4 w-4" />
                    </button> */}
                    <div className="relative">
                      <button
                        onClick={() =>
                          setActionMenu(
                            actionMenu === payment._id ? null : payment._id,
                          )
                        }
                        className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                        title="More Actions"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </button>

                      {actionMenu === payment._id && (
                        <div className="absolute right-0 z-10 mt-1 w-48 rounded-md border border-gray-200 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-700">
                          <div className="py-1">
                            <button
                              onClick={() => {
                                onView?.(payment);
                                setActionMenu(null);
                              }}
                              className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </button>
                            {/* <button
                              onClick={() => {
                                onDownload?.(payment);
                                setActionMenu(null);
                              }}
                              className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
                            >
                              <FileText className="mr-2 h-4 w-4" />
                              Generate Receipt
                            </button> */}
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
      {sortedPayments.length === 0 ? (
        <div className="py-12 text-center">
          <div className="mb-2 text-gray-400 dark:text-gray-500">
            <CreditCard className="mx-auto h-12 w-12" />
          </div>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            No payments found
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
              {Math.min(startIndex + itemsPerPage, sortedPayments.length)}
            </span>{" "}
            of <span className="font-medium">{sortedPayments.length}</span>{" "}
            transactions
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
    </div>
  );
};

export default PaymentsTable;
