import React from "react";
import {
  FaCalendarPlus,
  FaDochub,
  FaHospitalAlt,
  FaUserCircle,
  FaUserMd,
} from "react-icons/fa";

const DashboardMain = () => {
  return (
    <div className="p-4 text-black dark:text-white">
      {/* Button Section */}
      <div className="flex flex-wrap gap-4 mb-8">
        {/* Add New Hospital Button */}
        <button className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-white shadow transition duration-300 hover:bg-blue-700">
          <FaHospitalAlt className="text-lg" />
          <span>Add New Hospital</span>
        </button>

        {/* Add New Doctor Button */}
        <button className="flex items-center justify-center gap-2 rounded-2xl bg-green-600 px-4 py-3 text-white shadow transition duration-300 hover:bg-green-700">
          <FaUserMd className="text-lg" />
          <span>Add New Doctor</span>
        </button>

        {/* Add New Appointment Button */}
        <button className="flex items-center justify-center gap-2 rounded-2xl bg-purple-600 px-4 py-3 text-white shadow transition duration-300 hover:bg-purple-700">
          <FaCalendarPlus className="text-lg" />
          <span>Add New Appointment</span>
        </button>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Profile */}
        <div className="flex flex-col overflow-hidden rounded-2xl shadow-md dark:bg-white/[0.09]">
          <div className="z-10 bg-[#465fff] p-6 pb-8 text-white">
            <p className="text-xl font-bold">Welcome Back!</p>
            <p>Popular Hospital, Dhaka</p>
          </div>
          <div className="flex flex-1 flex-col px-6 py-4">
            <FaUserCircle className="z-20 -mt-11 text-6xl text-green-500" />
            <h2 className="text-xl font-bold">Jewel Rana</h2>
            <p className="text-sm">Full Stack Developer</p>
            <p className="text-xs">jewelrana@example.com</p>
          </div>
        </div>

        {/* Right Section: Appointments Cards */}
        <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
              { label: "Total Hospitals", value: 20, color: "bg-red-400" },
              { label: "Total Users", value: '20K', color: "bg-green-600" },
              { label: "Total Doctors", value: 105, color: "bg-blue-400" },
            { label: "Total Appointments", value: '3K', color: "bg-blue-400" },
            { label: "Upcoming Appointments", value: 7, color: "bg-purple-400" },
            { label: "Completed Appointments", value: 5, color: "bg-green-400" },
    
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-2xl p-4 shadow-md dark:bg-white/[0.09]"
            >
              <div>
                <p className="text-lg md:text-xl">{item.label}</p>
                <p className="text-3xl font-extrabold md:text-2xl">
                  {item.value}
                </p>
              </div>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color} text-white md:h-12 md:w-12`}
              >
                <FaDochub className="text-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Cards Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Rejected Appointments", value: 2, color: "bg-red-400" },
          { label: "Visited Appointments", value: 4, color: "bg-yellow-400" },
          { label: "In Progress ", value: 6, color: "bg-indigo-400" },
          { label: "   Cancelled Appointments ", value: 8, color: "bg-red-400" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl bg-white/[0.09] p-4 shadow-md"
          >
            <div>
              <p className="text-lg md:text-xl">{item.label}</p>
              <p className="text-3xl font-extrabold md:text-2xl">
                {item.value}
              </p>
            </div>
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full ${item.color} text-white md:h-12 md:w-12`}
            >
              <FaDochub className="text-2xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardMain;
