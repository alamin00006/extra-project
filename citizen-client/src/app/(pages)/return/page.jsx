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
        console.log(data);
        setPaymentDetails(data?.paymentDetails);
      } catch (err) {
        setError("Failed to verify payment");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [order_id]);

  console.log("Payment Details:", paymentDetails);
  return (
    <div className="max-w-md mx-auto p-4">
      {loading ? (
        <h1 className="text-2xl font-bold text-gray-700">
          Verifying Payment...
        </h1>
      ) : error ? (
        <div>
          <h1 className="text-2xl font-bold text-red-500">Error</h1>
          <p className="text-sm">{error}</p>
          <p className="text-sm">Please try again or contact support.</p>
          <Link
            href="/payment"
            className="mt-4 inline-block p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Try Again
          </Link>
        </div>
      ) : (
        paymentDetails && (
          <>
            {paymentDetails.sp_massage === "Success" ? (
              <div>
                <h1 className="text-2xl font-bold text-green-500">
                  Payment Successful!
                </h1>
                <p className="text-sm">Order ID: {paymentDetails.order_id}</p>
                <p className="text-sm">
                  Amount: {Number(paymentDetails.amount)}{" "}
                  {paymentDetails.currency}
                </p>
                <p className="text-sm">
                  Transaction ID: {paymentDetails.transaction_id}
                </p>
                <p className="text-sm">
                  Payment Method: {paymentDetails.payment_method}
                </p>
              </div>
            ) : paymentDetails.sp_massage === "FAILED" ||
              paymentDetails.sp_massage === "CANCELLED" ? (
              <div>
                <h1 className="text-2xl font-bold text-red-500">
                  Payment {paymentDetails.sp_massage}
                </h1>
                <p className="text-sm">Order ID: {paymentDetails.order_id}</p>
                <p className="text-sm">Please try again or contact support.</p>
              </div>
            ) : (
              <div>
                <h1 className="text-2xl font-bold text-yellow-500">
                  Payment Status Unknown
                </h1>
                <p className="text-sm">Order ID: {paymentDetails.order_id}</p>
                <p className="text-sm">Please contact support.</p>
              </div>
            )}
            <Link
              href="/payment"
              className="mt-4 inline-block p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Make Another Payment
            </Link>
          </>
        )
      )}
    </div>
  );
}
