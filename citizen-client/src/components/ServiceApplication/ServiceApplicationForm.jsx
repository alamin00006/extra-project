"use client";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { useGetUserQuery } from "@/redux/api/authApi";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdHome } from "react-icons/md";

const ServiceApplicationForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    data: userData,
    error: userError,
    isLoading: userIsLoading,
  } = useGetUserQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, mobileNumber, email, address } = e.target;

    const resgistrationData = {
      name: name.value,
      mobileNumber: mobileNumber.value,
      email: email.value,
      address: address.value,
    };

    try {
      const { data } = await axios.post(
        `${getBaseUrl()}/service-10taka`,
        resgistrationData
      );
      toast.success(data?.message);
    } catch (err) {
      //   console.log(err);
      toast.error(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
    e.target.reset();
  };

  return (
    <>
      <div className="relative w-full h-[20vh] md:h-72 ">
        <Image
          src={"/images/services/service-10-taka-10.png"}
          alt={`About Image`}
          layout="fill"
          className="w-full h-full md:object-cover sm:object-contain"
          priority // Optional: use priority for above-the-fold images
        />
      </div>
      <div className="custom-container">
        <h1 className="md:text-5xl sm:text-2xl font-semibold mb-4 text-black rounded-lg mt-8">
          10-takai-shastho-sheba
        </h1>
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-gray-500 mb-12">
          <Link href="/" className="flex items-center space-x-1 text-teal-600">
            <MdHome className="text-xl" />
            <span className="uppercase text-sm">Home</span>
          </Link>
          <span>/</span>
          <span className="font-medium text-[#39bcbc] uppercase text-sm">
            10-takai-shastho-sheba
          </span>
        </div>
        {/* Application Form */}
        <div className=" mb-10 md:p-20 sm:p-14 xs:py-10  shadow-lg rounded">
          <h2 className="text-center">Registration Form</h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 mx-5 md:mx-48"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 ">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full h-[50px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                placeholder="Name"
                name="name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full h-[50px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                placeholder="Conatact Number"
                name="mobileNumber"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full h-[50px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                placeholder="Email Address"
                name="email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                name="address"
                className="mt-1 block w-full h-[50px] px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                placeholder="Address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#2a7d7d] text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#00a47e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {/* {loading ? "Submitting..." : "Submit"} */}
              Registration
            </button>
          </form>
        </div>
        <Toaster
          position="top-center"
          containerStyle={{ marginTop: "100px" }}
          reverseOrder={false}
        />{" "}
      </div>
    </>
  );
};

export default ServiceApplicationForm;
