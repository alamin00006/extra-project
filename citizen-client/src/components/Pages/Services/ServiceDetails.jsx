"use client";
import { cardData } from "@/helpers/utils/serviceData";
import useUserData from "@/hooks/useUserData";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ServiceDetails = ({ params }) => {
  const router = useRouter();
  const [menuItem, setMenuItem] = useState(null);
  const { userData, error: userError, loading: isLoadingUser } = useUserData();

  useEffect(() => {
    if (params.id) {
      const foundItem = cardData.find((item) => item.id === Number(params.id));
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
    if (!userData) {
      router.push("/login");
    } else {
      router.push("/service-application");
    }
  };

  return (
    <div className=" ">
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

        {menuItem.id === 2 && (
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center md:-ml-[200px] sm:-ml-0">
            <p className="text-sm md:text-4xl font-bengali leading-tight text-[#12a88b] ">
              লয়্যাল মেম্বার হয়ে ঘরে বসে
            </p>
            <p className="text-sm md:text-4xl font-bengali leading-tight text-[#12a88b] ">
              প্রতি মাসে{" "}
              <span className="text-2xl md:text-4xl text-pink-600">১</span> বার
            </p>
            <p className="text-sm md:text-4xl font-bold font-bengali">
              <span className="text-pink-600">MBBS ডাক্তারের সেবা নিন</span>
            </p>
          </div>
        )}
        {menuItem.id === 3 && (
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center -mt-10 -ml-[450px]">
            <p className="text-sm md:text-4xl font-bengali leading-tight text-[#12a88b]  ">
              লয়্যাল মেম্বার হয়ে ঘরে বসে
            </p>
            <p className="text-sm md:text-4xl font-bengali leading-tight text-[#12a88b] -mt-5 ">
              প্রতি মাসে
              <span className="text-2xl md:text-6xl text-pink-600">১</span> বার
              অভিজ্ঞ
            </p>
            <p className=" font-bold font-bengali leading-tight">
              <span className="text-pink-600 text-sm md:text-4xl">
                নিউট্রিশনিস্টের এর পরামর্শ নিন
              </span>
            </p>
          </div>
        )}
        {menuItem.id === 4 && (
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center  -ml-[100px]">
            <p className="text-sm md:text-4xl font-bengali leading-tight text-[#12a88b]  ">
              লয়্যাল মেম্বার হয়ে ঘরে বসে প্রতি মাসে
            </p>
            <p className="text-sm md:text-4xl font-bold font-bengali">
              <span className="text-2xl md:text-6xl text-pink-600">২-৪</span>{" "}
              <span className="text-[#12a88b]">বার</span>{" "}
              <span className="text-pink-600">নার্সিং সেবা নিন</span>
            </p>
          </div>
        )}
        {menuItem.id === 5 && (
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center -mt-10 md:-ml-[200px]">
            <p className="text-sm md:text-4xl font-bengali leading-tight text-white bg-pink-600 p-2 rounded-lg">
              মেডিসিন ও মেডিকেল ডিভাইস
            </p>
            <p className="text-sm md:text-4xl font-bold font-bengali">
              <span className="text-white  ">ফ্রী ডেলিভারি </span>
            </p>
          </div>
        )}
        {menuItem.id === 6 && (
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center  md:-ml-[550px]">
            <p className="text-sm md:text-4xl font-bengali  text-white bg-pink-600 p-2 rounded-lg ">
              দেশ থেকে বিদেশ চিকিৎসার
            </p>
            <p className="text-sm md:text-4xl font-bengali  text-white  ">
              সকল ধাপে
            </p>
            <p className=" font-bold font-bengali ">
              <span className="text-white text-sm md:text-4xl bg-pink-600 p-2 rounded-lg">
                আমরা আছি আপনার পাশে
              </span>
            </p>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="mt-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 font-bengali mb-4">
          {menuItem?.text}
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
            কল সেন্টার: ০১৮৯৬-৫১১০২০, ০২৪১০৬১৬১৬ <br />
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

export default ServiceDetails;
