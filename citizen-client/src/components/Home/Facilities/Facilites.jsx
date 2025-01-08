"use client";
import Card from "@/components/Card/Card";
import {
  FaLeaf,
  FaGraduationCap,
  FaStethoscope,
  FaAppleAlt,
} from "react-icons/fa"; // Import icons
import { FaUserDoctor } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { GiMedicines } from "react-icons/gi";

const Facilites = () => {
  const cardData = [
    {
      text: "Healthcare at your Home",
      miniText: "মাসিক ৫৬৬ টাকায় স্বাস্থ্যসেবা",
      image: "/images/services-2/HELTH CARE-at-01.jpg",
      icon2: <IoHomeOutline className="w-10 h-10 text-[#3cb9ba]" />,
    },
    {
      text: "MBBS Doctor / Family Physician",
      miniText: "At your home",
      image: "/images/services-2/family-01.jpg",
      icon2: <FaUserDoctor className="w-10 h-10 text-[#3cb9ba]" />,
    },
    {
      text: "Nutritionists",
      miniText: "At your home",
      image: "/images/services-2/NUTRI-BOXe-box-01.jpg",

      icon2: <FaAppleAlt className="w-10 h-10 text-[#3cb9ba]" />,
    },
    {
      text: "Health Check",
      miniText: "At your home",
      image: "/images/services-2/chekup-01-01.jpg",

      icon: "/images/check.png",
    },
    {
      text: "Medicine & Medical Device",
      miniText: "At your home",
      image: "/images/services-2/MEDICINE-01.jpg",

      icon2: <GiMedicines className="w-10 h-10 text-[#3cb9ba]" />,
    },
    {
      text: "Health Tourism",
      miniText: "At your home",
      image: "/images/services-2/Health tourism-01.jpg",

      icon: "/images/tourisom.png",
    },
    {
      text: "Health Guide",
      miniText: "At your home",
      image: "/images/services-2/HEALTH GUIDE-01.jpg",

      icon: "/images/health-guide.png",
    },
    {
      text: "Telemedicine / E-Medical Consultancy",
      miniText: "At your home",
      image: "/images/services-2/nurse box-01.jpg",
      icon: "/images/e-medical.png",
    },
  ];
  return (
    <div className="mt-4 custom-container ">
      <div className="md:mx-0 sm:mx-5">
        <h1 className="text-center mb-4 ">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {cardData.map((card, index) => (
            <Card
              key={index}
              text={card.text}
              miniText={card.miniText}
              image={card.image}
              icon={card?.icon}
              icon2={card?.icon2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facilites;
