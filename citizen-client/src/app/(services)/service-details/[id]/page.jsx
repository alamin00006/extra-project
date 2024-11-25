import ServiceDeatails from "@/components/Pages/Services/ServiceDeatails";

export const metadata = {
  title: "Serices",
  description: "Serices",
};

const ServiceDetailsPage = async ({ params }) => {
  return (
    <div>
      <ServiceDeatails params={params} />
    </div>
  );
};

export default ServiceDetailsPage;
