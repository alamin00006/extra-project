"use client";
import ServiceDetails from "@/components/Pages/Services/ServiceDetails";
import { useParams } from "next/navigation";

const ServiceDetailsPage = () => {
  const params = useParams();
  return (
    <div>
      <ServiceDetails params={params} />
    </div>
  );
};

export default ServiceDetailsPage;
