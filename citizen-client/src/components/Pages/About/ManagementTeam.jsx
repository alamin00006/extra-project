import Image from "next/image";

const teamMembers = [
  {
    name: "Sylvana Quader Sinha",
    position: "Founder, Chair, & CEO",
    image: "/images/services-2/HEALTH GUIDE-01.jpg", 
    link: "#",
  },
  {
    name: "Mohammad Abdul Matin Emon",
    position: "Incoming CEO of Praava Health",
    image: "/images/services-2/HEALTH GUIDE-01.jpg", 
    link: "#",
  },
  {
    name: "Dr. Simeen M. Akhtar",
    position: "Chief Medical Officer",
    image: "/images/services-2/HEALTH GUIDE-01.jpg", 
    link: "#",
  },
];

export default function ManagementTeam() {
  return (
    <div className=" my-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Our Management Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <div className="relative  h-72 mx-auto">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-700">{member.position}</p>
            {/* <a href={member.link} className="text-pink-600 font-medium mt-2 inline-block">
              See Details
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
}
