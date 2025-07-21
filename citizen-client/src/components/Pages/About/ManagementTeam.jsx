import Image from "next/image";

const teamMembers = [
  {
    // name: "Sylvana Quader Sinha",
    position: "Founder, Chair, & CEO",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
    // bio: "Dr. Simeen M. Akhtar leads clinical .",
  },
  {
    // name: "Mohammad Abdul Matin Emon",
    position: "Incoming CEO of Praava Health",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
    // bio: "Dr. Simeen M. Akhtar leads clinical .",
  },
  {
    // name: "Dr. Simeen M. Akhtar",
    position: "Chief Medical Officer",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
    // bio: "Dr. Simeen M. Akhtar leads clinical .",
  },
  {
    // name: "Dr. Simeen M. Akhtar",
    position: "Chief Medical Officer",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
    // bio: "Dr. Simeen M. Akhtar leads clinical .",
  },
];

export default function ManagementTeam() {
  return (
    <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
        Our Management Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="text-center transition-transform transform hover:scale-[1.02] duration-300 shadow-md rounded-lg p-4 "
          >
            <div className="avatar mx-auto">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full ring ring-pink-500 ring-offset-2">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  width={192}
                  height={192}
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-700">
              {member.position}
            </p>
            <p className="mt-2 text-sm text-gray-600 px-4">{member.bio}</p>
            {/* Uncomment if you want to include the link */}
            {/* <a
              href={member.link}
              className="text-pink-600 font-medium mt-2 inline-block text-sm sm:text-base hover:underline"
              aria-label={`View details about ${member.name}`}
            >
              See Details
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
}
