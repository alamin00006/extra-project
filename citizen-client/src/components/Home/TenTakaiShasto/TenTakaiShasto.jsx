import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TenTakaiShasto = ({ userData }) => {
  const router = useRouter();

  const handleRegistration = () => {
    if (!userData) {
      return router.push(`/login`);
    } else {
      return router.push(`/service-application`);
    }
  };

  return (
    <div className="custom-container shadow-md ">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full gap-5 md:p-5 sm:px-5 sm:py-5 mt-0 ">
        <div className="md:col-span-6 w-full h-full sm:hidden md:block">
          <Image
            src={"/images/services-2/HELTH-CARE-at-01.jpg"}
            width={600}
            height={600}
            className="w-full h-full object-cover"
            alt="banner"
          />
        </div>
        <div className="md:col-span-6 w-full h-full md:hidden sm:block ">
          <Image
            src={"/images/services-2/HELTH-CARE-at-01.jpg"}
            width={600}
            height={600}
            className="w-full h-full object-contain"
            alt="banner2"
          />
        </div>
        <div className="md:col-span-6 w-full h-full sm:p-4 xs:p-4 md:p-6 py-0">
          <h2 className="text-lg mb-4">
            {" "}
            <span className="text-[#3abbba] font-bold">
              Citizen Care Bangladesh-
            </span>{" "}
            এর
            <span className="text-pink-500 font-bold"> লয়্যাল মেম্বার</span> হয়ে
            <b> ডাক্তার, নিউট্রিশনিস্ট ও নার্সের</b> সশরীরে উপস্থিতিতে{" "}
            <b>ঘরে বসে</b>
            স্বাস্থ্য সেবা নিন
          </h2>
          <p className="text-sm md:text-base mb-4 text-[#565656] leading-8 ">
            <span className="text-red-500 font-bold">
              আপনি কেন CCB লয়্যাল মেম্বার হবেন?
            </span>{" "}
            কি কি সুবিধা পাবেন?
          </p>
          <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
            <li>
              রেজিস্টার্ড অভিজ্ঞ MBBS ডাক্তার: প্রতি ৩ মাসে ১ বার বাসায় গিয়ে
              স্বাস্থ্যসেবা দিবেন এবং প্রয়োজনে টেলিমেডিসিন সেবা।{" "}
              <p className="text-center text-pink-500">
                (ভিজিট মাত্র ২০০ টাকা)
              </p>
            </li>
            <li>
              অভিজ্ঞ নিউট্রিশনিস্টের পরামর্শ: প্রতি মাসে ১ বার আপনার বাসায় গিয়ে
              আপনার আদর্শ ডায়েট চার্ট প্রদান সহ প্রয়োজনীয় নিউট্রিশনাল পরামর্শ
              প্রদান করবেন ।
              <p className="text-center text-pink-500">
                (ভিজিট মাত্র ২০০ টাকা)
              </p>
            </li>
            <li>
              অভিজ্ঞ রেজিস্টার্ড নার্স: প্রতি সপ্তাহে ১ বার এবং প্রতি মাসে
              সর্বোচ্চ ২-৪ বার বাসায় গিয়ে Vital Signs মনিটরিং করে হেলথ রেকর্ড
              বুকে লিপিবদ্ধ করে রাখবেন।
              <p className="text-center text-pink-500">
                (ভিজিট মাত্র ১৫০ টাকা)
              </p>
            </li>
          </ul>

          {/* <p className="text-sm md:text-base mb-4 text-[#565656] leading-8 ">
            এছাড়াও আমাদের{" "}
            <span className="text-[#3abbba] font-bold"> লয়্যাল মেম্বার</span>{" "}
            হলে
            <span className="text-[#3abbba] font-bold"> C C B নমিনেটেড </span>
          </p>

          <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
            <li>হসপিটাল ও ডায়াগনস্টিক সেন্টারে পাচ্ছেন স্পেশাল ডিসকাউন্ট</li>
            <li>ডেলিভারি চার্জ ছাড়া মেডিসিন ক্রয়ের সুবিধা</li>
            <li>দেশে-বিদেশে হেলথ গাইডের সুবিধা</li>
            <li>পাবলিক হেলথ বিশেষজ্ঞের বিশেষ কনসালটেন্সি</li>
            <li>হেলথ ট্যুরিজম</li>
            <li>ইমার্জেন্সি প্রয়োজনে এয়ার অ্যাম্বুলেন্স</li>
            <li>
              ঘরে বসে সাশ্রয়ী মূল্য প্যাকেজ ভিত্তিক প্রয়োজনীয় মেডিক্যাল টেস্ট
            </li>
          </ul> */}
          {/* <p className="text-sm md:text-base mb-4 text-[#565656] font-normal leading-8 ">
            আপনিও সিটিজেন কেয়ার বাংলাদেশ এর লয়্যাল মেম্বার হয়ে নিজেকে সুস্থ
            রাখতে আরোও মনযোগী হোন, <b>ডাক্তার,নিউট্রিশনিস্ট, নার্সের</b> সেবা
            নিন, স্বাস্থ্য ঝুঁকি প্রতিরোধে সচেষ্ট থাকুন।
          </p> */}
          {/* <p className="text-sm md:text-base  text-[#565656]  ">মেম্বার ফি</p> */}
          <Link
            href={"/service-details/1"}
            className="flex justify-end text-sm text-[#3abbba] hover:text-[#1c7d7d]"
          >
            আরো পড়ুন
          </Link>
          <ul className="list-disc ml-4 space-y-2 text-sm  ">
            <li className="font-bold">
              লয়্যাল <span className="text-[#3abbba]">মেম্বার ফি</span> একজনের
              জন্য বাৎসরিক <span className="text-pink-500">২৫০০</span> টাকা
            </li>
            <li className="font-bold">
              লয়্যাল <span className="text-[#3abbba]"> মেম্বার ফি </span>
              ফ্যামিলির জন্য বাৎসরিক <span className="text-pink-500">
                ৪৫০০
              </span>{" "}
              টাকা
            </li>
          </ul>

          <div className="mt-5">
            <button
              onClick={handleRegistration}
              className="uppercase no-underline px-6 py-3 bg-[#39bcbc] hover:bg-pink-600 text-white hover:text-white rounded text-sm"
            >
              Registration Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenTakaiShasto;
