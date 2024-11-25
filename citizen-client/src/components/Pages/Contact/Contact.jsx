import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdHome } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className="relative w-full h-[20vh] md:h-72 ">
        <Image
          src={"/images/Contact_us.webp"}
          alt={`About Image`}
          layout="fill"
          className="w-full h-full md:object-cover sm:object-contain"
          priority // Optional: use priority for above-the-fold images
        />
      </div>
      <div className="custom-container">
        <h1 className="md:text-5xl sm:text-2xl font-semibold mb-4 text-black rounded-lg mt-8">
          Contact Us
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-gray-500 mb-12">
          <Link href="/" className="flex items-center space-x-1 text-teal-600">
            <MdHome className="text-xl" />
            <span className="uppercase">Home</span>
          </Link>
          <span>/</span>
          <span className="font-medium text-[#39bcbc] uppercase">
            Contact Us
          </span>
        </div>
        {/* Location */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6 mb-10">
          {/* Location Box */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-6 w-80 h-72 text-center">
            <div className="bg-teal-400 rounded-md p-4 mb-4">
              <FaMapMarkerAlt className="text-white text-3xl" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Our Location
            </h2>
            <p className="text-gray-600 mt-2">
              Anamika terrace, 32/A, road-02,
            </p>
            <p className="text-gray-600">Dhanmondi Dhaka-120</p>
          </div>

          {/* Mail Box */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-6 w-80 h-72  text-center">
            <div className="bg-teal-400 rounded-md p-4 mb-4">
              <FaEnvelope className="text-white text-3xl" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">Mail Us</h2>
            <p className="text-gray-600 mt-2">citizencarebd@gmail.com</p>
          </div>
        </div>
        <div className="mb-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58435.677869841085!2d90.378612!3d23.739181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b93af48652eb%3A0xee9ace2160af5673!2sAnamika%20Terrace!5e0!3m2!1sen!2sbd!4v1730666893904!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
