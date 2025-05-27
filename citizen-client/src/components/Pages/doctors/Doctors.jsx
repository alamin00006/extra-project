import Image from "next/image";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Md Monirul Islam",
    specialty: "Public Health Specialist, Diabetologist and GP",
    degrees: "MPH(UK), MPH(DIU), MBBS, CCD(BIRDEM)",
    position:
      "Chief Medical Officer, Trained in Neurosurgery (CMCH), Trained in Australia & KSA",
    schedule: {
      days: "Not specified",
      time: "Not specified",
      location: "Not specified",
    },
    image: "/images/doctors/Monirul-Islam.jpeg",
  },
  {
    name: "Dr. Emrul Sobhan",
    specialty: "General Physician",
    degrees: "MBBS(DU), CCD(BIRDEM), DOC(AURORA)",
    position: "General Physician",
    schedule: {
      days: "Not specified",
      time: "Not specified",
      location: "Not specified",
    },
    image: "/images/doctors/imrul.jpg",
  },
];

export default function Doctors() {
  return (
    <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-8">
      {/* Title & Match Count */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 border-l-4 border-pink-500 pl-3">
          Doctor Consultation
        </h2>
        <p className="text-gray-700 font-semibold mt-2 sm:mt-0">
          <span className="text-pink-600">
            {doctors.length.toString().padStart(2, "0")}
          </span>{" "}
          matches found
        </p>
      </div>

      {/* Doctor Cards for Desktop */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-sm bg-white flex flex-col sm:flex-row transition-transform transform hover:scale-[1.02] duration-300"
            >
              {/* Doctor Image & Details */}
              <div className="flex flex-col items-center p-4 sm:p-6 w-full sm:w-1/2">
                <div className="avatar">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full">
                    <Image
                      src={doctor.image}
                      alt={`Portrait of ${doctor.name}`}
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-3 text-center sm:text-left">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-600 text-center sm:text-left">
                  {doctor.degrees}
                </p>
                <p className="text-sm text-gray-600 text-center sm:text-left">
                  {doctor.position}
                </p>
                <button
                  className="mt-4 bg-pink-600 text-white px-4 sm:px-5 py-2 text-sm sm:text-base font-medium rounded-md hover:bg-pink-700 transition"
                  aria-label={`View more details about ${doctor.name}`}
                >
                  View More
                </button>
              </div>

              {/* Doctor Schedule */}
              <div className="border-t sm:border-t-0 sm:border-l border-gray-300 w-full sm:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
                <h4 className="text-sm sm:text-base font-semibold text-teal-600">
                  {doctor.specialty}
                </h4>
                <div className="mt-2 sm:mt-3 text-gray-700 text-sm sm:text-base space-y-2">
                  {doctor.schedule.days && (
                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-gray-500" />{" "}
                      {doctor.schedule.days}
                    </p>
                  )}
                  {doctor.schedule.time && (
                    <p className="flex items-center gap-2">
                      <FaClock className="text-gray-500" />{" "}
                      {doctor.schedule.time}
                    </p>
                  )}
                  {doctor.schedule.location && (
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-gray-500" />{" "}
                      {doctor.schedule.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Cards for Mobile */}
      <div className="md:hidden">
        <div className="grid grid-cols-1 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-sm bg-white flex flex-col items-center overflow-hidden transition-transform transform hover:scale-[1.02] duration-300"
            >
              {/* Doctor Image & Details */}
              <div className="flex flex-col items-center p-6 w-full">
                <div className="avatar">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full">
                    <Image
                      src={doctor.image}
                      alt={`Portrait of ${doctor.name}`}
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-3 text-center">
                  {doctor.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {doctor.degrees}
                </p>
                <p className="text-sm text-gray-600 text-center">
                  {doctor.position}
                </p>
                <button
                  className="mt-4 bg-pink-600 text-white px-5 py-2 text-sm font-medium rounded-md hover:bg-pink-700 transition"
                  aria-label={`View more details about ${doctor.name}`}
                >
                  View More
                </button>
              </div>

              {/* Doctor Schedule */}
              <div className="border-t border-gray-300 w-full p-6 flex flex-col justify-center">
                <h4 className="text-sm font-semibold text-teal-600">
                  {doctor.specialty}
                </h4>
                <div className="mt-3 text-gray-700 text-sm space-y-2">
                  {doctor.schedule.days && (
                    <p className="flex items-center gap-2">
                      <FaCalendarAlt className="text-gray-500" />{" "}
                      {doctor.schedule.days}
                    </p>
                  )}
                  {doctor.schedule.time && (
                    <p className="flex items-center gap-2">
                      <FaClock className="text-gray-500" />{" "}
                      {doctor.schedule.time}
                    </p>
                  )}
                  {doctor.schedule.location && (
                    <p className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-gray-500" />{" "}
                      {doctor.schedule.location}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
