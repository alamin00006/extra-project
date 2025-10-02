import DashboardMain from "@/components/dashboard/DashboardMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Citizen | Dashboard",
  description: "Citizen | Dashboard",
};

export default function Dashboard() {
  return (
    <div>
      <DashboardMain />
    </div>
  );
}
