"use client";

import Image from "next/image";
import useUserData from "@/hooks/useUserData";

const Profile = () => {
  const { userData, error: userError, loading: isLoadingUser } = useUserData();

  console.log(userData);
  const fullName = userData?.fullName || "N/A";
  const mobileNumber = userData?.phoneNumber || "N/A";

  if (isLoadingUser) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#00c194]"></div>
      </div>
    );
  }

  if (userError) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-red-500 text-center">
          <p>Error loading profile data</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-[#00c194] text-white rounded hover:bg-[#00a37d] transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 mb-20 gap-4 md:gap-6 mt-5 px-4 sm:px-6">
      {/* Profile Image Section */}
      <div className="lg:col-span-4 w-full flex justify-center">
        <div className="border border-gray-200 rounded-lg flex justify-center items-center p-4 sm:p-6 w-full max-w-[320px] h-auto aspect-square">
          <Image
            src={"/images/avatar7.png"}
            alt="Profile Image"
            width={280}
            height={280}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Account Information Section */}
      <div className="lg:col-span-8 border border-gray-300 rounded-lg bg-white shadow-sm">
        <Section
          title={<span className="text-[#00c194]">Account Information</span>}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Full Name */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <span className="text-base font-semibold text-gray-900 block truncate">
                {fullName}
              </span>
            </div>

            {/* Mobile Number */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <span className="text-base font-semibold text-gray-900">
                {mobileNumber}
              </span>
            </div>

            {/* User ID */}
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                User ID
              </label>
              <span className="text-base font-semibold text-gray-900">
                #{userData?.id || "N/A"}
              </span>
            </div>

            {/* Address */}
            <div className="space-y-1 sm:col-span-2 lg:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <span className="text-base text-gray-900">N/A</span>
            </div>

            {/* Additional fields can be uncommented and added here */}
            {/*
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Father's Name
              </label>
              <span className="text-base text-gray-900">
                {personalDetails.fathersName}
              </span>
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Mother's Name
              </label>
              <span className="text-base text-gray-900">
                {personalDetails.mothersName}
              </span>
            </div>
            */}
          </div>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children, status }) => {
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 flex items-center">
        {title}
        {status && (
          <span
            className={`ml-2 text-sm font-medium px-2 py-1 rounded ${
              status === "valid"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status === "valid" ? "Verified" : "Not Verified"}
          </span>
        )}
      </h2>
      {children}
    </div>
  );
};

export default Profile;
