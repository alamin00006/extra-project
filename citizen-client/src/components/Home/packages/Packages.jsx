import PackageCard from "@/components/Card/PackageCard";
import { packagesData } from "@/helpers/utils/packagesData";

const Packages = () => {
  return (
    <div className="mt-4 custom-container ">
      <div className="md:mx-0 sm:mx-5">
        <h2 className="text-center mb-4 md:text-3xl sm:text-xl font-bold">
          Our Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {packagesData.map((card, index) => (
            <PackageCard key={index} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
