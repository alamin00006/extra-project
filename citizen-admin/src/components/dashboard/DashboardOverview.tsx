// components/DashboardOverview.tsx
import React from "react";
import { Users, CheckCircle, Clock, MapPin } from "lucide-react";

interface User {
  _id: string;
  id: string;
  user: string | null;
  name: string;
  phoneNumber: string;
  email: string | null;
  streetAddress: string;
  city: string;
  status: "Approved" | "Pending" | "Rejected";
  createdAt: string;
  updatedAt: string;
}

interface DashboardOverviewProps {
  users: any;
}

const DashboardOverview: React.FC<DashboardOverviewProps> = ({ users }) => {
  const stats = {
    totalUsers: users.length,
    approvedUsers: users.filter((user) => user.status === "Approved").length,
    pendingUsers: users.filter((user) => user.status === "Pending").length,
    rejectedUsers: users.filter((user) => user.status === "Rejected").length,
    dhakaUsers: users.filter((user) => user.city.toLowerCase() === "dhaka")
      .length,
  };

  const approvalRate =
    stats.totalUsers > 0
      ? ((stats.approvedUsers / stats.totalUsers) * 100).toFixed(1)
      : "0";

  const cardData = [
    {
      title: "Total Members",
      value: stats.totalUsers,
      description: "All registered Members",
      icon: Users,
      borderColor: "border-l-blue-500",
      iconBg: "bg-blue-100 dark:bg-blue-900/30",
      iconColor: "text-blue-600 dark:text-blue-400",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Approved",
      value: stats.approvedUsers,
      description: `${approvalRate}% approval rate`,
      icon: CheckCircle,
      borderColor: "border-l-green-500",
      iconBg: "bg-green-100 dark:bg-green-900/30",
      iconColor: "text-green-600 dark:text-green-400",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      title: "Pending",
      value: stats.pendingUsers,
      description: "Awaiting approval",
      icon: Clock,
      borderColor: "border-l-yellow-500",
      iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
      iconColor: "text-yellow-600 dark:text-yellow-400",
      textColor: "text-yellow-600 dark:text-yellow-400",
    },
    {
      title: "Dhaka Members",
      value: stats.dhakaUsers,
      description: "From Dhaka city",
      icon: MapPin,
      borderColor: "border-l-purple-500",
      iconBg: "bg-purple-100 dark:bg-purple-900/30",
      iconColor: "text-purple-600 dark:text-purple-400",
      textColor: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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

export default DashboardOverview;
