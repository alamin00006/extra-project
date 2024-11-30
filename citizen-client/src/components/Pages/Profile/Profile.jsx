"use client";

import Link from "next/link";
import { formatDate } from "@/helpers/utils/dateConvert";
import { FaEdit } from "react-icons/fa";
import { useGetUserQuery } from "@/redux/api/authApi";
import Image from "next/image";

const Profile = () => {
  const {
    data: userData,
    error: userError,
    isLoading: userIsLoading,
  } = useGetUserQuery();

  const firstName = userData?.firstName || "N/A";
  const lastName = userData?.lastName || "N/A";

  const mobileNumber = userData?.phoneNumber || "N/A";
  const personalDetails = userData?.personalDetails || {
    fathersName: "N/A",
    mothersName: "N/A",
    birthDate: "N/A",
  };

  const address = userData?.address || {
    addressLine1: "N/A",
    addressLine2: "N/A",
    city: "N/A",
    state: "N/A",
    zipCode: "N/A",
    country: "N/A",
  };

  return (
    <div className=" grid grid-cols-12 mb-10 gap-x-0 md:gap-5 mt-5">
      <div className="md:col-span-4 sm:col-span-12 xs:col-span-12">
        {" "}
        <div className="border flex justify-center p-5 w-[300px] h-[300px]">
          <Image
            src={"/images/avatar7.png"}
            alt={`About Image`}
            width={300}
            height={300}
            className=" md:w-full sm:w-full xs:w-full"
            priority // Optional: use priority for above-the-fold images
          />
        </div>
      </div>
      <div className=" md:col-span-8 sm:col-span-12 xs:col-span-12 border border-gray-300 rounded-lg">
        <Section
          title={<span style={{ color: "#00c194" }}>Account Information</span>}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Full Name */}
            <div>
              <label
                htmlFor="full-name"
                className="block md:text-base sm:text-sm"
              >
                First Name
              </label>
              <span className="text-base lg:text-lg mb-2">{firstName}</span>
            </div>
            <div>
              <label
                htmlFor="full-name"
                className="block md:text-base sm:text-sm"
              >
                Last Name
              </label>
              <span className="text-base lg:text-lg mb-2">{lastName}</span>
            </div>

            <div>
              <label htmlFor="mobile" className="block md:text-base sm:text-sm">
                Mobile Number
              </label>
              <span className="text-base lg:text-lg mb-2">{mobileNumber}</span>
            </div>
            {/* User ID */}
            <div>
              <label
                htmlFor="user-id"
                className="block md:text-base sm:text-sm"
              >
                User ID
              </label>
              <span className="text-base lg:text-lg mb-2">#{userData?.id}</span>
            </div>

            {/* Father's Name */}
            {/* <div>
              <label
                htmlFor="fathers-name"
                className="block md:text-base sm:text-sm"
              >
                {` Father's`} Name
              </label>
              <span className="text-base lg:text-lg mb-2">
                {personalDetails.fathersName}
              </span>
            </div> */}

            {/* Mother's Name */}
            {/* <div>
              <label
                htmlFor="mothers-name"
                className="block md:text-base sm:text-sm"
              >
                {` Mother's`} Name
              </label>
              <span className="text-base lg:text-lg mb-2">
                {personalDetails.mothersName}
              </span>
            </div> */}
            <div>
              <label
                htmlFor="address-line-1"
                className="block md:text-base sm:text-sm"
              >
                Address
              </label>
              <span className="text-base md:text-lg mb-2">N/A</span>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children, status }) => {
  return (
    <div className=" mt-2 p-5 ">
      <h2 className="section-title md:text-lg sm:text-base font-semibold mb-2">
        {title}
        {/* {status && (
          <span
            className={`ml-2 text-${
              status === "valid" ? "green-600" : "red-600"
            }`}
          >
            {status === "valid" ? "Verified" : "Not Verified"}
          </span>
        )} */}
      </h2>
      {children}
    </div>
  );
};

export default Profile;
