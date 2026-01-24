import { Facebook, Globe, MessageCircle, Phone } from "lucide-react";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#3abbba]">
      <h3 className="text-lg font-bold text-gray-800 mb-4 font-bengali flex items-center gap-2">
        <Phone className="w-5 h-5 text-[#3abbba]" />
        যোগাযোগ করুন
      </h3>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Phone className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-700 font-bengali">
            <span className="font-semibold">কল সেন্টার:</span> ০১৮৯৬-৫১১০২০,
            09613-166166
          </span>
        </div>

        <div className="flex items-center gap-3">
          <MessageCircle className="w-4 h-4 text-green-500" />
          <span className="text-sm text-gray-700 font-bengali">
            <span className="font-semibold">WhatsApp:</span> ০১৮৯৪-৬৭১৮৭৫
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Globe className="w-4 h-4 text-[#3abbba]" />
          <a
            href="https://citizencarebd.com"
            className="text-sm text-[#3abbba] hover:underline font-bengali"
          >
            <span className="font-semibold text-gray-700">Website:</span>{" "}
            citizencarebd.com
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Facebook className="w-4 h-4 text-blue-600" />
          <a
            href="https://www.facebook.com/Citizencarebd"
            className="text-sm text-[#3abbba] hover:underline font-bengali"
          >
            <span className="font-semibold text-gray-700">Facebook:</span>{" "}
            facebook.com/Citizencarebd
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
