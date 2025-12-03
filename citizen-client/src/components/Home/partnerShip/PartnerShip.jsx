"use client";

import Image from "next/image";

const logos = [
  {
    src: "/images/partnership/BRAC-Healthcare-Final-Logo-01.png",
    alt: "BRAC Healthcare",
    href: "https://brachealthcare.com/",
  },
  {
    src: "/images/partnership/Praava-Health-Logo.png",
    alt: "Praava Health",
    href: "https://www.praavahealth.com/",
  },
  {
    src: "/images/partnership/Co-Branding-Logo.png",
    alt: "Grameenphone",
    href: "https://apolloclinicbd.com/",
  },
  {
    src: "/images/partnership/MediAider-logo.png",
    alt: "MediAider",
    href: "https://mediaider.com/",
  },
  {
    src: "/images/partnership/wellbeing.png",
    alt: "Wellbeing",
    href: "https://www.united.com.bd/",
  },
  {
    src: "/images/partnership/medix.jpg",
    alt: "Medix Signature Clinic",
    href: "https://www.doctorspedia.co/",
  },
  {
    src: "/images/partnership/puls.jpeg",
    alt: "pulse",
    href: "https://pulseservicesbd.com/",
  },
];

const PartnerShip = () => {
  return (
    <div className="custom-container  py-5">
      <div className="">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Our Official Partnership Network
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-5 gap-4 place-items-center ">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="shadow-md rounded-lg p-6 w-full h-[150px] flex items-center justify-center"
            >
              <a
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-28 sm:w-32 md:w-36 hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={80}
                  className="w-full h-auto object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerShip;
