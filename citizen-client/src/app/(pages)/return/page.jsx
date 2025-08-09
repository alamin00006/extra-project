"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { getBaseUrl } from "@/helpers/config/envConfig";

export default function PaymentReturnPage() {
  const searchParams = useSearchParams();
  const order_id = searchParams.get("order_id");

  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!order_id) {
      setError("Missing order_id");
      setLoading(false);
      return;
    }

    const verifyPayment = async () => {
      try {
        const response = await fetch(
          `${getBaseUrl()}/payment/return?order_id=${order_id}`,
          { cache: "no-store" }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch payment status");
        }
        const data = await response.json();
        // console.log(data);
        setPaymentDetails(data?.paymentDetails);
      } catch (err) {
        setError("Failed to verify payment");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [order_id]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-50 p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
        {loading ? (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 mx-auto mb-4"></div>
            <h1 className="text-2xl font-bold text-gray-800 animate-pulse">
              Verifying Payment...
            </h1>
          </div>
        ) : error ? (
          <div className="text-center">
            <svg
              className="w-16 h-16 text-red-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-3xl font-bold text-red-600 mb-2">Error</h1>
            <p className="text-gray-600 mb-2">{error}</p>
            <p className="text-sm text-gray-500 mb-6">
              Please try again or contact support.
            </p>
            <Link
              href="/service-application"
              className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              Back to Payment
            </Link>
          </div>
        ) : (
          paymentDetails && (
            <div className="text-center">
              {paymentDetails.sp_massage === "Success" ? (
                <>
                  <svg
                    className="w-16 h-16 text-green-500 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h1 className="text-3xl font-bold text-green-600 mb-4">
                    Payment Successful!
                  </h1>
                  <div className="space-y-2 text-center max-w-md mx-auto">
                    <p className="text-gray-700 bg-gray-50 p-2 rounded-md">
                      <span className="font-semibold text-gray-800">
                        Payment ID:
                      </span>{" "}
                      {paymentDetails.order_id}
                    </p>
                    <p className="text-gray-700 bg-gray-50 p-2 rounded-md">
                      <span className="font-semibold text-gray-800">
                        Amount:
                      </span>{" "}
                      {Number(paymentDetails.amount)} {paymentDetails.currency}
                    </p>
                    <p className="text-gray-700 bg-gray-50 p-2 rounded-md">
                      <span className="font-semibold text-gray-800">
                        Transaction ID:
                      </span>{" "}
                      {paymentDetails.bank_trx_id}
                    </p>
                    <p className="text-gray-700 bg-gray-50 p-2 rounded-md">
                      <span className="font-semibold text-gray-800">
                        Payment Method:
                      </span>{" "}
                      {paymentDetails.method}
                    </p>
                    <Link
                      href="/"
                      className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      Back To Home
                    </Link>
                  </div>
                </>
              ) : paymentDetails.sp_massage === "Failed" ||
                paymentDetails.sp_massage === "cancelled" ? (
                <>
                  <div>
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 text-red-500 mx-auto mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <h1 className="text-3xl font-bold text-red-600 mb-4">
                        Payment {paymentDetails.sp_massage}
                      </h1>
                      <p className="text-gray-600 mb-6">
                        Your payment process was {paymentDetails.sp_massage}. No
                        charges were made.
                      </p>
                      <p className="text-sm text-gray-500 mb-6">
                        If you wish to try again, please return to the payment
                        page.
                      </p>
                      <Link
                        href="/service-application"
                        className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200 mr-4"
                      >
                        Try Again
                      </Link>
                      <Link
                        href="/"
                        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      >
                        Back To Home
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 text-yellow-500 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <h1 className="text-3xl font-bold text-yellow-600 mb-4">
                      Payment Status Unknown
                    </h1>
                    <div className="space-y-2 text-center max-w-md mx-auto">
                      <p className="text-gray-700 bg-gray-50 p-2 rounded-md">
                        <span className="font-semibold text-gray-800">
                          Order ID:
                        </span>{" "}
                        {paymentDetails.order_id}
                      </p>
                      <p className="text-gray-600">
                        Please contact support or try again.
                      </p>
                      <Link
                        href="/service-application"
                        className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors duration-200"
                      >
                        Back to Payment
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
