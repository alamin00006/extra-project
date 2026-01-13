"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Home, Mail, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

const RegistrationThankYou = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-200"
        >
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Thank You for Your Registration!
          </h1>

          <p className="text-gray-600 mb-6">
            Your membership registration has been successfully submitted. Our
            team will contact you shortly to discuss the next steps.
          </p>

          {/* Contact Timeline */}
          <div className="mb-8 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
            <div className="flex items-center justify-center text-sm text-emerald-700 font-medium">
              <Clock className="w-4 h-4 mr-2" />
              We will contact you within 24-48 hours
            </div>
          </div>

          {/* Next Steps Info */}
          <div className="mb-8 space-y-3">
            <p className="text-sm text-gray-500">
              Please keep your phone nearby for our call. We will discuss:
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                Registration process and fees
              </li>
              <li className="flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></span>
                Any questions you may have
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={() => router.push("/")}
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Home className="w-5 h-5 inline mr-2" />
              Return to Homepage
            </button>

            <button
              onClick={() => router.back()}
              className="w-full py-3 bg-white text-gray-700 font-medium rounded-xl border border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              Back to Registration
            </button>
          </div>

          {/* Footer Note */}
          <p className="mt-8 text-xs text-gray-400">
            Thank you for choosing us. We look forward to speaking with you
            soon.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RegistrationThankYou;
