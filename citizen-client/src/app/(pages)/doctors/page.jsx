import Doctors from "@/components/Pages/doctors/Doctors";
import DoctorSearch from "@/components/Pages/doctors/Searchbar";


export const metadata = {
  title: "Citzen | Doctors",
  description: "Citezen Doctors",
};

const CareerPage = () => {
  return (
    <>
      <DoctorSearch />
      <Doctors />

    </>
  );
};

export default CareerPage;
