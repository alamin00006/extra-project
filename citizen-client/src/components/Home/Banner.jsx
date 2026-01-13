import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // Default Splide CSS
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

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
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
    if (imagesLoaded + 1 >= images.length) {
      setLoading(false);
    }
  };

  const handleRegistration = () => {
    return router.push(`/service-application`);
  };

  // Loading Skeleton Component
  const LoadingSkeleton = () => (
    <div className="relative w-full">
      {/* Slider Skeleton */}
      <div className="relative w-full aspect-[3/1] bg-gray-200 animate-pulse">
        {/* Simulate multiple slides */}
        <div className="absolute inset-0 flex">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
              style={{
                animationDelay: `${index * 200}ms`,
                animationDuration: "1.5s",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="custom-container -mt-[145px] z-[1] md:flex hidden flex-col md:flex-row items-center text-black gap-8 h-full">
        <div className="w-full max-w-2xl">
          <div className="w-full bg-gray-100 p-3 rounded md:mt-0 sm:mt-5 animate-pulse">
            {/* Title Skeleton */}
            <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>

            {/* Text Lines Skeleton */}
            <div className="space-y-3 mb-8">
              <div className="h-4 bg-gray-300 rounded w-full"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-4 bg-gray-300 rounded w-4/5"></div>
            </div>

            {/* Button Skeleton */}
            <div className="h-12 bg-gray-300 rounded-lg w-48"></div>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <LoadingSkeleton />;
  }

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
                onLoadingComplete={handleImageLoad}
                onError={() => handleImageLoad()} // Handle image load errors
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
