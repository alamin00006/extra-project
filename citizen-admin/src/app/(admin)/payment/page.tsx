"use client";

import PaymentOverview from "@/components/payments/PaymentOverview";
import PaymentsTable from "@/components/payments/PaymentTable";
import { useGetAllPaymentsQuery } from "@/redux/api/paymentApi";

export default function Payments() {
  const { data, isLoading, refetch } = useGetAllPaymentsQuery(null);

  return (
    <div>
      <PaymentOverview payments={data} />
      <PaymentsTable payments={data} />
    </div>
  );
}
