// components/PaymentOverview.tsx
import React from "react";
import {
  CreditCard,
  DollarSign,
  Calendar,
  TrendingUp,
  Wallet,
  CheckCircle,
} from "lucide-react";

interface Payment {
  _id: string;
  member: string;
  amount: number;
  trxID: string;
  paymentNumber: string;
  paymentType: string;
  paymentDate: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface PaymentOverviewProps {
  payments: any;
}

const PaymentOverview: React.FC<PaymentOverviewProps> = ({ payments }) => {
  const stats = {
    totalPayments: payments.length,
    totalAmount: payments.reduce((sum, payment) => sum + payment.amount, 0),
    averageAmount:
      payments.length > 0
        ? payments.reduce((sum, payment) => sum + payment.amount, 0) /
          payments.length
        : 0,
    bKashPayments: payments.filter((payment) => payment.paymentType === "bkash")
      .length,
    successfulPayments: payments.filter((payment) => payment.amount > 0).length,
    todayPayments: payments.filter((payment) => {
      const paymentDate = new Date(payment.paymentDate);
      const today = new Date();
      return paymentDate.toDateString() === today.toDateString();
    }).length,
  };

  const cardData = [
    {
      title: "Total Payments",
      value: stats.totalPayments,
      description: "All transactions",
      icon: CreditCard,
      borderColor: "border-l-blue-500",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Total Amount",
      value: `৳${stats.totalAmount.toLocaleString()}`,
      description: "Total revenue",
      icon: DollarSign,
      borderColor: "border-l-green-500",
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
      textColor: "text-green-600 dark:text-green-400",
    },

    // {
    //   title: "bKash Payments",
    //   value: stats.bKashPayments,
    //   description: "bKash transactions",
    //   icon: Wallet,
    //   borderColor: "border-l-red-500",
    //   iconBg: "bg-red-100 dark:bg-red-900/30",
    //   iconColor: "text-red-600 dark:text-red-400",
    //   textColor: "text-red-600 dark:text-red-400",
    // },
    // {
    //   title: "Successful",
    //   value: stats.successfulPayments,
    //   description: "Completed payments",
    //   icon: CheckCircle,
    //   borderColor: "border-l-emerald-500",
    //   iconBg: "bg-emerald-100 dark:bg-emerald-900/30",
    //   iconColor: "text-emerald-600 dark:text-emerald-400",
    //   textColor: "text-emerald-600 dark:text-emerald-400",
    // },
    {
      title: "Today's Payments",
      value: stats.todayPayments,
      description: "Today's transactions",
      icon: Calendar,
      borderColor: "border-l-orange-500",
      iconBg: "bg-orange-100 dark:bg-orange-900/30",
      iconColor: "text-orange-600 dark:text-orange-400",
      textColor: "text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`rounded-lg border-l-4 ${card.borderColor} bg-white p-6 shadow transition-all duration-200 hover:shadow-md dark:bg-gray-800 dark:shadow-gray-900/30`}
        >
          <div className="flex items-center">
            <div className={`rounded-lg p-3 ${card.iconBg}`}>
              <card.icon className={`h-6 w-6 ${card.iconColor}`} />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {card.title}
              </h3>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                {card.value}
              </p>
              <p className={`text-sm ${card.textColor}`}>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentOverview;
