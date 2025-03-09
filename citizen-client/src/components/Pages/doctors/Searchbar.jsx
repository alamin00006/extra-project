"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function DoctorSearch() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-[#7ECED3] py-6 px-4 sm:px-8">
      {/* Search Input */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter doctor name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 pl-4 pr-10 text-gray-800 rounded-lg border-none focus:ring-2 focus:ring-[#5DBEC4] focus:outline-none shadow-md"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#5DBEC4] cursor-pointer" />
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-white my-6 max-w-4xl mx-auto"></div>

      {/* Filter Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <select className="bg-[#AEE1E6] text-gray-800 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#5DBEC4] shadow-md">
          <option>Select a location</option>
          <option>Dhaka</option>
          <option>Chittagong</option>
          <option>Rajshahi</option>
        </select>

        <select className="bg-[#AEE1E6] text-gray-800 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#5DBEC4] shadow-md">
          <option>Select a specialty</option>
          <option>Cardiologist</option>
          <option>Dermatologist</option>
          <option>Neurologist</option>
        </select>

        <select className="bg-[#AEE1E6] text-gray-800 px-4 py-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#5DBEC4] shadow-md">
          <option>Select a day</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
        </select>
      </div>
    </div>
  );
}
