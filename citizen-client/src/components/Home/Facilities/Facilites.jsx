import Card from "@/components/Card/Card";
import { cardData } from "@/helpers/utils/serviceData";

const Facilites = () => {
  return (
    <div className="mt-4 custom-container ">
      <div className="md:mx-0 sm:mx-5">
        <h1 className="text-center mb-4 ">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {cardData.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilites;
