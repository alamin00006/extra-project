
import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

const WhyChooseUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  return (
    <div className="mb-4   ">
  

      <div className="custom-container shadow-md rounded-md md:py-5 sm:py-2 bg-white">
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
              {inView && <CountUp start={0}  end={35} duration={2.5}   className="text-pink-600"/>}+
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
              {inView && <CountUp start={0} end={40} duration={3} className="text-pink-600"/>}+
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
