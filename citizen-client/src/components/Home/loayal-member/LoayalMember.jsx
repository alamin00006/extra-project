import Image from "next/image";
import { useRouter } from "next/navigation";
import MoreInfo from "./MoreInfo";
import { useState } from "react";
import PriceTable from "./PriceTable";

const LoayalMember = ({ userData }) => {
  const router = useRouter();
  const [showModal, setIsModal] = useState(false);

  const handleRegistration = () => {
    return router.push(`/service-application`);
  };

  return (
    <>
      <div className="custom-container shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full gap-5 md:p-5 sm:px-5 sm:py-5 mt-0">
          {/* Desktop Image */}
          <div className="md:col-span-6 w-full h-full sm:hidden md:block">
            <Image
              src={"/images/registration/Doing Registration Picture.jpg"}
              width={600}
              height={600}
              className="w-full h-full object-cover"
              alt="banner"
            />
          </div>

          {/* Mobile Image */}
          <div className="md:col-span-6 w-full h-full md:hidden sm:block">
            <Image
              src={"/images/registration/Doing Registration Picture.jpg"}
              width={600}
              height={600}
              className="w-full h-full object-contain"
              alt="banner2"
            />
          </div>

          {/* Text Area */}
          <div className="md:col-span-6 w-full h-full sm:p-4 xs:p-4 md:p-6 py-0">
            <h2 className="text-lg mb-4 font-bengali">
              <span className="text-[#3abbba] font-bold">
                Citizen Care Bangladesh-
              </span>{" "}
              এর
              <span className="text-pink-500 font-bold">
                {" "}
                লয়্যাল মেম্বার
              </span>{" "}
              হয়ে
              <b> ডাক্তার, নিউট্রিশনিস্ট ও নার্সের</b> সশরীরে উপস্থিতিতে{" "}
              <b>ঘরে বসে</b> স্বাস্থ্য সেবা নিন
            </h2>

            <p className="text-sm md:text-base mb-4 text-[#565656] leading-8 font-bengali">
              <span className="text-[#3abbba] font-bold">
                আপনি কেন CCB লয়্যাল মেম্বার হবেন?
              </span>{" "}
              কি কি সুবিধা পাবেন?
            </p>

            <ul className="list-disc ml-4 space-y-2 text-[17px] font-medium">
              <li className="font-bengali">
                রেজিস্টার্ড অভিজ্ঞ MBBS ডাক্তার: প্রতি মাসে ১ বার বাসায় গিয়ে
                স্বাস্থ্যসেবা দিবেন এবং প্রয়োজনে টেলিমেডিসিন সেবা।
              </li>

              <li className="font-bengali">
                অভিজ্ঞ নিউট্রিশনিস্টের পরামর্শ: প্রতি মাসে ১ বার বাসায় গিয়ে
                আপনার ডায়েট চার্ট প্রদান করবেন।
              </li>

              <li className="font-bengali">
                অভিজ্ঞ রেজিস্টার্ড নার্স: প্রতি সপ্তাহে ১ বার Vital Signs
                মনিটরিং করে রেকর্ড বুকে লিখবেন।
              </li>
            </ul>

            {/* Read More */}
            <div className="flex justify-end ">
              <button
                onClick={() => setIsModal(true)}
                className="text-sm text-[#3abbba] hover:text-[#1c7d7d] mb-2"
              >
                আরো পড়ুন
              </button>
            </div>

            {/* Pricing Table */}
            <PriceTable />

            {/* Registration Button */}
            <div className="mt-4">
              <button
                onClick={handleRegistration}
                className="uppercase px-6 py-3 bg-[#39bcbc] hover:bg-pink-600 text-white rounded text-sm"
              >
                Registration Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal ALWAYS mounted */}
      <MoreInfo showModal={showModal} setShowModal={setIsModal} />
    </>
  );
};

export default LoayalMember;
