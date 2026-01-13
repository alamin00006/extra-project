"use client";

import DashboardMain from "@/components/dashboard/DashboardTable";
import DashboardOverview from "@/components/dashboard/DashboardOverview";

import { useGetAllMembersQuery } from "@/redux/api/memberApi";

export default function Dashboard() {
  const { data, isLoading, refetch } = useGetAllMembersQuery(null);

  return (
    <div>
      <DashboardOverview users={data} />
      <DashboardMain users={data} refetch={refetch} />
    </div>
  );
}
