"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import Link from "next/link";
import CategoryUpdate from "./CategoryUpdate";

import { getBaseUrl } from "@/helpers/config/envConfig";
const AddCategories = () => {
  const [categories, setCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(10);

  // Edit Modal
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectCategory, setSelectCategory] = useState(null);
  const handleShowModal = (returnData) => {
    setSelectCategory(returnData);
    setShowEditModal(true);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${getBaseUrl()}/category`);
        if (response.data.status === "success") {
          setCategories(response.data.data);
        } else {
          toast.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Failed to fetch categories");
      }
    };

    fetchCategories();
  }, []);

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = filteredCategories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );
  const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-6">
      <h2 className="font-bold">Category List</h2>
      <div className="mb-4 flex items-center justify-end">
        <Link href="/create-category">
          <button className="rounded-md bg-teal-600 px-4 py-2 text-white hover:bg-teal-500">
            Add New Category
          </button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table-bordered table w-full">
          <thead className="bg-gray-100">
            <tr>
              <th>No</th>
              <th>Category Name</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="divide-gray-200 divide-y bg-white">
            {currentCategories.map((category, index) => (
              <tr key={category._id}>
                <td className="whitespace-nowrap px-6 py-4">
                  {indexOfFirstCategory + index + 1}
                </td>
                <td className="whitespace-nowrap px-6 py-4">{category.name}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  {category.createdAt}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {category.updatedAt}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <button
                    onClick={() => handleShowModal(category)}
                    className="text-teal-600 hover:text-teal-500"
                  >
                    <FaEdit className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        <nav aria-label="Page navigation">
          <ul className="flex list-none space-x-2">
            <li>
              <button
                className={`rounded border px-4 py-2 ${
                  currentPage === 1
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-blue-500 text-white"
                }`}
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
              >
                First
              </button>
            </li>
            <li>
              <button
                className={`rounded border px-4 py-2 ${
                  currentPage === 1
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-blue-500 text-white"
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index + 1}>
                <button
                  className={`rounded border px-4 py-2 ${
                    index + 1 === currentPage
                      ? "bg-[#00c194] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                className={`rounded border px-4 py-2 ${
                  currentPage === totalPages
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-blue-500 text-white"
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </li>
            <li>
              <button
                className={`rounded border px-4 py-2 ${
                  currentPage === totalPages
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-blue-500 text-white"
                }`}
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
              >
                Last
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Category Update Modal */}
      {selectCategory && (
        <CategoryUpdate
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          selectCategory={selectCategory}
        />
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AddCategories;
