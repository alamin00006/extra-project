import ServiceSidebar from "@/components/Pages/Services/ServiceSidebar";

export const metadata = {
  title: "Serices",
  description: "Serices",
};

const ServicePage = async ({ params }) => {
  return (
    <div>
      <ServiceSidebar params={params} />
    </div>
  );
};

export default ServicePage;
