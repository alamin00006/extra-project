import Image from "next/image";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. Salma Anam",
    specialty: "General Surgery with Burn",
    degrees: "MBBS, MS (Plastic & Reconstructive Surgery)",
    position: "Associate Professor, General Surgery (Burn &...)",
    schedule: {
      days: "Sat, Mon and Wed",
      time: "[6:00 PM - 8:00 PM]",
      location: "Kazipara, Mirpur",
    },
    image: "/images/services-2/HEALTH GUIDE-01.jpg", 

  },
  {
    name: "Dr. Hasnat Mohaiminul Islam",
    specialty: "Family Physician",
    degrees: "MBBS, CCD",
    position: "Family Physician",
    schedule: {
      days: "Sat, Sun, Mon, Tue, Wed, Thu and Fri",
      location: "Uttara",
    },
    image: "/images/services-2/HEALTH GUIDE-01.jpg", 

  },
];

export default function Doctors() {
  return (
    <div className="custom-container my-8 px-4 sm:px-6 lg:px-8">
      {/* Title & Match Count */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-pink-500 pl-3">
          Doctor Consultation
        </h2>
        <p className="text-gray-700 font-semibold">
          <span className="text-pink-600">02</span> matches found
        </p>
      </div>

      {/* Doctor Cards */}
   <div className="hidden md:block">
   <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 ">
        {doctors.map((doctor, index) => (
          <div key={index} className="border border-gray-300 rounded-lg shadow-sm bg-white flex flex-col sm:flex-row">
            {/* Doctor Image */}
            <div className="flex flex-col items-center p-4 w-full sm:w-1/2">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={112}
                  height={112}
                  objectFit="cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-2">
                {doctor.name}
              </h3>
              <p className="text-sm text-gray-600">{doctor.degrees}</p>
              <p className="text-sm text-gray-600">{doctor.position}</p>
              <button className="mt-3 bg-pink-600 text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-pink-700 transition">
                View More
              </button>
            </div>

            {/* Doctor Schedule */}
            <div className="border-t sm:border-l border-gray-300 w-full sm:w-1/2 p-4 flex flex-col justify-center">
              <h4 className="text-sm font-semibold text-teal-600">{doctor.specialty}</h4>
              <div className="mt-2 text-gray-700 text-sm">
                {doctor.schedule.days && (
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-500" /> {doctor.schedule.days}
                  </p>
                )}
                {doctor.schedule.time && (
                  <p className="flex items-center gap-2">
                    <FaClock className="text-gray-500" /> {doctor.schedule.time}
                  </p>
                )}
                {doctor.schedule.location && (
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-gray-500" /> {doctor.schedule.location}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
   </div>

        {/* For Mobile  */}

       {/* Doctor Cards */}
       <div className="grid grid-cols-1 md:hidden sm:block gap-6">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow bg-white flex flex-col md:flex-row items-center md:items-start overflow-hidden transition-transform transform hover:scale-105 duration-300"
          >
            {/* Doctor Image & Details */}
            <div className="flex flex-col items-center p-6 w-full md:w-1/2">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center shadow-md">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={112}
                  height={112}
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-3 text-center">
                {doctor.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">{doctor.degrees}</p>
              <p className="text-sm text-gray-600 text-center">{doctor.position}</p>
              <button className="mt-4 bg-pink-600 text-white px-5 py-2 text-sm font-medium rounded-md hover:bg-pink-700 transition">
                View More
              </button>
            </div>

            {/* Doctor Schedule */}
            <div className="border-t md:border-l border-gray-300 w-full md:w-1/2 p-6 flex flex-col justify-center">
              <h4 className="text-sm font-semibold text-teal-600">{doctor.specialty}</h4>
              <div className="mt-3 text-gray-700 text-sm space-y-2">
                {doctor.schedule.days && (
                  <p className="flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-500" /> {doctor.schedule.days}
                  </p>
                )}
                {doctor.schedule.time && (
                  <p className="flex items-center gap-2">
                    <FaClock className="text-gray-500" /> {doctor.schedule.time}
                  </p>
                )}
                {doctor.schedule.location && (
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-gray-500" /> {doctor.schedule.location}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
