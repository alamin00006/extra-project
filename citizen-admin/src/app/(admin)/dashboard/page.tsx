import DashboardMain from "@/components/dashboard/DashboardTable";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Citizen | Dashboard",
  description: "Citizen | Dashboard",
};
const demoUsers = [
  {
    _id: "68978aba92bd6ce80562004a",
    id: "ccb00001",
    user: null,
    name: "alamin",
    phoneNumber: "01749718743",
    email: null,
    streetAddress: "dhaka",
    city: "Dhaka",
    status: "Approved",
    createdAt: "2025-08-09T17:51:54.371Z",
    updatedAt: "2025-08-09T17:51:54.371Z",
  },
  {
    _id: "68978aba92bd6ce80562004b",
    id: "ccb00002",
    user: null,
    name: "rahim",
    phoneNumber: "01749718744",
    email: "rahim@example.com",
    streetAddress: "Mirpur Road 123",
    city: "Dhaka",
    status: "Pending",
    createdAt: "2025-08-08T10:30:00.000Z",
    updatedAt: "2025-08-08T10:30:00.000Z",
  },
  {
    _id: "68978aba92bd6ce80562004c",
    id: "ccb00003",
    user: null,
    name: "karim",
    phoneNumber: "01749718745",
    email: "karim@example.com",
    streetAddress: "Uttara Sector 7",
    city: "Dhaka",
    status: "Rejected",
    createdAt: "2025-08-07T14:20:00.000Z",
    updatedAt: "2025-08-07T14:20:00.000Z",
  },
  {
    _id: "68978aba92bd6ce80562004d",
    id: "ccb00004",
    user: null,
    name: "sadia",
    phoneNumber: "01749718746",
    email: "sadia.akter@example.com",
    streetAddress: "Gulshan Avenue",
    city: "Dhaka",
    status: "Approved",
    createdAt: "2025-08-06T09:15:00.000Z",
    updatedAt: "2025-08-06T09:15:00.000Z",
  },
  {
    _id: "68978aba92bd6ce80562004e",
    id: "ccb00005",
    user: null,
    name: "mohammad",
    phoneNumber: "01749718747",
    email: "mohammad.ali@example.com",
    streetAddress: "Banani Road 456",
    city: "Dhaka",
    status: "Pending",
    createdAt: "2025-08-05T16:45:00.000Z",
    updatedAt: "2025-08-05T16:45:00.000Z",
  },
];
export default function Dashboard() {
  return (
    <div>
      <DashboardOverview users={demoUsers} />
      <DashboardMain users={demoUsers} />
    </div>
  );
}
