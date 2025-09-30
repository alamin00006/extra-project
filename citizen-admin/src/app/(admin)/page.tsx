import DashboardMain from "@/components/dashboard/DashboardMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doc-ticket | Dashboard",
  description: "Doc-ticket | Dashboard",
};

export default function Dashboard() {
  return (
    <div>
      <DashboardMain />
    </div>
  );
}
