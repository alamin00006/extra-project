"use client"
import ServiceDeatails from "@/components/Pages/Services/ServiceDeatails";
import { useParams } from "next/navigation";

const ServiceDetailsPage =  () => {
  const params = useParams()
  return (
    <div>
      <ServiceDeatails params={params} />
    </div>
  );
};

export default ServiceDetailsPage;
