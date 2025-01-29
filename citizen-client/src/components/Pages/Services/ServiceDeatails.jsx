"use client";
// import { convertHtml } from "@/helpers/utils/convertHtml";
import { cardData } from "@/helpers/utils/serviceData";
import useUserData from "@/hooks/useUserData";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const ServiceDeatails = ({ params }) => {
  const router = useRouter();
  const [menuItem, setMenuItem] = useState(null);
  const { userData, error: userError, loading: isLoadingUser } = useUserData();

  useEffect(() => {
    if (params.id) {
      const foundItem = cardData.find((item) => item.id === Number(params.id));
      setMenuItem(foundItem);
    }
  }, [params]);

  if (!menuItem)
    return (
      <p className="flex justify-center items-center h-screen">Loading...</p>
    );

  const handleRegistration = () => {
    if (!userData) {
      return router.push(`/login`);
    } else {
      return router.push(`/service-application`);
    }
  };

  return (
    <div>
      <div className="relative w-full h-[20vh] md:h-72 rounded-lg">
        <Image
          src={menuItem.banner || menuItem?.image || ""}
          alt={menuItem.text}
          layout="fill"
          // className="w-screen h-full md:object-contain sm:object-contain top-0"
          priority // Optional: use priority for above-the-fold images
        />
      </div>
      <h3 className="mt-4">{menuItem?.text}</h3>
      <div>
        <p
        // dangerouslySetInnerHTML={{
        //   __html: convertHtml(menuItem?.content),
        // }}
        >
          {menuItem?.content}
        </p>
        <div className="my-3">
          <button
            onClick={handleRegistration}
            className="uppercase no-underline px-6 py-3 bg-[#39bcbc] hover:bg-pink-600 text-white hover:text-white rounded text-sm"
          >
            Registration Now
          </button>
        </div>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          সিটিজেন কেয়ার বাংলাদেশের লয়্যাল মেম্বার হতে যোগাযোগ করুন:
          <br />
          <b>কল সেন্টার:</b> ০১৮৯৬-৫১১০২০, ০২৪১০৬১৬১৬ <br />
          <b>WhatsApp:</b> ০১৮৯৪-৬৭১৮৭৫ <br />
          <b>Website:</b>{" "}
          <a href="https://citizencarebd.com" className="text-[#3abbba]">
            citizencarebd.com
          </a>{" "}
          <br />
          <b>Facebook:</b>{" "}
          <a
            href="https://www.facebook.com/Citizencarebd"
            className="text-[#3abbba]"
          >
            facebook.com/Citizencarebd
          </a>
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          এই অফারের শর্তাবলী সম্পর্কে ভালো করে জেনে নিন। <br />
          আপনার স্বাস্থ্য আপনার হাতে, {`"সিটিজেন কেয়ার বাংলাদেশ আপনার সাথে"`}!
        </p>
      </div>
    </div>
  );
};

export default ServiceDeatails;
