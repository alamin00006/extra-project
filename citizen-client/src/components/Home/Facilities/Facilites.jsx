"use client";
import Card from "@/components/Card/Card";
import { FaLeaf, FaGraduationCap, FaStethoscope } from "react-icons/fa"; // Import icons
import { FaUserDoctor } from "react-icons/fa6";

const Facilites = () => {
  const cardData = [
    {
      text: "Awareness Program",
      miniText: "Human Veterinary & Aqua",
      image: "/images/Awareness-Program.webp",
      icon2: <FaUserDoctor className="w-10 h-10 text-[#3cb9ba]" />,
    },
    {
      text: "Agricultural Services",
      miniText: "Environment & Agriculture",
      image: "/images/Environment-and-agricultural-Program.webp",
      icon: "/images/icons/computer.svg",
    },
    {
      text: "Skill Development",
      miniText: "Training Sales Marketing",
      image: "/images/Training-Skill-Development-Program.webp",
      icon: "/images/icons/pen-paper.svg",
    },
    {
      text: "Skill Development",
      miniText: "Training Sales Marketing",
      image: "/images/Training-Skill-Development-Program.webp",
      icon: "/images/icons/pen-paper.svg",
    },
    {
      text: "Skill Development",
      miniText: "Training Sales Marketing",
      image: "/images/Training-Skill-Development-Program.webp",
      icon: "/images/icons/pen-paper.svg",
    },
    {
      text: "Skill Development",
      miniText: "Training Sales Marketing",
      image: "/images/Training-Skill-Development-Program.webp",
      icon: "/images/icons/pen-paper.svg",
    },
    {
      text: "Skill Development",
      miniText: "Training Sales Marketing",
      image: "/images/Training-Skill-Development-Program.webp",
      icon: "/images/icons/pen-paper.svg",
    },
  ];
  return (
    <div className="mt-5 custom-container">
      <div className="flex justify-center">
        {" "}
        <h5 className="text-sm bg-[#d3e9fb] text-[#39bcbc] p-1.5 rounded-sm">
          FACILITIES WE HAVE
        </h5>
      </div>
      <h1 className="text-center">What Facilities We Provided</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 ">
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
  );
};

export default Facilites;
