import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // Default Splide CSS
import Image from "next/image";
import NoticeBoard from "./NoticeBoard/NoticeBoard";

const images = [
  "/images/1.webp", // Replace with your image paths
  "/images/2.webp",
  "/images/4.webp",
];

const HeroSlider = () => {
  return (
    <div className="relative w-full h-screen">
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
            <div className="relative w-full h-screen">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                objectFit="cover"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Two-Column Content */}
      <div className="custom-container absolute inset-0 flex flex-col md:flex-row justify-center items-center text-white px-8 gap-8">
        {/* Left-Aligned Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our Service
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Experience the best healthcare solutions tailored for your family.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg">
            Book an Appointment
          </button>
        </div>

        {/* Right-Aligned YouTube Video */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-64 md:h-96">
            {/* <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/your-video-id"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
            <NoticeBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;

// import Image from "next/image";
// import Slider from "react-slick";
// import NoticeBoard from "./NoticeBoard/NoticeBoard";

// const Banner = () => {
//   const settings = {
//     dots: false,
//     arrows: false,
//     fade: true,
//     infinite: true,
//     speed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     waitForAnimate: false,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnHover: false,
//   };

//   return (
//     <>
//       <div className="relative">
//         <div className="slider-custom-container md:block sm:hidden xs:hidden">
//           <Slider {...settings}>
//             <div className="w-[1000px] 2xl:h-[calc(100vh-250px)] xl:h-[calc(100vh-200px)] lg:h-[calc(100vh-250px)] md:h-[calc(100vh-200px)] sm:h-[calc(100vh-50px)]">
//               <Image
//                 src={"/images/1.webp"}
//                 width={1000}
//                 height={500}
//                 className="w-full 2xl:h-full xl:h-full lg:h-full  md:h-full sm:h-full "
//                 alt="banner"
//               />
//             </div>
//             <div className="w-[1000px] 2xl:h-[calc(100vh-250px)] xl:h-[calc(100vh-200px)] lg:h-[calc(100vh-250px)] md:h-[calc(100vh-200px)] sm:h-[calc(100vh-50px)]">
//               <Image
//                 src={"/images/2.webp"}
//                 width={1000}
//                 height={500}
//                 className="w-full 2xl:h-full xl:h-full lg:h-full  md:h-full sm:h-full "
//                 alt="banner"
//               />
//             </div>
//             <div className="w-[1000px] 2xl:h-[calc(100vh-250px)] xl:h-[calc(100vh-200px)] lg:h-[calc(100vh-250px)] md:h-[calc(100vh-200px)] sm:h-[calc(100vh-50px)]">
//               <Image
//                 src={"/images/4.webp"}
//                 width={1000}
//                 height={500}
//                 className="w-full 2xl:h-full xl:h-full lg:h-full  md:h-full sm:h-full "
//                 alt="banner"
//               />
//             </div>
//             <div className="w-[1000px] 2xl:h-[calc(100vh-250px)] xl:h-[calc(100vh-200px)] lg:h-[calc(100vh-250px)] md:h-[calc(100vh-200px)] sm:h-[calc(100vh-50px)]">
//               <Image
//                 src={"/images/5.webp"}
//                 width={1000}
//                 height={500}
//                 className="w-full 2xl:h-full xl:h-full lg:h-full  md:h-full sm:h-full "
//                 alt="banner"
//               />
//             </div>
//           </Slider>
//         </div>

//         {/* Center the NoticeBoard */}
//         <div className="absolute md:top-20 sm:top-3 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full">
//           <NoticeBoard />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Banner;
