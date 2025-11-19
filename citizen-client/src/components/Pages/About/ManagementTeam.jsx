import Image from "next/image";

const teamMembers = [
  {
    position: "Chairman",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
  },
  {
    position: "Managing Director",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
  },
  {
    position: "Director Clinical Health & Business Development",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
  },
  {
    position: "Director",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
  },
  {
    position: "Director",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
  },
  {
    position: "Advisor",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
  },
  {
    position: "Advisor",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
  },
  {
    position: "Advisor",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
  },
  {
    position: "Advisor",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
  },
  {
    position: "CEO",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
  },
  {
    position: "Chief Medical Officer",
    image: "/images/services-2/HEALTH GUIDE-01.jpg",
    link: "#",
  },
];

export default function ManagementTeam() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Management Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals who lead our organization with
            expertise and vision
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Team Members Grid - Single Column */}
        <div className="space-y-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              <div className="flex flex-col md:flex-row items-center p-6 md:p-8">
                {/* Image Container */}
                <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full ring-4 ring-white shadow-xl group-hover:ring-pink-100 transition-all duration-500 overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`Portrait of ${member.position}`}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    {/* Decorative Element */}
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Position Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold mb-4">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                    {member.position}
                  </div>

                  {/* Name (if available) */}
                  {member.name && (
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                  )}

                  {/* Bio (if available) */}
                  {member.bio && (
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  )}

                  {/* CTA Button */}
                  <div className="flex justify-center md:justify-start">
                    <a
                      href={member.link}
                      className="inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-700 font-medium hover:bg-pink-500 hover:text-white transition-all duration-300 group/btn"
                    >
                      <span>View Profile</span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Index Number */}
                <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-white font-bold text-lg">
                  {index + 1}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
