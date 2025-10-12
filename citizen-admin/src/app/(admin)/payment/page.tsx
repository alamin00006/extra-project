import PaymentOverview from "@/components/payments/PaymentOverview";
import PaymentsTable from "@/components/payments/PaymentTable";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Citizen | Payments",
  description: "Citizen | Payments",
};

const demoPayments = [
  {
    _id: "679a67ad14697c3f7afa7d21",
    member: "679a67ad14697c3f7afa7d1f",
    amount: 1500,
    trxID: "CAT4DLKOGA",
    paymentNumber: "01622738449",
    paymentType: "bkash",
    paymentDate: "2025-01-29T17:38:53.506Z",
    createdAt: "2025-01-29T17:38:53.509Z",
    updatedAt: "2025-01-29T17:38:53.509Z",
    __v: 0,
  },
  {
    _id: "679a67ad14697c3f7afa7d22",
    member: "679a67ad14697c3f7afa7d20",
    amount: 2500,
    trxID: "BKASH12345",
    paymentNumber: "01711345678",
    paymentType: "bkash",
    paymentDate: "2025-01-28T14:20:15.000Z",
    createdAt: "2025-01-28T14:20:15.000Z",
    updatedAt: "2025-01-28T14:20:15.000Z",
    __v: 0,
  },
  {
    _id: "679a67ad14697c3f7afa7d23",
    member: "679a67ad14697c3f7afa7d21",
    amount: 1000,
    trxID: "NAGAD67890",
    paymentNumber: "01819456789",
    paymentType: "nagad",
    paymentDate: "2025-01-27T10:15:30.000Z",
    createdAt: "2025-01-27T10:15:30.000Z",
    updatedAt: "2025-01-27T10:15:30.000Z",
    __v: 0,
  },
  {
    _id: "679a67ad14697c3f7afa7d24",
    member: "679a67ad14697c3f7afa7d22",
    amount: 3000,
    trxID: "ROCKET54321",
    paymentNumber: "01987654321",
    paymentType: "rocket",
    paymentDate: "2025-01-26T16:45:00.000Z",
    createdAt: "2025-01-26T16:45:00.000Z",
    updatedAt: "2025-01-26T16:45:00.000Z",
    __v: 0,
  },
  {
    _id: "679a67ad14697c3f7afa7d25",
    member: "679a67ad14697c3f7afa7d23",
    amount: 2000,
    trxID: "BKASH98765",
    paymentNumber: "01611223344",
    paymentType: "bkash",
    paymentDate: "2025-01-25T09:30:45.000Z",
    createdAt: "2025-01-25T09:30:45.000Z",
    updatedAt: "2025-01-25T09:30:45.000Z",
    __v: 0,
  },
];

export default function Payments() {
  return (
    <div>
      <PaymentOverview payments={demoPayments} />
      <PaymentsTable payments={demoPayments} />
    </div>
  );
}
