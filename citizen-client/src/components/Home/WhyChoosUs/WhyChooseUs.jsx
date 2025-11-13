import { useRouter } from "next/navigation";
import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

const WhyChooseUs = ({ userData }) => {
  const router = useRouter();

  const handleRegistration = () => {
    if (!userData) {
      return router.push(`/login`);
    } else {
      return router.push(`/service-application`);
    }
  };
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <>
      <div className="custom-container -mt-6 flex flex-col md:hidden sm:flex-row items-center text-black gap-8">
        {/* Left-Aligned Text Content */}
        <div className="w-full  bg-[#e8ffff] p-3 rounded ">
          <h1 className="text-xl md:text-3xl font-bold mb-4 text-pink-600">
            Welcome to Our Service
          </h1>
          <p className="text-sm md:text-xl mb-8">
            Citizen Care Bangladesh - এর লয়্যাল মেম্বার হয়ে বছর জুড়ে MBBS
            ডাক্তার, নিউট্রিশনিস্ট, রেজিস্টার্ড নার্সের নিয়মিত স্বাস্থ্যসেবা নিন
            ঘরে বসেই।
          </p>
          <button
            onClick={handleRegistration}
            className=" text-sm md:text-lg border-2 border-pink-500 hover:bg-pink-600 text-pink-600 hover:text-white font-bold py-3 px-6 rounded-lg"
          >
            Registration Now
          </button>
        </div>

        {/* Right-Aligned YouTube Video */}
        {/* <div className="w-full md:w-1/2">
          <div className="relative w-full h-64 md:h-96">
            <NoticeBoard />
          </div>
        </div> */}
      </div>

      <div className="mb-4 ">
        <div className="custom-container md:shadow-md sm:shadow-sm rounded-md md:py-5 sm:py-2 bg-white">
          <div
            className="stats flex flex-col md:flex-row md:justify-between w-full"
            ref={ref}
          >
            <div className="stat place-items-center">
              <div className="stat-title"> Loyal Members</div>
              <div className="stat-value text-[#39bcbc]">
                {inView && (
                  <CountUp
                    start={0}
                    end={10600}
                    className="text-[#39bcbc]"
                    duration={3}
                    separator=","
                  />
                )}
                +
              </div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Doctors</div>
              <div className="stat-value text-pink-600">
                {" "}
                {inView && (
                  <CountUp
                    start={0}
                    end={35}
                    duration={2.5}
                    className="text-pink-600"
                  />
                )}
                +
              </div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Nutritionists</div>
              <div className="stat-value text-[#39bcbc]">
                {" "}
                {inView && (
                  <CountUp
                    start={0}
                    className="text-[#39bcbc]"
                    end={25}
                    duration={2.5}
                  />
                )}
                +
              </div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-title">Nurses</div>
              <div className="stat-value text-pink-600">
                {" "}
                {inView && (
                  <CountUp
                    start={0}
                    end={65}
                    duration={3}
                    className="text-pink-600"
                  />
                )}
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
