import Link from "next/link";
import CountUp from "react-countup";
import {
  FaUser,
  FaHospitalUser,
  FaAppleAlt,
  FaStethoscope,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <div className="mb-10 h-[500px] bg-[#f4f6f9] relative">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full gap-5 custom-container">
        {/* Left Side Content */}
        <div className="md:col-span-6 w-full p-4 md:p-6">
          <div className="mt-10">
            <h2 className="md:text-5xl sm:text-3xl xs:text-3xl font-semibold mb-4">
              Why you choose us
            </h2>
            <p className="text-base mb-4 text-[#7c839f]">
              We are innovative and passionate about the work we do. We always
              come up with new ways to enrich your revenue to greater heights.
              Extraordinary and High Quality services: We have a supreme team
              who works rigorously to grow businesses beyond clients
              expectations.
            </p>
            <Link href={"/about-us"}>
              <button className="mt-4 uppercase px-6 py-2 bg-[#3abbba] text-white rounded hover:bg-blue-600">
                Read More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Counters */}
        <div
          className="md:col-span-6 w-full h-full bg-[#39bcbc] text-white"
          ref={ref} // Attach the intersection observer
        >
          <div className="grid grid-cols-2 mt-10">
            <div className="text-center mb-6">
              <FaUser className="mx-auto md:text-6xl sm:text-4xl xs:text-4xl" />
              <p className="font-bold leading-normal md:text-5xl sm:text-2xl xs:text-2xl mt-3">
                {inView && (
                  <CountUp start={0} end={8670} duration={3} separator="," />
                )}
                +
              </p>
              <p className="font-bold">Loyal Members</p>
            </div>

            <div className="text-center mb-6">
              <FaHospitalUser className="mx-auto md:text-6xl sm:text-3xl xs:text-3xl" />
              <p className="font-bold leading-normal md:text-5xl sm:text-2xl xs:text-2xl mt-3">
                {inView && <CountUp start={0} end={14} duration={2.5} />}+
              </p>
              <p className="font-bold">Doctors</p>
            </div>

            <div className="text-center mb-6">
              <FaAppleAlt className="mx-auto md:text-6xl sm:text-4xl xs:text-4xl" />
              <p className="font-bold leading-normal md:text-5xl sm:text-2xl xs:text-2xl mt-3">
                {inView && <CountUp start={0} end={10} duration={2.5} />}+
              </p>
              <p className="font-bold">Nutritionists</p>
            </div>

            <div className="text-center mb-6">
              <FaStethoscope className="mx-auto md:text-6xl sm:text-4xl xs:text-4xl" />
              <p className="font-bold leading-normal md:text-5xl sm:text-2xl xs:text-2xl mt-3">
                {inView && <CountUp start={0} end={35} duration={3} />}+
              </p>
              <p className="font-bold">Nurses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
