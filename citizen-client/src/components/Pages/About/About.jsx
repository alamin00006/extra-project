import Image from "next/image";
import Link from "next/link";
import { MdHome } from "react-icons/md";

const About = () => {
  return (
    <div className="">
      {/* Responsive Banner */}
      <div className="relative w-full h-[20vh] md:h-72 ">
        <Image
          src={"/images/About-us/about-us.webp"}
          alt={`About Image`}
          layout="fill"
          className="w-full h-full md:object-cover sm:object-contain"
          priority // Optional: use priority for above-the-fold images
        />
      </div>

      <div className="custom-container">
        <h1 className="md:text-5xl sm:text-2xl font-semibold mb-4 text-black rounded-lg mt-8">
          About Us
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-gray-500 mb-12">
          <Link href="/" className="flex items-center space-x-1 text-teal-600">
            <MdHome />
            <span className="uppercase">Home</span>
          </Link>
          <span>/</span>
          <span className="font-medium text-[#39bcbc] uppercase">About Us</span>
        </div>

        {/* Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full gap-5 mt-10 mb-20">
          <div className="md:col-span-6 w-full h-full">
            <Image
              src={"/images/Why-you-choose-us.webp"}
              width={1000}
              height={500}
              className="w-full h-full object-cover"
              alt="banner"
            />
          </div>
          <div className="md:col-span-6 w-full h-full p-4 md:p-6">
            <span className=" bg-[#d3e9fb] text-[#39bcbc] p-2 rounded">
              What About Us
            </span>
            <h2 className="text-5xl font-semibold mb-4 mt-3">
              Empowering Lives, Building a Brighter Bangladesh Together.
            </h2>
            <p className="text-base md:text-lg mb-4">
              Citizen Care Bangladesh is a multi-project-based company that
              focuses on various aspects of societal development. Our diverse
              projects include health and awareness programs for both humans and
              animals, financial projection services, IT solutions,
              environmental initiatives, agricultural development, and skill
              development programs. We are committed to creating a positive
              impact in the community by improving access to healthcare,
              promoting sustainable farming practices, raising awareness about
              important issues, and empowering individuals with essential
              skills. Through our projects, we strive to contribute to the
              overall well-being and progress of Bangladesh.
            </p>

            <p className="text-3xl font-bold mt-5">citizencarebd@gmail.com</p>
            <span className="text-[#39bcbc] text-base">
              Do you have any question?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
