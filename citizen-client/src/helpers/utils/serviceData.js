import { FaAppleAlt } from "react-icons/fa"; // Import icons
import { FaUserDoctor } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";

export const cardData = [
  {
    id: 1,
    text: "লয়্যাল মেম্বার হয়ে ঘরে বসে স্বাস্থ্য সেবা নিন",
    miniText: "HEALTH CARE AT YOUR HOME",
    enTitle: "Health care at your home",
    price: 150,
    image: "/images/services-2/HELTH CARE-at-01.jpg",
    banner: "/images/banner/HELTH-CARE-01-01.jpg",

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
            প্রতি ৩ মাসে ১ বার বাসায় গিয়ে স্বাস্থ্যসেবা দিবেন এবং প্রয়োজনে
            টেলিমেডিসিন সেবা। <br />
            (ভিজিট মাত্র ২০০ টাকা)
          </li>
          <li>
            <span className="text-pink-500 font-bold">
              অভিজ্ঞ নিউট্রিশনিস্টের পরামর্শ:
            </span>{" "}
            প্রতি মাসে ১ বার আপনার বাসায় গিয়ে আপনার আদর্শ ডায়েট চার্ট প্রদান সহ
            প্রয়োজনীয় নিউট্রিশনাল পরামর্শ প্রদান করবেন। <br />
            (ভিজিট মাত্র ২০০ টাকা)
          </li>
          <li>
            <span className="text-pink-500 font-bold">
              অভিজ্ঞ রেজিস্টার্ড নার্স:
            </span>{" "}
            প্রতি সপ্তাহে ১ বার এবং প্রতি মাসে সর্বোচ্চ ২-৪ বার বাসায় গিয়ে Vital
            Signs মনিটরিং করে হেলথ রেকর্ড বুকে লিপিবদ্ধ করে রাখবেন। <br />
            (ভিজিট মাত্র ১৫০ টাকা)
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
          <li>একজনের জন্য বাৎসরিক ২৫০০ টাকা।</li>
          <li>ফ্যামিলির জন্য বাৎসরিক ৪৫০০ টাকা।</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    text: "লয়্যাল মেম্বার হয়ে ঘরে বসে MBBS ডাক্তারের সেবা নিন",
    miniText: "ভিজিট মাত্র ২০০ টাকা",
    enTitle: "MBBS Doctor / Family Physician",
    image: "/images/services-2/family-01.jpg",
    banner: "/images/banner/JAHID-01.jpg",

    icon2: <FaUserDoctor className="w-10 h-10 text-[#3cb9ba]" />,
    content: (
      <div>
        <h2 className="text-lg mb-4">
          <span className="text-[#3abbba] font-bold">
            Citizen Care Bangladesh-
          </span>{" "}
          এর <span className="text-pink-500 font-bold">লয়্যাল মেম্বার</span>{" "}
          হয়ে ঘরে বসে <b>MBBS ডাক্তারের সেবা</b> নিন,{" "}
          <b>ভিজিট মাত্র ২০০ টাকা।</b>
        </h2>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
          Citizen Care Bangladesh- এর{" "}
          <span className="text-[#3abbba] font-bold">লয়্যাল মেম্বার</span> হয়ে
          আপনি ঘরে বসেই রেজিস্টার্ড অভিজ্ঞ MBBS ডাক্তারের মনিটরিং এ থাকতে পারবেন
          এবং প্রতি ৩ মাসে ১ বার সশরীরে বাসায় গিয়ে চিকিৎসা পরামর্শ প্রদান করবেন।
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
            <span className="text-pink-500 font-bold">স্বল্প খরচে:</span> মাত্র
            ২০০ টাকা ভিজিট এ আপনি একবারের জন্য অভিজ্ঞ MBBS ডাক্তারের পরামর্শ
            নিতে পারবেন। এটি খুবই সাশ্রয়ী মূল্যের সেবা।
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
    text: " ঘরে বসে অভিজ্ঞ নিউট্রিশনিস্ট এর পরামর্শ নিন",
    miniText: "ভিজিট মাত্র ২০০ টাকা",
    enTitle: "Nutritionists",
    image: "/images/services-2/NUTRI-BOXe-box-01.jpg",
    banner: "/images/banner/niutri-01.jpg",

    icon2: <FaAppleAlt className="w-10 h-10 text-[#3cb9ba]" />,
    content: (
      <div>
        <h2 className="text-lg mb-4">
          <span className="text-[#3abbba] font-bold">
            Citizen Care Bangladesh-
          </span>{" "}
          এর <span className="text-pink-500 font-bold">লয়্যাল মেম্বার</span>{" "}
          হয়ে ঘরে বসে <b>অভিজ্ঞ নিউট্রিশনিস্ট</b> এর পরামর্শ নিন,{" "}
          <b>ভিজিট মাত্র ২০০ টাকা।</b>
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
            <span className="text-pink-500 font-bold">স্বল্প খরচে:</span> মাত্র
            ২০০ টাকায় ভিজিট এ আপনি একবারের জন্য অভিজ্ঞ নিউট্রিশনিস্টের পরামর্শ
            নিতে পারবেন। এটি খুবই সাশ্রয়ী মূল্যের সেবা।
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
    text: "Telemedicine / E-Medical Consultancy",
    miniText: "ভিজিট মাত্র ২০০ টাকা",
    enTitle: "Telemedicine / E-Medical Consultancy",
    image: "/images/services-2/nurse box-01.jpg",
    banner: "/images/banner/nurse-01.jpg",
    icon: "/images/e-medical.png",
    content: (
      <div>
        {" "}
        <h2 className="text-lg mb-4">
          <span className="text-[#3abbba] font-bold">
            Citizen Care Bangladesh-
          </span>{" "}
          এর <span className="text-pink-500 font-bold">লয়্যাল মেম্বার</span>{" "}
          হয়ে ঘরে বসে <b>নার্সিং সেবা, মাত্র ১৫০ টাকা।</b>
        </h2>
        <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
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
        <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
          <li>
            <span className="text-pink-500 font-bold">
              রেজিস্টার্ড অভিজ্ঞ নার্স:
            </span>{" "}
            এই সেবাটি আপনাকে রেজিস্টার্ড এবং অভিজ্ঞ নার্সের মাধ্যমে সরবরাহ করা
            হয়। তাই আপনি নিশ্চিন্ত থাকতে পারেন যে আপনি সর্বোত্তম সেবা পাচ্ছেন।
          </li>
          <li>
            <span className="text-pink-500 font-bold">ঘরে বসে সেবা:</span>{" "}
            আপনাকে হাসপাতালে বা কষ্ট করে বাহিরে যাওয়ার প্রয়োজন নেই। নার্স
            আপনার বাড়িতে এসে নার্সিং সেবা প্রদান করবেন।
          </li>
          <li>
            <span className="text-pink-500 font-bold">স্বল্প খরচে:</span> মাত্র
            ১৫০ টাকায় আপনি একবারের জন্য নার্সের সেবা নিতে পারবেন। এটি খুবই
            সাশ্রয়ী মূল্যের সেবা।
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
    text: "Medicine & Medical Device",
    miniText: "At your home",
    enTitle: "Medicine & Medical Device",
    image: "/images/services-2/MEDICINE-01.jpg",
    icon2: <GiMedicines className="w-10 h-10 text-[#3cb9ba]" />,
  },
  {
    id: 6,
    text: "Health Tourism",
    miniText: "At your home",
    enTitle: "Health Tourism",
    image: "/images/services-2/Health tourism-01.jpg",
    icon: "/images/tourisom.png",
  },
  {
    id: 7,
    text: "Health Guide",
    miniText: "At your home",
    enTitle: "Health Guide",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    icon: "/images/health-guide.png",
  },

  {
    id: 8,
    text: "Health Check",
    miniText: "At your home",
    enTitle: "Health Check",
    image: "/images/services-2/chekup-01-01.jpg",
    icon: "/images/check.png",
  },
];
