import { Modal } from "@/components/ui/modal/Modal";

const MoreInfo = ({ showModal, setShowModal }) => {
  return (
    <Modal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      title="অতিরিক্ত সুবিধাসমূহ:"
      className="w-full max-w-xl"
    >
      <ul className="list-disc ml-4 space-y-2 text-sm md:text-base text-[#565656] font-bengali leading-7">
        <li>
          সিটিজেন কেয়ার বাংলাদেশ এর নোমিনেটেড স্বনামধন্য হাসপাতাল, ডায়াগনস্টিক
          সেন্টারে চিকিৎসা ব্যয় ও মেডিকেল টেস্টে স্পেশাল ডিসকাউন্ট
        </li>

        <li>ঘরে বসেই সাশ্রয়ী মূল্যে প্যাকেজ ভিত্তিক প্রয়োজনীয় মেডিকেল টেস্ট</li>

        <li>
          দেশে-বিদেশে উন্নত চিকিৎসা সেবায় বিশেষজ্ঞ ডাক্তারের বিশেষ কনসালটেন্সি*
        </li>

        <li>হেলথ ট্যুরিজম ফ্যাসিলিটিস</li>

        <li>এয়ার অ্যাম্বুলেন্স সার্ভিস</li>

        <li>দেশি ও বিদেশি ঔষধের ফ্রি হোম ডেলিভারি</li>

        <li>টেলিমেডিসিন / ই-মেডিকেল কনসালটেন্সি*</li>

        <li>
          দেশে, বিদেশে হাসপাতাল/ ক্লিনিকে আপনার চিকিৎসায় সহযোগী হিসেবে একজন হেলথ
          গাইডের ব্যবস্থা*।
        </li>
      </ul>

      <p className="text-sm  mt-4 text-red-500 font-bengali">(*শর্তসাপেক্ষ)</p>
    </Modal>
  );
};

export default MoreInfo;

// import { Modal } from "@/components/ui/modal/Modal";

// const MoreInfo = ({ showModal, setShowModal }) => {
//   return (
//     <Modal
//       isOpen={showModal}
//       onClose={() => setShowModal(false)}
//       title="আরো পড়ুন"
//       className="w-full max-w-xl"
//     >
//       <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
//         এছাড়াও আমাদের লয়্যাল মেম্বার হলে আপনি পাচ্ছেন:
//       </p>

//       <ul className="list-disc ml-4 space-y-2 text-sm text-[#565656]">
//         <li>CCB নমিনেটেড হাসপাতাল ও ডায়াগনস্টিক সেন্টারে বিশেষ ডিসকাউন্ট।</li>
//         <li>ডেলিভারি চার্জ ছাড়া মেডিসিন ক্রয়ের সুবিধা।</li>
//         <li>দেশে-বিদেশে হেলথ গাইডের সুবিধা।</li>
//         <li>পাবলিক হেলথ বিশেষজ্ঞের বিশেষ কনসালটেন্সি।</li>
//         <li>হেলথ ট্যুরিজম।</li>
//         <li>ইমার্জেন্সি প্রয়োজনে এয়ার অ্যাম্বুলেন্স।</li>
//         <li>
//           ঘরে বসে সাশ্রয়ী মূল্য প্যাকেজ ভিত্তিক প্রয়োজনীয় মেডিক্যাল টেস্ট।
//         </li>
//       </ul>

//       <p className="text-sm md:text-base mb-4 text-[#565656] leading-8">
//         আপনিও সিটিজেন কেয়ার বাংলাদেশের{" "}
//         <span className="text-[#3abbba] font-bold">লয়্যাল মেম্বার</span> হয়ে আরও
//         বেশি স্বাস্থ্য সচেতন হোন।
//       </p>
//     </Modal>
//   );
// };

// export default MoreInfo;
