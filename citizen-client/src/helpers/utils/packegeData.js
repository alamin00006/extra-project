import { FaAppleAlt } from "react-icons/fa"; // Import icons
import { FaUserDoctor } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";

export const cardData = [
  {
    id: 1,
    image: "/images/category/premium-package.png",
    text: "Premium Package",
    enTitle: "Premium Package",
    path: "/premium-package",
    homePage: true,
    isLogin: "active",
    content: (
      <div>
        <h3 className="text-xl font-semibold mb-4">সেবা সমূহ:</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>প্রতি মাসে ১ বার MBBS ডাক্তার</li>
          <li>প্রতি মাসে ১ বার পুষ্টিবিদ</li>
          <li>প্রতি মাসে ২ থেকে ৪ বার BSc নার্স/SACMO ভিজিট</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">
          সদস্য ফি ও সার্ভিস চার্জ:
        </h3>
        <table className="w-full border border-gray-400 text-center">
          <tr>
            <th className="border p-2">সদস্য সংখ্যা</th>
            <th className="border p-2">রেজিস্ট্রেশন ফি</th>
            <th className="border p-2">মাসিক সেবা চার্জ</th>
          </tr>
          <tr>
            <td className="border p-2">একক সদস্য</td>
            <td className="border p-2">৫০০০ টাকা</td>
            <td className="border p-2">৪৪৪৪ টাকা</td>
          </tr>
          <tr>
            <td className="border p-2">পরিবার (২ জন)</td>
            <td className="border p-2">৯৯৯৯ টাকা</td>
            <td className="border p-2">৮৮৮৮ টাকা</td>
          </tr>
        </table>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          অতিরিক্ত সুবিধাসমূহ:
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>নোমিনেটেড হাসপাতাল ও ডায়াগনস্টিকে বিশেষ ডিসকাউন্ট</li>
          <li>ঘরে বসে সাশ্রয়ী প্যাকেজে মেডিকেল টেস্ট</li>
          <li>দেশে-বিদেশে বিশেষজ্ঞ ডাক্তারের কনসালটেন্সি*</li>
          <li>হেলথ ট্যুরিজম ফ্যাসিলিটিস</li>
          <li>এয়ার অ্যাম্বুলেন্স সার্ভিস</li>
          <li>ফ্রি হোম ডেলিভারি – দেশি/বিদেশি ঔষধ</li>
          <li>টেলিমেডিসিন / ই-মেডিকেল কনসালটেন্সি*</li>
          <li>হেলথ গাইড সার্ভিস – দেশ/বিদেশ*</li>
        </ul>
        <p className="mt-4 text-sm">*শর্তসাপেক্ষ</p>
      </div>
    ),
  },
  {
    id: 2,
    image: "/images/category/pregnant-package.png",
    text: "Pregnant Woman Package",
    enTitle: "Pregnant Woman Package",
    path: "/pregnant-woman-package",
    homePage: true,
    isLogin: "active",
    content: (
      <div>
        {" "}
        <h3 className="text-xl font-semibold mb-4">সেবা সমূহ:</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>প্রতি মাসে ১ বার MBBS ডাক্তার</li>
          <li>প্রতি মাসে ১ বার পুষ্টিবিদ</li>
          <li>প্রতি মাসে ২ থেকে ৪ বার BSc নার্স/SACMO ভিজিট</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6 mb-4">
          সদস্য সংখ্যা ও চার্জ:
        </h3>
        <table className="w-full border border-gray-400 text-center">
          <tr>
            <th className="border p-2">সদস্য সংখ্যা</th>
            <th className="border p-2">রেজিস্ট্রেশন ফি</th>
            <th className="border p-2">মাসিক সেবা চার্জ</th>
          </tr>
          <tr>
            <td className="border p-2">একক সদস্য</td>
            <td className="border p-2">৫০০০ টাকা</td>
            <td className="border p-2">৪৪৪৪ টাকা</td>
          </tr>
        </table>
        <h3 className="text-xl font-semibold mt-6 mb-2">
          অতিরিক্ত সুবিধাসমূহ:
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>নোমিনেটেড হাসপাতাল ও ডায়াগনস্টিকে বিশেষ ডিসকাউন্ট</li>
          <li>সাশ্রয়ী প্যাকেজ ভিত্তিক মেডিকেল টেস্ট</li>
          <li>দেশে-বিদেশে বিশেষজ্ঞ ডাক্তারের কনসালটেন্সি*</li>
          <li>হেলথ ট্যুরিজম</li>
          <li>এয়ার অ্যাম্বুলেন্স</li>
          <li>ফ্রি হোম ডেলিভারি মেডিসিন</li>
          <li>টেলিমেডিসিন / ই-মেডিকেল কনসালটেন্সি*</li>
          <li>হেলথ গাইড সার্ভিস*</li>
        </ul>
        <p className="mt-4 text-sm">*শর্তসাপেক্ষ</p>
      </div>
    ),
  },
  {
    id: 3,
    image: "/images/category/corporate-package.png",
    text: "Corporate Package",
    enTitle: "Corporate Package",
    path: "/corporate-package",
    homePage: true,
    isLogin: "active",
    content: (
      <div>
        <h3 className="text-xl font-semibold mb-4">কর্পোরেট প্যাকেজ:</h3>

        <p className="text-base leading-7">
          <strong>রেজিস্ট্রেশন ফি:</strong> Negotiable <br />
          <strong>মাসিক সার্ভিস চার্জ:</strong> Negotiable
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          অতিরিক্ত সুবিধাসমূহ:
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>হাসপাতাল ও ডায়াগনস্টিকে ডিসকাউন্ট</li>
          <li>ঘরে বসে মেডিকেল টেস্ট</li>
          <li>বিশেষজ্ঞ ডাক্তারের কনসালটেন্সি*</li>
          <li>হেলথ ট্যুরিজম</li>
          <li>এয়ার অ্যাম্বুলেন্স</li>
          <li>ফ্রি মেডিসিন হোম ডেলিভারি</li>
          <li>টেলিমেডিসিন*</li>
          <li>হেলথ গাইড সার্ভিস*</li>
        </ul>
        <p className="mt-4 text-sm">*শর্তসাপেক্ষ</p>
      </div>
    ),
  },
  {
    id: 4,
    image: "/images/category/child-package.png",
    text: "Child Package",
    enTitle: "Child Package",
    path: "/child-package",
    homePage: true,
    isLogin: "active",
    content: (
      <div>
        <h3 className="text-xl font-semibold mb-4">সুবিধাসমূহ:</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>প্রতি মাসে ১ বার পুষ্টিবিদ (৩–৫ বছরের অভিজ্ঞতা)</li>
          <li>প্রতি ২/৩ মাসে ১ বার MBBS ডাক্তার (৩–৫ বছরের অভিজ্ঞতা)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-4">ফি ও চার্জ:</h3>
        <table className="w-full border text-center border-gray-400">
          <tr>
            <th className="border p-2">সদস্য সংখ্যা</th>
            <th className="border p-2">রেজিস্ট্রেশন ফি</th>
            <th className="border p-2">মাসিক সার্ভিস চার্জ</th>
          </tr>
          <tr>
            <td className="border p-2">একক সদস্য</td>
            <td className="border p-2">৫,০০০ টাকা</td>
            <td className="border p-2">২,২২২ টাকা</td>
          </tr>
        </table>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          অতিরিক্ত সুবিধাসমূহ:
        </h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>ডায়াগনস্টিক ও হাসপাতালে ডিসকাউন্ট</li>
          <li>ঘরে বসে মেডিকেল টেস্ট</li>
          <li>বিশেষজ্ঞ ডাক্তারের কনসালটেন্সি*</li>
          <li>হেলথ ট্যুরিজম</li>
          <li>এয়ার অ্যাম্বুলেন্স</li>
          <li>ফ্রি মেডিসিন হোম ডেলিভারি</li>
          <li>টেলিমেডিসিন সার্ভিস*</li>
          <li>হেলথ গাইড সার্ভিস*</li>
        </ul>

        <p className="mt-4 text-sm">*শর্তসাপেক্ষ</p>
      </div>
    ),
  },
];
