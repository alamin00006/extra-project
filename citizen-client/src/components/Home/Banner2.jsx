import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // Default Splide CSS
import Image from "next/image";
// import NoticeBoard from "./NoticeBoard/NoticeBoard";

import { useRouter } from "next/navigation";

const images = [
  "/images/home-page/HELTH-CARE-01.jpg",
  "/images/home-page/HELTH-AWAR-01.jpg",
  "/images/home-page/MBBS-01.jpg",
  "/images/home-page/NUTRI-01.jpg",
  "/images/home-page/nurse-01.jpg",
];

const HeroSlider = ({ userData }) => {
  const router = useRouter();

  // console.log("hello");
  const handleRegistration = () => {
    if (!userData) {
      return router.push(`/login`);
    } else {
      return router.push(`/service-application`);
    }
  };

  // console.log("hello");
  return (
    <div className="relative w-full ">
      {/* Splide Slider */}
      <Splide
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          interval: 5000,
          arrows: false,
          pagination: false,
          speed: 1000,
        }}
        className="h-full"
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            <div className="relative w-screen md:h-screen sm:hidden md:block">
              <Image src={image} alt={`Slide ${index + 1}`} fill priority />
              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
            </div>
            <div className="md:hidden sm:block w-screen h-[170px]">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                // className="w-screen h-full object-contain "
                priority
              />

              {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Two-Column Content */}
      <div className="custom-container absolute inset-0 md:flex flex-col md:flex-row hidden items-center text-black px-8 gap-8">
        {/* Left-Aligned Text Content */}
        <div className="w-full md:w-1/2 bg-[#e8ffff] p-3 opacity-75 rounded md:mt-0 sm:mt-5">
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
    </div>
  );
};

export default HeroSlider;
