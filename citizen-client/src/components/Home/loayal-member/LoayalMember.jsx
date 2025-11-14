// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import {
//   Stethoscope,
//   Utensils,
//   HeartPulse,
//   DollarSign,
//   Users,
//   Calendar,
//   Building,
//   Truck,
//   Globe,
//   UserCheck,
//   Plane,
//   Ambulance,
//   TestTube,
//   ShieldCheck,
//   Clock,
//   FileText,
//   ChevronDown,
//   Star,
//   CheckCircle2,
//   Phone,
//   MessageCircle,
//   Facebook,
// } from "lucide-react";
// import ContactInfo from "./ContactInfo";

// const LoayalMember = ({ userData }) => {
//   const router = useRouter();
//   const [isMore, setIsMore] = useState(false);

//   const handleRegistration = () => {
//     return router.push(`/service-application`);
//   };

//   return (
//     <div className="custom-container shadow-md rounded-2xl overflow-hidden border border-gray-100 bg-white">
//       {/* Header Section */}
//       <div className="bg-gradient-to-r from-[#3abbba] to-[#2a9a9a] text-white p-6 text-center">
//         <h1 className="text-2xl md:text-3xl font-bold font-bengali mb-2">
//           <span className="text-white">Citizen Care Bangladesh</span> - এর
//           <span className="text-yellow-300"> প্রিমিয়াম মেম্বারশিপ</span>
//         </h1>
//         <p className="text-lg opacity-90 font-bengali">
//           ডাক্তার, নিউট্রিশনিস্ট ও নার্সের সশরীরে উপস্থিতিতে ঘরে বসে স্বাস্থ্য
//           সেবা
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
//         {/* Left Column - Benefits */}
//         <div className="space-y-6">
//           {/* Main Benefits Card */}
//           <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#3abbba]">
//             <h2 className="text-xl font-bold text-gray-800 mb-4 font-bengali flex items-center gap-2">
//               <Stethoscope className="w-5 h-5 text-red-500" />
//               কেন CCB লয়্যাল মেম্বার হবেন?
//             </h2>

//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <Stethoscope className="w-4 h-4 text-blue-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800 font-bengali">
//                     MBBS ডাক্তার
//                   </h4>
//                   <p className="text-gray-600 text-sm font-bengali">
//                     প্রতি মাসে ১ বার বাসায় স্বাস্থ্যসেবা + টেলিমেডিসিন সেবা
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-3">
//                 <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <Utensils className="w-4 h-4 text-green-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800 font-bengali">
//                     নিউট্রিশনিস্ট
//                   </h4>
//                   <p className="text-gray-600 text-sm font-bengali">
//                     প্রতি মাসে ১ বার ব্যক্তিগত ডায়েট চার্ট ও পুষ্টি পরামর্শ
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-3">
//                 <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                   <HeartPulse className="w-4 h-4 text-purple-600" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-800 font-bengali">
//                     রেজিস্টার্ড নার্স
//                   </h4>
//                   <p className="text-gray-600 text-sm font-bengali">
//                     সপ্তাহে ১ বার + মাসে ২-৪ বার Vital Signs মনিটরিং
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Pricing Card */}
//           <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-xl p-6 shadow-md border border-pink-100">
//             <h2 className="text-xl font-bold text-gray-800 mb-4 font-bengali flex items-center gap-2">
//               <DollarSign className="w-5 h-5 text-pink-500" />
//               মেম্বারশিপ প্যাকেজ
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
//                 <Users className="w-8 h-8 text-[#3abbba] mx-auto mb-2" />
//                 <div className="text-sm text-gray-600 font-bengali">
//                   একজনের জন্য
//                 </div>
//                 <div className="text-2xl font-bold text-[#3abbba] font-bengali">
//                   ৫,০০০
//                 </div>
//                 <div className="text-xs text-gray-500 font-bengali">
//                   বাৎসরিক
//                 </div>
//               </div>

//               <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
//                 <Users className="w-8 h-8 text-pink-500 mx-auto mb-2" />
//                 <div className="text-sm text-gray-600 font-bengali">
//                   ফ্যামিলির জন্য
//                 </div>
//                 <div className="text-2xl font-bold text-pink-500 font-bengali">
//                   ৯,৯৯৯
//                 </div>
//                 <div className="text-xs text-gray-500 font-bengali">
//                   বাৎসরিক
//                 </div>
//               </div>

//               <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
//                 <Calendar className="w-8 h-8 text-[#3abbba] mx-auto mb-2" />
//                 <div className="text-sm text-gray-600 font-bengali">
//                   সিঙ্গেল মাসিক
//                 </div>
//                 <div className="text-2xl font-bold text-[#3abbba] font-bengali">
//                   ৪,৪৪৪
//                 </div>
//                 <div className="text-xs text-gray-500 font-bengali">মাসিক</div>
//               </div>

//               <div className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100">
//                 <Calendar className="w-8 h-8 text-pink-500 mx-auto mb-2" />
//                 <div className="text-sm text-gray-600 font-bengali">
//                   ফ্যামিলি মাসিক
//                 </div>
//                 <div className="text-2xl font-bold text-pink-500 font-bengali">
//                   ৮,৮৮৮
//                 </div>
//                 <div className="text-xs text-gray-500 font-bengali">মাসিক</div>
//               </div>
//             </div>
//           </div>
//           {isMore && <ContactInfo />}
//         </div>

//         {/* Right Column - Additional Features & CTA */}
//         <div className="space-y-6">
//           {/* Additional Benefits */}
//           <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-pink-500">
//             <h2 className="text-xl font-bold text-gray-800 mb-4 font-bengali flex items-center gap-2">
//               <CheckCircle2 className="w-5 h-5 text-[#3abbba]" />
//               অতিরিক্ত সুবিধাসমূহ
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
//                 <Building className="w-4 h-4 text-[#3abbba] flex-shrink-0" />
//                 <span className="text-sm text-gray-700 font-bengali">
//                   হাসপাতাল ডিসকাউন্ট
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
//                 <Truck className="w-4 h-4 text-[#3abbba] flex-shrink-0" />
//                 <span className="text-sm text-gray-700 font-bengali">
//                   ফ্রি মেডিসিন ডেলিভারি
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
//                 <Globe className="w-4 h-4 text-[#3abbba] flex-shrink-0" />
//                 <span className="text-sm text-gray-700 font-bengali">
//                   হেলথ গাইড
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
//                 <UserCheck className="w-4 h-4 text-[#3abbba] flex-shrink-0" />
//                 <span className="text-sm text-gray-700 font-bengali">
//                   বিশেষজ্ঞ কনসালটেন্সি
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
//                 <Plane className="w-4 h-4 text-[#3abbba] flex-shrink-0" />
//                 <span className="text-sm text-gray-700 font-bengali">
//                   হেলথ ট্যুরিজম
//                 </span>
//               </div>
//               {/* <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
//                 <Ambulance className="w-4 h-4 text-[#3abbba] flex-shrink-0" />
//                 <span className="text-sm text-gray-700 font-bengali">
//                   এয়ার অ্যাম্বুলেন্স
//                 </span>
//               </div> */}
//               <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
//                 <TestTube className="w-4 h-4 text-[#3abbba] flex-shrink-0" />
//                 <span className="text-sm text-gray-700 font-bengali">
//                   হোম মেডিক্যাল টেস্ট
//                 </span>
//               </div>
//               <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
//                 <ShieldCheck className="w-4 h-4 text-[#3abbba] flex-shrink-0" />
//                 <span className="text-sm text-gray-700 font-bengali">
//                   ইমার্জেন্সি সাপোর্ট
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Expandable More Info */}
//           <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
//             <button
//               onClick={() => setIsMore(!isMore)}
//               className="flex items-center justify-between w-full text-left group"
//             >
//               <span className="font-semibold text-gray-800 font-bengali flex items-center gap-2">
//                 <FileText className="w-4 h-4 text-[#3abbba]" />
//                 {isMore ? "বিস্তারিত তথ্য" : "আরো জানুন"}
//               </span>
//               <ChevronDown
//                 className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
//                   isMore ? "rotate-180" : ""
//                 } group-hover:text-[#3abbba]`}
//               />
//             </button>

//             {isMore && (
//               <div className="mt-4 space-y-3 animate-fadeIn">
//                 <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
//                   <div className="flex items-center gap-2 mb-2">
//                     <UserCheck className="w-4 h-4 text-[#3abbba]" />
//                     <h4 className="font-semibold text-[#3abbba] font-bengali">
//                       স্বাস্থ্য পরামর্শ
//                     </h4>
//                   </div>
//                   <p className="text-sm text-gray-600 font-bengali">
//                     নিয়মিত স্বাস্থ্য পরীক্ষা ও মনিটরিং এর মাধ্যমে রোগ প্রতিরোধ
//                     করুন
//                   </p>
//                 </div>
//                 <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
//                   <div className="flex items-center gap-2 mb-2">
//                     <Clock className="w-4 h-4 text-[#3abbba]" />
//                     <h4 className="font-semibold text-[#3abbba] font-bengali">
//                       ২৪/৭ সাপোর্ট
//                     </h4>
//                   </div>
//                   <p className="text-sm text-gray-600 font-bengali">
//                     যেকোনো জরুরি অবস্থায় আমাদের বিশেষজ্ঞ টিম আপনার পাশে আছে
//                   </p>
//                 </div>
//                 <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
//                   <div className="flex items-center gap-2 mb-2">
//                     <FileText className="w-4 h-4 text-[#3abbba]" />
//                     <h4 className="font-semibold text-[#3abbba] font-bengali">
//                       ডিজিটাল রেকর্ড
//                     </h4>
//                   </div>
//                   <p className="text-sm text-gray-600 font-bengali">
//                     আপনার সমস্ত স্বাস্থ্য রেকর্ড ডিজিটালি সংরক্ষিত থাকবে
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* CTA Section */}
//           <div className="text-center bg-gradient-to-r from-[#3abbba] to-[#2a9a9a] rounded-xl p-6 shadow-lg">
//             <div className="flex justify-center mb-3">
//               <Star className="w-8 h-8 text-yellow-300" fill="currentColor" />
//             </div>
//             <h4 className="text-white text-xl font-bold mb-2 font-bengali">
//               আজই জয়েন করুন!
//             </h4>
//             <p className="text-white opacity-90 mb-4 text-sm font-bengali">
//               সুস্থ জীবনযাপনের জন্য এখনই রেজিস্ট্রেশন করুন
//             </p>
//             <button
//               onClick={handleRegistration}
//               className="bg-white text-[#3abbba] hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg uppercase text-sm flex items-center gap-2 mx-auto"
//             >
//               <CheckCircle2 className="w-4 h-4" />
//               Registration Now
//             </button>
//           </div>

//           {isMore ? "" : <ContactInfo />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoayalMember;

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoayalMember = ({ userData }) => {
  const router = useRouter();
  // const [isMore, setIsMore] = useState(false);

  const handleRegistration = () => {
    return router.push(`/service-application`);
  };

  return (
    <div className="custom-container shadow-md ">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full gap-5 md:p-5 sm:px-5 sm:py-5 mt-0 ">
        <div className="md:col-span-6 w-full h-full sm:hidden md:block">
          <Image
            src={"/images/registration/Doing Registration Picture.jpg"}
            width={600}
            height={600}
            className="w-full h-full object-cover"
            alt="banner"
          />
        </div>
        <div className="md:col-span-6 w-full h-full md:hidden sm:block ">
          <Image
            src={"/images/registration/Doing Registration Picture.jpg"}
            width={600}
            height={600}
            className="w-full h-full object-contain"
            alt="banner2"
          />
        </div>
        <div className="md:col-span-6 w-full h-full sm:p-4 xs:p-4 md:p-6 py-0 ">
          <h2 className="text-lg mb-4 font-bengali">
            {" "}
            <span className="text-[#3abbba] font-bold">
              Citizen Care Bangladesh-
            </span>{" "}
            এর
            <span className="text-pink-500 font-bold"> লয়্যাল মেম্বার</span> হয়ে
            <b> ডাক্তার, নিউট্রিশনিস্ট ও নার্সের</b> সশরীরে উপস্থিতিতে{" "}
            <b>ঘরে বসে </b>
            স্বাস্থ্য সেবা নিন
          </h2>
          <p className="text-sm md:text-base mb-4 text-[#565656] leading-8 font-bengali">
            <span className="text-red-500 font-bold">
              আপনি কেন CCB লয়্যাল মেম্বার হবেন?
            </span>{" "}
            কি কি সুবিধা পাবেন?
          </p>
          <ul className="list-disc ml-4 space-y-2 text-[17px] font-medium ">
            <li className="font-bengali ">
              রেজিস্টার্ড অভিজ্ঞ MBBS ডাক্তার: প্রতি
              {/* ৩  */}
              মাসে ১ বার বাসায় গিয়ে স্বাস্থ্যসেবা দিবেন এবং প্রয়োজনে
              টেলিমেডিসিন সেবা।{" "}
              {/* <p className="text-center text-pink-500 font-bengali ">
                (ভিজিট মাত্র ২০০ টাকা)
              </p> */}
            </li>
            <li className="font-bengali ">
              অভিজ্ঞ নিউট্রিশনিস্টের পরামর্শ: প্রতি মাসে ১ বার আপনার বাসায় গিয়ে
              আপনার আদর্শ ডায়েট চার্ট প্রদান সহ প্রয়োজনীয় নিউট্রিশনাল পরামর্শ
              প্রদান করবেন ।
              {/* <p className="text-center text-pink-500 font-bengali ">
                (ভিজিট মাত্র ২০০ টাকা)
              </p> */}
            </li>
            <li className="font-bengali ">
              অভিজ্ঞ রেজিস্টার্ড নার্স: প্রতি সপ্তাহে ১ বার এবং প্রতি মাসে
              সর্বোচ্চ ২-৪ বার বাসায় গিয়ে Vital Signs মনিটরিং করে হেলথ রেকর্ড
              বুকে লিপিবদ্ধ করে রাখবেন।
              {/* <p className="text-center text-pink-500 font-bengali ">
                (ভিজিট মাত্র ১৫০ টাকা)
              </p> */}
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
          <ul className="list-disc ml-4 space-y-2 text-base  ">
            <li className="font-bold font-bengali  ">
              লয়্যাল <span className="text-[#3abbba]">মেম্বার ফি</span> একজনের
              জন্য বাৎসরিক <span className="text-pink-500">5,000</span> টাকা
            </li>
            <li className="font-bold font-bengali ">
              লয়্যাল <span className="text-[#3abbba]"> মেম্বার ফি </span>
              ফ্যামিলির জন্য বাৎসরিক{" "}
              <span className="text-pink-500">9,999</span> টাকা
            </li>
            <li className="font-bold font-bengali ">
              Single মাসিক চার্জ <span className="text-[#3abbba]"> চার্জ </span>
              <span className="text-pink-500">4,444 </span> টাকা
            </li>
            <li className="font-bold font-bengali ">
              Family মাসিক <span className="text-[#3abbba]"> চার্জ </span>
              <span className="text-pink-500">8,888 </span> টাকা
            </li>
          </ul>

          <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
            এছাড়াও আমাদের লয়্যাল মেম্বার হলে আপনি পাচ্ছেন:
          </p>
          <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
            <li>
              CCB নমিনেটেড হাসপাতাল ও ডায়াগনস্টিক সেন্টারে বিশেষ ডিসকাউন্ট।
            </li>
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

export default LoayalMember;
