import Card from "@/components/Card/Card";
import { cardData } from "@/helpers/utils/serviceData";

const Services = () => {
  return (
    <div className="mt-4 custom-container ">
      <div className="md:mx-0 sm:mx-5">
        <h2 className="text-center mb-4 md:text-4xl sm:text-xl">
          Our Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {cardData.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
