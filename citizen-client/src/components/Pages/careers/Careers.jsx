import Image from "next/image";
import JobOpenings from "./JobOpening";

const Careers = () => {
  return (
    <>
      <div className="relative w-full ">
        {/* Background Image */}
        <div className="relative h-80 sm:h-64 md:h-96 lg:h-80 xl:h-[500px] overflow-hidden">
          <Image
            src="/images/careers/career-baneer.jpg"
            alt="Who We Are"
            layout="fill"
            objectFit="cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute bottom-4 left-4 sm:left-8 md:left-12 bg-gray-800 bg-opacity-80 px-4 sm:px-6 py-2 sm:py-3 text-white text-base sm:text-lg font-semibold flex items-center rounded-md">
            <span className="border-l-4 border-pink-500 pl-3">
              Help Us Build Citizencare Bangladesh
            </span>
          </div>
        </div>
      </div>
      <JobOpenings />
    </>
  );
};

export default Careers;
