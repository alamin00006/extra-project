import Image from "next/image";
import Link from "next/link";

const collaborators = [
  {
    name: "WHO",
    logo: "/images/collaborators/who-min.png",
    link: "https://www.who.int/",
  },
  {
    name: "UNDP",
    logo: "/images/collaborators/undp-min.png",
    link: "https://www.undp.org/",
  },
  {
    name: "FAO",
    logo: "/images/collaborators/fao-min.png",
    link: "https://www.fao.org/home/en",
  },
  {
    name: "UNICEF",
    logo: "/images/collaborators/unicef-min.png",
    link: "https://www.unicef.org/",
  },
  {
    name: "ARMY",
    logo: "/images/collaborators/army-min.png",
    link: "https://www.army.mil.bd/",
  },
  {
    name: "BANGLA ACADEMY",
    logo: "/images/collaborators/bacademy-min.png",
    link: "https://banglaacademy.gov.bd/",
  },
  {
    name: "DU",
    logo: "/images/collaborators/du-min.png",
    link: "https://www.du.ac.bd/",
  },
  {
    name: "BIMAN",
    logo: "/images/collaborators/biman-min.png",
    link: "https://www.biman-airlines.com/",
  },
];

const Collaborators = () => {
  return (
    <div className="py-0 mb-10 custom-container md:mt-0 sm:mt-52">
      <div className=" px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Our Proposed Collaborators Organizations
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 ">
          {collaborators.map((collaborator, index) => (
            <div
              key={index}
              className={`bg-white p-4 
             
                ${(index + 1) % 4 !== 0 ? "border-r" : ""} 
                border-t border-b border-gray-200 
                flex flex-col items-center text-center transition-shadow duration-300 hover:shadow-lg`}
            >
              <div className="w-[60px] h-[60px] mb-4">
                <Image
                  src={collaborator.logo}
                  alt={collaborator.name}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold">{collaborator.name}</h3>
              <Link
                href={collaborator.link}
                target="_blank"
                className="text-blue-500 text-sm font-medium mt-2 hover:text-black no-underline"
              >
                READ MORE
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
