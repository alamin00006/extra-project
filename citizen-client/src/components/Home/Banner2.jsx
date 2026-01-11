import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // Default Splide CSS
import Image from "next/image";
import { useRouter } from "next/navigation";

const images = [
  "/images/home-page/1800-4.webp",
  "/images/home-page/1800-1.webp",
  "/images/home-page/1800-2.webp",
  "/images/home-page/1800-3.webp",
  "/images/home-page/Home-Page-Front.jpg",
  "/images/home-page/CCB-CUMMUNITY.jpg",
  "/images/home-page/Awerness-Program.jpg",
];

const HeroSlider = ({ userData }) => {
  const router = useRouter();

  const handleRegistration = () => {
    return router.push(`/service-application`);
  };

  return (
    <div className="relative w-full">
      {/* Splide Slider */}
      <Splide
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          interval: 2000,
          arrows: false,
          pagination: false,
          speed: 1000,
        }}
        className="h-full"
      >
        {images.map((image, index) => (
          <SplideSlide key={index}>
            {/* Desktop & Mobile unified ratio */}
            <div className="relative w-full aspect-[3/1] bg-black">
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
      <div className="custom-container  -mt-[145px] z-[1] md:flex hidden flex-col md:flex-row items-center text-black gap-8 h-full">
        <div>
          <div className="w-full bg-[#e8ffff] p-3 opacity-75 rounded md:mt-0 sm:mt-5">
            <h1 className="md:text-2xl 2xl:text-4xl font-bold mb-4 text-pink-600">
              Welcome to Our Service
            </h1>
            {/* <p className="text-sm md:text-base mb-8 font-bengali">
              Citizen Care Bangladesh - এর লয়্যাল মেম্বার হয়ে বছর জুড়ে MBBS
              ডাক্তার, নিউট্রিশনিস্ট, রেজিস্টার্ড নার্সের নিয়মিত স্বাস্থ্যসেবা
              নিন ঘরে বসেই।
            </p> */}
            <button
              onClick={handleRegistration}
              className="text-sm border-2 border-pink-500 hover:bg-pink-600 text-pink-600 hover:text-white font-bold py-3 px-6 rounded-lg"
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

// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/css"; // Default Splide CSS
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// const images = [
//   "/images/home-page/1800-4.webp",
//   "/images/home-page/1800-1.webp",
//   "/images/home-page/1800-2.webp",
//   "/images/home-page/1800-3.webp",
//   "/images/home-page/Home-Page-Front.jpg",
//   "/images/home-page/CCB-CUMMUNITY.jpg",
//   "/images/home-page/Awerness-Program.jpg",
// ];

// const HeroSlider = ({ userData }) => {
//   const router = useRouter();

//   const handleRegistration = () => {
//     return router.push(`/service-application`);
//   };

//   return (
//     <div className="relative w-full">
//       {/* Splide Slider */}
//       <Splide
//         options={{
//           type: "fade",
//           rewind: true,
//           autoplay: true,
//           interval: 2000,
//           arrows: false,
//           pagination: false,
//           speed: 1000,
//         }}
//         className="h-full"
//       >
//         {images.map((image, index) => (
//           <SplideSlide key={index}>
//             <div className="relative w-screen sm:hidden md:block h-[calc(100vh-230px)] relative">
//               <Image src={image} alt={`Slide ${index + 1}`} fill priority />
//             </div>
//             <div className="md:hidden sm:block relative w-screen h-[150px]">
//               <Image src={image} alt={`Slide ${index + 1}`} fill priority />
//             </div>
//           </SplideSlide>
//         ))}
//       </Splide>

//       {/* Two-Column Content */}
//       <div className="custom-container  -mt-[145px] z-[1] md:flex hidden flex-col md:flex-row items-center text-black gap-8 h-full">
//         <div>
//           <div className="w-full bg-[#e8ffff] p-3 opacity-75 rounded md:mt-0 sm:mt-5">
//             <h1 className="md:text-2xl 2xl:text-4xl font-bold mb-4 text-pink-600">
//               Welcome to Our Service
//             </h1>
//             {/* <p className="text-sm md:text-base mb-8 font-bengali">
//               Citizen Care Bangladesh - এর লয়্যাল মেম্বার হয়ে বছর জুড়ে MBBS
//               ডাক্তার, নিউট্রিশনিস্ট, রেজিস্টার্ড নার্সের নিয়মিত স্বাস্থ্যসেবা
//               নিন ঘরে বসেই।
//             </p> */}
//             <button
//               onClick={handleRegistration}
//               className="text-sm border-2 border-pink-500 hover:bg-pink-600 text-pink-600 hover:text-white font-bold py-3 px-6 rounded-lg"
//             >
//               Registration Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSlider;
