"use client";
import { packagesData } from "@/helpers/utils/packagesData";
import useUserData from "@/hooks/useUserData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PackageDetails = ({ params }) => {
  const router = useRouter();
  const [menuItem, setMenuItem] = useState(null);
  const { userData, error: userError, loading: isLoadingUser } = useUserData();

  useEffect(() => {
    if (params.id) {
      const foundItem = packagesData.find(
        (item) => item.id === Number(params.id)
      );
      setMenuItem(foundItem);
    }
  }, [params]);

  if (!menuItem) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-lg">
        Loading...
      </div>
    );
  }

  const handleRegistration = () => {
    return router.push("/service-application");
  };

  return (
    <div className="custom-container ">
      {/* Banner Section */}
      <div className="relative custom-container">
        <Image
          src={menuItem.banner || menuItem?.image}
          alt={`Banner for ${menuItem.text} service`}
          width={1280}
          height={300}
          objectFit="contain"
          objectPosition="center"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="mt-8 md:mx-0 sm:mx-3">
        <h3 className="sm:text-2xl md:text-3xl font-bold text-gray-800 font-bengali mb-4">
          {menuItem?.enTitle} - {menuItem?.text}
        </h3>
        <div className="text-gray-700 text-base md:text-lg font-bengali leading-relaxed">
          {menuItem?.content}
        </div>
        <div className="my-6">
          <button
            onClick={handleRegistration}
            className="px-6 py-3 bg-teal-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition duration-300 text-sm md:text-base uppercase"
          >
            Registration Now
          </button>
        </div>
        <div className="text-gray-600 text-sm md:text-base font-bengali leading-8">
          <p>
            সিটিজেন কেয়ার বাংলাদেশের লয়্যাল মেম্বার হতে যোগাযোগ করুন:
            <br />
            কল সেন্টার: ০১৮৯৬-৫১১০২০, 09-613166166 <br />
            WhatsApp: ০১৮৯৪-৬৭১৮৭৫ <br />
            Website:{" "}
            <a
              href="https://citizencarebd.com"
              className="text-teal-500 hover:underline"
            >
              citizencarebd.com
            </a>{" "}
            <br />
            Facebook:{" "}
            <a
              href="https://www.facebook.com/Citizencarebd"
              className="text-teal-500 hover:underline"
            >
              facebook.com/Citizencarebd
            </a>
          </p>
          <p className="mt-4">
            এই অফারের শর্তাবলী সম্পর্কে ভালো করে জেনে নিন। <br />
            আপনার স্বাস্থ্য আপনার হাতে,{" "}
            <span className="font-semibold">
              {"সিটিজেন কেয়ার বাংলাদেশ আপনার সাথে"}
            </span>
            !
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
