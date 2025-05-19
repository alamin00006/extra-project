import { FaAppleAlt } from "react-icons/fa"; // Import icons
import { FaUserDoctor } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";

export const cardData = [
  {
    id: 1,
    text: "লয়্যাল মেম্বার হয়ে ঘরে বসে স্বাস্থ্য সেবা নিন।",
    miniText: "HEALTH CARE AT YOUR HOME",
    enTitle: "Health care at your home",
    price: 150,
    image: "/images/services-2/Health Care at your home.jpg",
    banner: "/images/banner/Health-Care-at-your-homee.jpg",

    icon2: <IoHomeOutline className="w-10 h-10 text-[#3cb9ba]" />,
    content: (
      <div>
        <h2 className="text-lg mb-4">
          Citizen Care Bangladesh- এর{" "}
          <span className="text-pink-500 font-bold">লয়্যাল মেম্বার</span> হয়ে
          ডাক্তার, নিউট্রিশনিস্ট ও নার্সের সশরীরে উপস্থিতিতে ঘরে বসে{" "}
          <b>স্বাস্থ্য সেবা নিন।</b>
        </h2>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          আপনি কেন <span className="text-[#3abbba] font-bold">CCB</span> লয়্যাল
          মেম্বার হবেন? কি কি সুবিধা পাবেন?
        </p>
        <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
          <li>
            <span className="text-pink-500 font-bold">
              রেজিস্টার্ড অভিজ্ঞ MBBS ডাক্তার:
            </span>{" "}
            প্রতি মাসে ১ বার বাসায় গিয়ে স্বাস্থ্যসেবা দিবেন এবং প্রয়োজনে
            টেলিমেডিসিন সেবা। <br />
            {/* (ভিজিট মাত্র ২০০ টাকা) */}
          </li>
          <li>
            <span className="text-pink-500 font-bold">
              অভিজ্ঞ নিউট্রিশনিস্টের পরামর্শ:
            </span>{" "}
            প্রতি মাসে ১ বার আপনার বাসায় গিয়ে আপনার আদর্শ ডায়েট চার্ট প্রদান সহ
            প্রয়োজনীয় নিউট্রিশনাল পরামর্শ প্রদান করবেন। <br />
            {/* (ভিজিট মাত্র ২০০ টাকা) */}
          </li>
          <li>
            <span className="text-pink-500 font-bold">
              অভিজ্ঞ রেজিস্টার্ড নার্স:
            </span>{" "}
            প্রতি সপ্তাহে ১ বার এবং প্রতি মাসে সর্বোচ্চ ২-৪ বার বাসায় গিয়ে Vital
            Signs মনিটরিং করে হেলথ রেকর্ড বুকে লিপিবদ্ধ করে রাখবেন। <br />
            {/* (ভিজিট মাত্র ১৫০ টাকা) */}
          </li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          এছাড়াও আমাদের লয়্যাল মেম্বার হলে আপনি পাচ্ছেন:
        </p>
        <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
          <li>CCB নমিনেটেড হাসপাতাল ও ডায়াগনস্টিক সেন্টারে বিশেষ ডিসকাউন্ট।</li>
          <li>ডেলিভারি চার্জ ছাড়া মেডিসিন ক্রয়ের সুবিধা।</li>
          <li>দেশে-বিদেশে হেলথ গাইডের সুবিধা।</li>
          <li>পাবলিক হেলথ বিশেষজ্ঞের বিশেষ কনসালটেন্সি।</li>
          <li>হেলথ ট্যুরিজম।</li>
          <li>ইমার্জেন্সি প্রয়োজনে এয়ার অ্যাম্বুলেন্স।</li>
          <li>
            ঘরে বসে সাশ্রয়ী মূল্য প্যাকেজ ভিত্তিক প্রয়োজনীয় মেডিক্যাল টেস্ট।
          </li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          আপনিও সিটিজেন কেয়ার বাংলাদেশ এর{" "}
          <span className="text-[#3abbba] font-bold">লয়্যাল মেম্বার</span> হয়ে
          নিজেকে সুস্থ রাখতে আরো মনযোগী হোন, ডাক্তার, নিউট্রিশনিস্ট, নার্সের
          সেবা নিন এবং স্বাস্থ্য ঝুঁকি প্রতিরোধে সচেষ্ট থাকুন।
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          লয়্যাল মেম্বার ফি:
        </p>
        <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
          <li>একজনের জন্য বাৎসরিক 4,500 টাকা।</li>
          <li>ফ্যামিলির জন্য বাৎসরিক 10,000 টাকা।</li>
          <li>মাসিক চার্জ 2,000 টাকা।</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    text: "লয়্যাল মেম্বার হয়ে ঘরে বসে MBBS ডাক্তারের সেবা নিন",
    miniText: "",
    enTitle: "MBBS Doctor / Family Physician",
    image: "/images/services-2/Service-Small-Banner-D2.jpg",
    banner: "/images/banner/Doctor Poster.jpg",

    icon2: <FaUserDoctor className="w-10 h-10 text-[#3cb9ba]" />,
    content: (
      <div>
        <h2 className="text-lg mb-4">
          <span className="text-[#3abbba] font-bold">
            Citizen Care Bangladesh-
          </span>{" "}
          এর <span className="text-pink-500 font-bold">লয়্যাল মেম্বার</span>{" "}
          হয়ে ঘরে বসে <b>MBBS ডাক্তারের সেবা</b> নিন,{" "}
          {/* <b>ভিজিট মাত্র ২০০ টাকা।</b> */}
        </h2>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          Citizen Care Bangladesh- এর{" "}
          <span className="text-[#3abbba] font-bold">লয়্যাল মেম্বার</span> হয়ে
          আপনি ঘরে বসেই রেজিস্টার্ড অভিজ্ঞ MBBS ডাক্তারের মনিটরিং এ থাকতে পারবেন
          এবং প্রতি মাসে ১ বার সশরীরে বাসায় গিয়ে চিকিৎসা পরামর্শ প্রদান করবেন।
          যাদের পরিবারে বয়স্ক সদস্য রয়েছে, ক্রনিক ডিজিজের রোগী কিংবা দীর্ঘ
          মেয়াদে ঔষধ সেবন করতে হয় তাদের নিয়মিত অভিজ্ঞ MBBS ডাক্তারের মনিটরিং এ
          থাকা খুবই গুরুত্বপূর্ণ। একজন সুস্থ মানুষ তার সুস্বাস্থ্যের জন্য এবং
          অসুস্থতার ঝুঁকি এড়াতে নিজেদের বাসায় বসে প্রাথমিক স্বাস্থ্যসেবা নিতে
          পারেন।
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          আসুন MBBS ডাক্তারের সেবা সম্পর্কে আরও বিস্তারিত জেনে নেওয়া যাক:
        </p>
        <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
          <li>
            <span className="text-pink-500 font-bold">
              রেজিস্টার্ড অভিজ্ঞ MBBS ডাক্তার:
            </span>{" "}
            এই সেবাটি আপনাকে রেজিস্টার্ড এবং অভিজ্ঞ MBBS ডাক্তার এর মাধ্যমে
            সরবরাহ করা হয়। তাই আপনি নিশ্চিন্ত থাকতে পারেন যে আপনি সর্বোত্তম
            সেবা পাচ্ছেন।
          </li>
          <li>
            <span className="text-pink-500 font-bold">ঘরে বসে সেবা:</span>{" "}
            আপনাকে হাসপাতালে বা কষ্ট করে বাহিরে যাওয়ার প্রয়োজন নেই। ডাক্তার
            আপনার বাড়িতে এসে চিকিৎসা পরামর্শ প্রদান করবেন।
          </li>
          <li>
            <span className="text-pink-500 font-bold">স্বল্প খরচে:</span>এ আপনি
            অভিজ্ঞ MBBS ডাক্তারের পরামর্শ নিতে পারবেন। খুবই সাশ্রয়ী মূল্যের
            সেবা।
          </li>
          <li>
            <span className="text-pink-500 font-bold">সুবিধাজনক:</span> আপনার
            জন্য একটি সময়সূচি নির্ধারণ করা হবে এবং MBBS ডাক্তার নির্ধারিত সময়ে
            আপনার বাড়িতে আসবেন।
          </li>
          <li>
            <span className="text-pink-500 font-bold">হাইজেনিক মেইন্টেন:</span>{" "}
            এটি সবচেয়ে গুরুত্বপূর্ণ। সেবা প্রদানের পূর্বে হাত ধুয়ে পরিষ্কার
            করা, হ্যান্ড গ্লাভস ব্যবহার, মাস্ক ব্যবহার করে সেবা প্রদান করে
            থাকেন।
          </li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          কেন MBBS ডাক্তারের পরামর্শ গুরুত্বপূর্ণ?
        </p>
        <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
          <li>
            সঠিক নির্ণয়: MBBS ডাক্তাররা তাদের বিশেষজ্ঞ জ্ঞানের মাধ্যমে রোগকে
            সঠিকভাবে নির্ণয় করতে পারেন।
          </li>
          <li>
            সর্বোত্তম চিকিৎসা: তারা রোগীর অবস্থা অনুযায়ী সর্বোত্তম চিকিৎসা
            পদ্ধতি নির্ধারণ করতে পারেন।
          </li>
          <li>
            জটিলতা প্রতিরোধ: সময়মতো এবং সঠিক চিকিৎসার মাধ্যমে জটিলতা প্রতিরোধ
            করা সম্ভব।
          </li>
          <li>
            স্বাস্থ্য সচেতনতা বৃদ্ধি: ডাক্তাররা রোগীকে স্বাস্থ্য সচেতনতা বৃদ্ধি
            করতে সাহায্য করেন।
          </li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-normal leading-8">
          মনে রাখবেন: MBBS ডাক্তারের পরামর্শ মেনে চলা আপনার স্বাস্থ্যের জন্য
          অত্যন্ত গুরুত্বপূর্ণ। কোন ধরনের স্বাস্থ্য সমস্যা হলে অবিলম্বে
          ডাক্তারের পরামর্শ নিন।
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-normal leading-8">
          আপনিও সিটিজেন কেয়ার বাংলাদেশ এর{" "}
          <span className="text-[#3abbba] font-bold">লয়্যাল মেম্বার</span> হয়ে
          নিজেকে সুস্থ রাখতে আরোও মনযোগী হোন, ঘরে বসে MBBS ডাক্তারের পরামর্শ
          নিন, স্বাস্থ্য ঝুঁকি প্রতিরোধে সচেষ্ট থাকুন।
        </p>
      </div>
    ),
  },
  {
    id: 3,
    text: "লয়্যাল মেম্বার হয়ে ঘরে বসে অভিজ্ঞ নিউট্রিশনিস্ট এর পরামর্শ নিন",
    miniText: "",
    enTitle: "Nutritionists",
    image: "/images/services-2/Nutronist-Poster.jpg",
    banner: "/images/banner/Nutronist Poster.jpg",

    icon2: <FaAppleAlt className="w-10 h-10 text-[#3cb9ba]" />,
    content: (
      <div>
        <h2 className="text-lg mb-4">
          <span className="text-[#3abbba] font-bold">
            Citizen Care Bangladesh-
          </span>{" "}
          এর <span className="text-pink-500 font-bold">লয়্যাল মেম্বার</span>{" "}
          হয়ে ঘরে বসে <b>অভিজ্ঞ নিউট্রিশনিস্ট</b> এর পরামর্শ নিন,{" "}
          {/* <b>ভিজিট মাত্র ২০০ টাকা।</b> */}
        </h2>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          <span className="text-red-500 font-bold">
            নিউট্রিশনিস্টের পরামর্শ: সুস্থ জীবনের চাবিকাঠি
          </span>
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          Citizen Care Bangladesh- এর{" "}
          <span className="text-[#3abbba] font-bold">লয়্যাল মেম্বার</span> হয়ে
          আপনি ঘরে বসেই অভিজ্ঞ নিউট্রিশনিস্ট এর মনিটরিং এ থাকতে পারবেন এবং প্রতি
          মাসে ১ বার সশরীরে আপনার বাসায় গিয়ে আপনার আদর্শ ডায়েট চার্ট প্রদান সহ
          প্রয়োজনীয় নিউট্রিশনাল পরামর্শ প্রদান করবেন। যাদের পরিবারে বয়স্ক সদস্য
          রয়েছে, ক্রনিক ডিজিজের রোগী কিংবা দীর্ঘ মেয়াদে ঔষধ সেবন করতে হয় তাদের
          নিয়মিত অভিজ্ঞ নিউট্রিশনিস্টের মনিটরিং এ থাকা খুবই গুরুত্বপূর্ণ। একজন
          সুস্থ মানুষও তার সুস্বাস্থ্যের জন্য এবং অসুস্থতার ঝুঁকি এড়াতে নিজেদের
          বাসায় বসে স্বাস্থ্যসেবা নিতে পারেন।
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          আসুন অভিজ্ঞ নিউট্রিশনিস্টের সেবা সম্পর্কে আরও বিস্তারিত জেনে নেওয়া
          যাক:
        </p>
        <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
          <li>
            <span className="text-pink-500 font-bold">
              রেজিস্টার্ড অভিজ্ঞ নিউট্রিশনিস্ট:
            </span>{" "}
            এই সেবাটি আপনাকে অভিজ্ঞ নিউট্রিশনিস্টের মাধ্যমে প্রদান করা হয়। তাই
            আপনি নিশ্চিন্ত থাকতে পারেন যে আপনি সর্বোত্তম সেবা পাচ্ছেন।
          </li>
          <li>
            <span className="text-pink-500 font-bold">ঘরে বসে সেবা:</span>{" "}
            আপনাকে হাসপাতালে বা কষ্ট করে বাহিরে যাওয়ার প্রয়োজন নেই।
            নিউট্রিশনিস্ট আপনার বাড়িতে এসে পরামর্শ প্রদান করবেন।
          </li>
          <li>
            <span className="text-pink-500 font-bold">স্বল্প খরচে:</span> আপনি
            অভিজ্ঞ নিউট্রিশনিস্টের পরামর্শ নিতে পারবেন। খুবই সাশ্রয়ী মূল্যে।
          </li>
          <li>
            <span className="text-pink-500 font-bold">সুবিধাজনক:</span> আপনার
            জন্য একটি সময়সূচি নির্ধারণ করা হবে এবং অভিজ্ঞ নিউট্রিশনিস্ট
            নির্ধারিত সময়ে আপনার বাড়িতে আসবেন।
          </li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          কেন নিউট্রিশনিস্টের পরামর্শ গুরুত্বপূর্ণ?
        </p>
        <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
          <li>সুস্থ জীবন: সুস্থ জীবন যাপন করতে সাহায্য করে।</li>
          <li>রোগ প্রতিরোধ: বিভিন্ন রোগের ঝুঁকি কমাতে সাহায্য করে।</li>
          <li>ওজন নিয়ন্ত্রণ: ওজন নিয়ন্ত্রণে সাহায্য করে।</li>
          <li>শক্তি বৃদ্ধি: শারীরিক ও মানসিক শক্তি বৃদ্ধি করে।</li>
          <li>
            দীর্ঘস্থায়ী স্বাস্থ্য: দীর্ঘস্থায়ী স্বাস্থ্য ভালো রাখতে সাহায্য
            করে।
          </li>
          <li>
            রোগীদের জন্য: ডায়াবেটিস, হৃদরোগ, উচ্চ রক্তচাপ ইত্যাদি রোগীদের জন্য
            বিশেষ খাদ্য তালিকা প্রস্তুত করে দেন।
          </li>
          <li>
            শিশু, কিশোর ও বয়স্কদের জন্য: বিভিন্ন বয়সের মানুষের জন্য উপযুক্ত
            খাদ্য পরিকল্পনা তৈরি করে দেন।
          </li>
          <li>
            অ্যালার্জি ও অসহিষ্ণুতা: খাদ্যের অ্যালার্জি বা অসহিষ্ণুতা থাকলে তার
            জন্য উপযুক্ত খাবারের তালিকা প্রস্তুত করে দেন।
          </li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-normal leading-8">
          মনে রাখবেন: নিউট্রিশনিস্টের পরামর্শ মেনে চলা আপনার স্বাস্থ্যের জন্য
          অত্যন্ত গুরুত্বপূর্ণ। কোনো ধরনের স্বাস্থ্য সমস্যা হলে অবশ্যই একজন
          নিউট্রিশনিস্টের পরামর্শ নিন।
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-normal leading-8">
          আপনিও সিটিজেন কেয়ার বাংলাদেশ এর{" "}
          <span className="text-[#3abbba] font-bold">লয়্যাল মেম্বার</span> হয়ে
          নিজেকে সুস্থ রাখতে আরোও মনযোগী হোন, ঘরে বসে অভিজ্ঞ নিউট্রিশনিস্টের
          পরামর্শ নিন, স্বাস্থ্য ঝুঁকি প্রতিরোধে সচেষ্ট থাকুন।
        </p>
      </div>
    ),
  },
  {
    id: 4,
    text: "লয়্যাল মেম্বার হয়ে ঘরে বসে নার্সিং সেবা নিন",
    miniText: "",
    enTitle: "Nurse",
    image: "/images/services-2/Nurse Poster.jpg",
    banner: "/images/banner/Nurse Poster.jpg",
    icon: "/images/e-medical.png",
    content: (
      <div>
        {" "}
        <h2 className="text-lg mb-4 font-bengali">
          <span className="text-[#3abbba] font-bold">
            Citizen Care Bangladesh-
          </span>{" "}
          এর <span className="text-pink-500 font-bold">লয়্যাল মেম্বার</span>{" "}
          হয়ে ঘরে বসে{" "}
          <span className="font-black text-sm">নার্সিং সেবা ।</span>
        </h2>
        <p className="text-base md:text-base mb-4 text-[#565656] leading-8 font-bengali">
          Citizen Care Bangladesh- এর{" "}
          <span className="text-[#3abbba] font-bold">লয়্যাল মেম্বার</span> হয়ে
          আপনি ঘরে বসেই রেজিস্টার্ড অভিজ্ঞ নার্সের মাধ্যমে physical Vital Signs
          মনিটরিং করতে পারবেন। এটি একটি দারুণ সুযোগ, বিশেষ করে যাদের পরিবারের
          বয়স্ক সদস্য রয়েছেন, দীর্ঘ মেয়াদে ঔষধ সেবন করতে হয় এবং একজন সুস্থ
          মানুষ তার সুস্বাস্থ্যের জন্য এবং অসুস্থতার ঝুঁকি এড়াতে নিজেদের বাসায়
          বসে প্রাথমিক স্বাস্থ্যসেবা নিতে পারেন।
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          আসুন নার্সের সেবা সম্পর্কে আরও বিস্তারিত জেনে নেওয়া যাক:
        </p>
        <ul className="list-disc ml-4 space-y-2 text-base text-[#565656]">
          <li className="font-bengali">
            <span className="text-pink-500 font-bold">
              রেজিস্টার্ড অভিজ্ঞ নার্স:
            </span>{" "}
            এই সেবাটি আপনাকে রেজিস্টার্ড এবং অভিজ্ঞ নার্সের মাধ্যমে সরবরাহ করা
            হয়। তাই আপনি নিশ্চিন্ত থাকতে পারেন যে আপনি সর্বোত্তম সেবা পাচ্ছেন।
          </li>
          <li className="font-bengali">
            <span className="text-pink-500 font-bold">ঘরে বসে সেবা:</span>{" "}
            আপনাকে হাসপাতালে বা কষ্ট করে বাহিরে যাওয়ার প্রয়োজন নেই। নার্স
            আপনার বাড়িতে এসে নার্সিং সেবা প্রদান করবেন।
          </li>
          <li>
            <span className="text-pink-500 font-bold">স্বল্প খরচে:</span> আপনি
            নার্সের সেবা নিতে পারবেন। খুবই সাশ্রয়ী মূল্যে।
          </li>
          <li>
            <span className="text-pink-500 font-bold">সুবিধাজনক:</span> আপনার
            জন্য একটি সময়সূচি নির্ধারণ করা হবে এবং নার্স নির্ধারিত সময়ে আপনার
            বাড়িতে আসবেন।
          </li>
          <li>
            <span className="text-pink-500 font-bold">হাইজেনিক মেইন্টেন:</span>{" "}
            এটি সবচেয়ে গুরুত্বপূর্ণ। সেবা প্রদানের পূর্বে হাত ধুয়ে পরিষ্কার
            করা, হ্যান্ড গ্লাভস ব্যবহার, মাস্ক ব্যবহার করে সেবা প্রদান করে
            থাকেন।
          </li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          কোন ধরনের সেবা পাওয়া যায়?
        </p>
        <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
          <li>ব্লাড প্রেসার (রক্তচাপ) মনিটরিং</li>
          <li>ডায়াবেটিস টেস্ট</li>
          <li>ব্লাড অক্সিজেন স্যাচুরেশন পরিমাপ</li>
          <li>বডি ওয়েট মেজারমেন্ট</li>
          <li>বডি মাস ইনডেক্স (BMI)</li>
          <li>রেসপিরেটরি রেট মনিটরিং</li>
          <li>পালস রিডিং</li>
          <li>বডি টেম্পারেচার মনিটরিং</li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          এ ছাড়াও রোগীর প্রেসক্রিপশন অনুযায়ী নিয়মিত সঠিক সময় ঔষধ সেবন করার বিষয়ে
          অবগত করি। কোন অসাবধানতার কারণে মেডিসিনের ডোজ চেইঞ্জ হয়ে যাচ্ছে কিনা সে
          বিষয়ে সতর্ক থাকার ও সঠিক মেডিসিন সেবন করা সহ শরীর চর্চা, খাদ্য গ্রহনের
          নিয়ম মেনে চলার বিষয়ে অবগত করি।
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          আপনিও সিটিজেন কেয়ার বাংলাদেশ এর{" "}
          <span className="text-[#3abbba] font-bold">লয়্যাল মেম্বার</span> হয়ে
          নিজেকে সুস্থ রাখতে আরোও মনযোগী হোন, ঘরে বসে নার্সিং সেবা নিন,
          স্বাস্থ্য ঝুঁকি প্রতিরোধে সচেষ্ট থাকুন।
        </p>
      </div>
    ),
  },
  {
    id: 5,
    text: "মেডিসিন & মেডিকেল ডিভাইস",
    miniText: "Free Home delivery",
    enTitle: "Medicine & Medical Device",
    image: "/images/services-2/MEDICINE-01.jpg",
    banner: "/images/banner/Medicine-and-Medical-Device.jpg",
    icon2: <GiMedicines className="w-10 h-10 text-[#3cb9ba]" />,
  },
  // {
  //   id: 6,
  //   text: "Health Tourism",
  //   miniText: "",
  //   enTitle: "Health Tourism",
  //   image: "/images/services-2/Health tourism-01.jpg",
  //   icon: "/images/tourisom.png",
  // },

  {
    id: 6,
    text: "হেলথ ট্যুরিজম",
    miniText: "ঝামেলামুক্ত চিকিৎসা সফর",
    enTitle: "Health Tourism",
    image: "/images/services-2/Health Turism.jpg",
    banner: "/images/banner/Health Turism.jpg",
    icon: "/images/tourisom.png",
    content: (
      <div>
        <h2 className="text-lg mb-4 font-bengali">
          <span className="text-[#3abbba] font-bold">
            Citizen Care Bangladesh-
          </span>{" "}
          এর <span className="text-pink-500 font-bold">হেলথ ট্যুরিজম</span>{" "}
          সার্ভিসে বিদেশে উন্নত চিকিৎসা – নিশ্চিন্তে।
        </h2>
        <p className="text-base md:text-base mb-4 text-[#565656] leading-8 font-bengali">
          জটিল রোগ, উন্নত প্রযুক্তি কিংবা অভিজ্ঞ বিশেষজ্ঞ চিকিৎসকের পরামর্শ –
          এখন অনেকেই চিকিৎসার জন্য বিদেশমুখী হচ্ছেন। কিন্তু বিদেশে চিকিৎসা নিতে
          গিয়ে বহু জটিলতা ও অনিশ্চয়তার মুখোমুখি হতে হয়। দেশ, হাসপাতাল,
          অ্যাপয়েন্টমেন্ট, ভিসা, টিকিট, থাকা-খাওয়ার ব্যবস্থা – সব মিলিয়ে এক
          বিশাল চ্যালেঞ্জ! Citizen Care Bangladesh-এর{" "}
          <span className="text-[#3abbba] font-bold">হেলথ ট্যুরিজম</span> সেবা
          আপনাকে এই সকল জটিলতা থেকে মুক্তি দেবে এবং আপনার চিকিৎসাভিত্তিক বিদেশ
          সফরকে নির্ঝঞ্ঝাট করবে।
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          হেলথ ট্যুরিজম প্যাকেজে কী কী সেবা পাবেন?
        </p>
        <ul className="list-disc ml-4 space-y-2 text-base text-[#565656]">
          <li className="font-bengali">
            <span className="text-pink-500 font-bold">
              চিকিৎসা কেন্দ্রিক সফর পরিকল্পনা:
            </span>{" "}
            রোগ অনুযায়ী উপযুক্ত দেশ, হাসপাতাল ও বিশেষজ্ঞ ডাক্তার নির্বাচন করে
            একটি পূর্ণাঙ্গ চিকিৎসা রোডম্যাপ তৈরি করে দেওয়া হয়।
          </li>
          <li>
            <span className="text-pink-500 font-bold">
              বিশেষজ্ঞ অ্যাপয়েন্টমেন্ট ও হাসপাতাল বুকিং:
            </span>{" "}
            বিদেশের স্বনামধন্য হাসপাতাল ও চিকিৎসকের সাথে যোগাযোগ করে
            অ্যাপয়েন্টমেন্ট এবং ভর্তি প্রক্রিয়া নিশ্চিত করা হয়।
          </li>
          <li>
            <span className="text-pink-500 font-bold">
              ভ্রমণ সংক্রান্ত সম্পূর্ণ ব্যবস্থা:
            </span>{" "}
            পাসপোর্ট, মেডিকেল ভিসা, বিমান টিকিট, হোটেল বুকিং, এয়ারপোর্ট
            পিক-ড্রপ সহ ভ্রমণের প্রতিটি ধাপে সহযোগিতা করা হয়।
          </li>
          <li>
            <span className="text-pink-500 font-bold">
              অনুবাদ ও তথ্য সহায়তা:
            </span>{" "}
            চিকিৎসা রিপোর্টের অনুবাদ, ব্যাখ্যা, ভাষাগত সমস্যা সমাধান সহ তথ্য
            বুঝতে সহযোগিতা করে যেকোনো ধরণের বিভ্রান্তি দূর করা হয়।
          </li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          কোথায় যেতে পারবেন?
        </p>
        <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
          <li>ভারত</li>
          <li>থাইল্যান্ড</li>
          <li>সিঙ্গাপুর</li>
          <li>মালয়েশিয়া</li>
          <li>বিশ্বের বিভিন্ন দেশের উন্নতমানের হাসপাতাল ও চিকিৎসা কেন্দ্র</li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          কেন হেলথ ট্যুরিজম সেবা আপনার জন্য গুরুত্বপূর্ণ?
        </p>
        <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
          <li>বিদেশে চিকিৎসা নিয়ে দুশ্চিন্তা ও বিভ্রান্তি কমবে।</li>
          <li>সময় ও অর্থ দুটোই সাশ্রয় হবে।</li>
          <li>দ্রুত, নির্ভুল ও গাইডেড চিকিৎসা নিশ্চিত হবে।</li>
          <li>চিকিৎসাভিত্তিক সফর হবে নিরবিচারে পরিকল্পিত ও ঝামেলামুক্ত।</li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          মনে রাখবেন: চিকিৎসার সময় ভুল সিদ্ধান্ত নয়, প্রয়োজন অভিজ্ঞ গাইড।{" "}
          <span className="text-[#3abbba] font-bold">হেলথ ট্যুরিজম</span>{" "}
          সার্ভিসের সাথে থাকুন – আর নিশ্চিন্তে শুরু করুন সুস্থতার যাত্রা।
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          Citizen Care Bangladesh – আপনজনের মতো সেবা, ঘরে ঘরে।
        </p>
      </div>
    ),
  },

  // {
  //   id: 7,
  //   text: "Health Guide",
  //   miniText: "",
  //   enTitle: "Health Guide",
  //   image: "/images/services-2/HEALTH GUIDE-01.jpg",
  //   icon: "/images/health-guide.png",
  // },

  {
    id: 7,
    text: "হেলথ গাইড",
    miniText: "মাত্র ৫০০ টাকা থেকে শুরু",
    enTitle: "Health Guide",
    image: "/images/services-2/Health Guide.jpg",
    banner: "/images/banner/Health Guide.jpg",
    icon: "/images/health-guide.png",
    content: (
      <div>
        <h2 className="text-lg mb-4 font-bengali">
          <span className="text-[#3abbba] font-bold">
            Citizen Care Bangladesh-
          </span>{" "}
          এর <span className="text-pink-500 font-bold">হেলথ গাইড</span> সার্ভিসে
          রোগীর পাশে একজন নির্ভরযোগ্য সঙ্গী।
        </h2>
        <p className="text-base md:text-base mb-4 text-[#565656] leading-8 font-bengali">
          রোগী অনেক সময় একা থাকেন, পরিবারের কেউ কাছে নেই বা চিকিৎসা বিষয়ক নানা
          জটিলতা বুঝে ওঠা কঠিন হয়ে পড়ে। ঠিক তখনই প্রয়োজন একজন মানবিক ও দক্ষ
          সহকারীর, যিনি শুধুই সহকারী নন – একেবারে পরিবারের একজন সদস্যের মতো পাশে
          থাকবেন। Citizen Care Bangladesh-এর{" "}
          <span className="text-[#3abbba] font-bold">হেলথ গাইড</span> হলেন একজন
          প্রশিক্ষিত ও বিশ্বস্ত সহকারী, যিনি রোগীর পাশে থেকে প্রতিদিনের
          স্বাস্থ্য পরিচর্যা, ওষুধ গ্রহণ, রিপোর্ট বোঝা এবং প্রয়োজনীয় চিকিৎসা
          সহায়তা নিশ্চিত করেন।
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          কেন ‘হেলথ গাইড’ এত গুরুত্বপূর্ণ?
        </p>
        <ul className="list-disc ml-4 space-y-2 text-base text-[#565656]">
          <li className="font-bengali">
            <span className="text-pink-500 font-bold">সবসময় পাশে:</span> রোগী
            কখনো একা থাকেন না – একজন বিশ্বস্ত সহকারী থাকেন তার পাশে।
          </li>
          <li>
            <span className="text-pink-500 font-bold">
              ওষুধ ও চিকিৎসা ঠিক সময়ে:
            </span>{" "}
            সময়মতো ওষুধ সেবন এবং চিকিৎসা গ্রহণ নিশ্চিত হয়।
          </li>
          <li>
            <span className="text-pink-500 font-bold">নিরাপত্তা:</span> পরিবার
            পাশে না থাকলেও রোগী থাকেন সুরক্ষিত ও গাইডেড।
          </li>
          <li>
            <span className="text-pink-500 font-bold">
              বিদেশে চিকিৎসা বা দূরে থাকা:
            </span>{" "}
            মন থেকে নিশ্চিন্ত থাকা যায় – হেলথ গাইড রোগীর দেখভাল করেন।
          </li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          হেলথ গাইড কী কী দায়িত্ব পালন করেন?
        </p>
        <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
          <li>রোগীর ওষুধ সঠিক সময়ে খাওয়ার বিষয়টি নিশ্চিত করেন।</li>
          <li>
            চিকিৎসকের প্রেসক্রিপশন অনুযায়ী রোগীকে গাইড করেন এবং রিপোর্ট বুঝতে
            সহায়তা করেন।
          </li>
          <li>
            প্রতিদিন রোগীর শারীরিক অবস্থা পর্যবেক্ষণ করে সেবা টিমকে আপডেট দেন।
          </li>
          <li>
            হাসপাতাল, ডায়াগনস্টিক বা অন্যান্য স্বাস্থ্যসেবার প্রয়োজন হলে রোগী ও
            পরিবারের পক্ষ থেকে তাতে সহায়তা করেন।
          </li>
          <li>সবসময় রোগীর পাশে থেকে একজন আপনজনের মতো দায়িত্ব পালন করেন।</li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          সার্ভিস সময় ও মূল্য:
        </p>
        <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
          <li>
            <span className="font-bold">বাংলাদেশে (দেশের ভেতর):</span> প্রতিদিন
            ৮ ঘণ্টা, পারিশ্রমিক: মাত্র ৫০০ টাকা/দিন।
          </li>
          <li>
            <span className="font-bold">বিদেশগামী বা প্রবাসে:</span> প্রতিদিন ৮
            ঘণ্টা, পারিশ্রমিক: ১০০০ টাকা/দিন।
          </li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          মনে রাখবেন: একজন হেলথ গাইড শুধু একজন সহকারী নন – তিনি আপনার পরিবারের
          একজন বিশ্বস্ত অংশ হয়ে ওঠেন। সুস্থতা ও মানসিক প্রশান্তির জন্য আজই{" "}
          <span className="text-[#3abbba] font-bold">হেলথ গাইড</span> সার্ভিস
          গ্রহণ করুন।
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          Citizen Care Bangladesh – আপনজনের মতো সেবা, ঘরে ঘরে।
        </p>
      </div>
    ),
  },

  // {
  //   id: 8,
  //   text: "Home Sample Collection",
  //   miniText: "At your home",
  //   enTitle: "Home Sample Collection",
  //   image: "/images/services-2/health-check.jpg",
  //   icon: "/images/check.png",
  // },
  {
    id: 8,
    text: "ঘরে বসেই স্বাস্থ্য পরীক্ষা",
    miniText: "ঘরে বসে নমুনা দিন",
    enTitle: "Home Sample Collection",
    image: "/images/services-2/Home Sample Collection.jpg",
    banner: "/images/banner/Home sample collection.jpg",
    icon: "/images/check.png",
    content: (
      <div>
        <h2 className="text-lg mb-4 font-bengali">
          <span className="text-[#3abbba] font-bold">
            Citizen Care Bangladesh-
          </span>{" "}
          এর{" "}
          <span className="text-pink-500 font-bold">হোম স্যাম্পল কালেকশন</span>{" "}
          সেবায় ঘরে বসেই স্বাস্থ্য পরীক্ষা।
        </h2>
        <p className="text-base md:text-base mb-4 text-[#565656] leading-8 font-bengali">
          আপনার সময়, নিরাপত্তা এবং স্বাস্থ্যের কথা ভেবে Citizen Care Bangladesh
          নিয়ে এসেছে ঘরে বসে নমুনা সংগ্রহের নির্ভরযোগ্য সেবা। রুটিন হেলথ চেকআপ
          হোক কিংবা নির্দিষ্ট কোনো রোগ নির্ণয়ের প্রয়োজন – ল্যাব টেস্ট এখন আর
          ঝামেলার নয়। আমাদের{" "}
          <span className="text-[#3abbba] font-bold">হোম স্যাম্পল কালেকশন</span>{" "}
          সেবার মাধ্যমে ঘরে বসেই নমুনা দিন এবং রিপোর্ট পান অনলাইনে।
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          আমাদের এই সেবায় আপনি কী কী সুবিধা পাবেন?
        </p>
        <ul className="list-disc ml-4 space-y-2 text-base text-[#565656]">
          <li className="font-bengali">
            <span className="text-pink-500 font-bold">
              নমুনা সংগ্রহের জন্য দক্ষ টিম:
            </span>{" "}
            BSc নার্স ও প্রশিক্ষিত ফিল্ড টিম আপনার নির্ধারিত ঠিকানায় গিয়ে
            স্বাস্থ্যবিধি মেনে রক্ত, ইউরিন, সুগারসহ বিভিন্ন ধরনের নমুনা সংগ্রহ
            করে।
          </li>
          <li>
            <span className="text-pink-500 font-bold">
              নির্ভরযোগ্য ল্যাব পার্টনার:
            </span>{" "}
            আপনার নমুনা পাঠানো হয় আমাদের বিশ্বস্ত ও মানসম্পন্ন ল্যাব পার্টনারদের
            কাছে, ফলে রিপোর্ট থাকে নির্ভুল ও সময়মতো।
          </li>
          <li>
            <span className="text-pink-500 font-bold">
              দ্রুত ও ডিজিটাল রিপোর্ট:
            </span>{" "}
            নমুনা সংগ্রহের পর আপনি WhatsApp বা Email-এর মাধ্যমে দ্রুত রিপোর্ট
            হাতে পাবেন। চাইলে প্রিন্টেড কপি-ও পেতে পারেন।
          </li>
          <li>
            <span className="text-pink-500 font-bold">
              নিরাপদ ও হাইজেনিক পদ্ধতি:
            </span>{" "}
            প্রতিটি নমুনা সংগ্রহ হয় স্যানিটাইজড ও ডিসপোজেবল সরঞ্জাম ব্যবহার করে,
            সর্বোচ্চ নিরাপত্তা নিশ্চিত করে।
          </li>
          <li>
            <span className="text-pink-500 font-bold">
              সময় ও ভ্রমণের খরচ সাশ্রয়:
            </span>{" "}
            ল্যাবে যাওয়ার জন্য রাস্তায় সময়, পরিবহন খরচ – সবকিছুর ঝামেলা থেকে
            মুক্তি, ঘরে বসেই স্বাস্থ্যপরীক্ষা হয়ে যাবে।
          </li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          কারা নিতে পারেন এই সেবা?
        </p>
        <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
          <li>বয়স্ক ও শারীরিকভাবে দুর্বল রোগী</li>
          <li>ব্যস্ত কর্মজীবী মানুষ</li>
          <li>শিশুদের স্বাস্থ্য পরীক্ষা</li>
          <li>প্রেগন্যান্ট মায়েরা বা বেড রেস্টে থাকা রোগী</li>
          <li>রুটিন চেকআপ করতে ইচ্ছুক কেউ</li>
        </ul>
        <p className="text-sm md:text-base mb-4 text-[#565656] font-bold">
          সেবার আওতাভুক্ত এলাকা:
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          ঢাকা শহরের প্রায় সব এলাকাজুড়ে আমাদের হোম সার্ভিস টিম কার্যক্রম
          পরিচালনা করে।
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          Citizen Care Bangladesh-এর{" "}
          <span className="text-[#3abbba] font-bold">হোম স্যাম্পল কালেকশন</span>{" "}
          সেবার সাথে থাকুন – ঘরে বসেই নিশ্চিন্তে স্বাস্থ্য পরীক্ষা করুন, সময় ও
          শক্তি সাশ্রয় করুন।
        </p>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          Citizen Care Bangladesh – আপনজনের মতো সেবা, ঘরে ঘরে।
        </p>
      </div>
    ),
  },
];
