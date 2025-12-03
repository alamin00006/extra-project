import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // Default Splide CSS
import Image from "next/image";
import { useRouter } from "next/navigation";

const images = [
  "/images/home-page/Health-Care.jpg",
  "/images/home-page/Home-Page-Front.jpg",
  "/images/home-page/CCB-CUMMUNITY.jpg",
  "/images/home-page/Awerness-Program.jpg",
  // "/images/home-page/Awerness-Program.jpg",
  "/images/home-page/Medicine Supply.jpg",
];

const HeroSlider = ({ userData }) => {
  const router = useRouter();

  const handleRegistration = () => {
    return router.push(`/service-application`);
  };
  // const handleRegistration = () => {
  //   if (!userData) {
  //     return router.push(`/login`);
  //   } else {
  //     return router.push(`/service-application`);
  //   }
  // };

  return (
    <div className="relative w-full">
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
            <div className="relative w-screen sm:hidden md:block h-[calc(100vh-230px)]">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="md:hidden sm:block relative w-screen h-[170px]">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Two-Column Content */}
      <div className="custom-container inset-0 absolute top-0 left-0 z-[1] md:flex hidden flex-col md:flex-row items-center text-black gap-8 h-full">
        <div>
          {/* Left-Aligned Text Content */}
          <div className="w-full md:w-1/2 bg-[#e8ffff] p-3 opacity-75 rounded md:mt-0 sm:mt-5">
            <h1 className="text-xl md:text-3xl font-bold mb-4 text-pink-600">
              Welcome to Our Service
            </h1>
            <p className="text-sm md:text-base mb-8 font-bengali">
              Citizen Care Bangladesh - এর লয়্যাল মেম্বার হয়ে বছর জুড়ে MBBS
              ডাক্তার, নিউট্রিশনিস্ট, রেজিস্টার্ড নার্সের নিয়মিত স্বাস্থ্যসেবা
              নিন ঘরে বসেই।
            </p>
            <button
              onClick={handleRegistration}
              className="text-sm md:text-lg border-2 border-pink-500 hover:bg-pink-600 text-pink-600 hover:text-white font-bold py-3 px-6 rounded-lg"
            >
              Registration Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
