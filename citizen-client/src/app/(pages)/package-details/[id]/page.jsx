"use client";
import PackageDetails from "@/components/Pages/Services/PackageDetails";
import { useParams } from "next/navigation";

const PackageDetailsPage = () => {
  const params = useParams();
  return (
    <div>
      <PackageDetails params={params} />
    </div>
  );
};

export default PackageDetailsPage;
