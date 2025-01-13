import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css"; // Default Splide CSS
import Image from "next/image";
import NoticeBoard from "./NoticeBoard/NoticeBoard";

const images = [
  "/images/banner/helth-awar-01.jpg",
  "/images/banner/HELTH-CARE-01-01.jpg",
  "/images/banner/JAHID-01.jpg",
  "/images/banner/niutri-01.jpg",
  "/images/banner/nurse-01.jpg",
];

const HeroSlider = () => {
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
            <div className="relative w-screen h-screen sm:hidden md:block">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                className="md:object-cover sm:object-contain"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="md:hidden w-screen h-screen">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                width={500}
                height={300}
                className="w-screen h-screen "
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* Two-Column Content */}
      <div className="custom-container absolute inset-0 flex flex-col md:flex-row  items-center text-black px-8 gap-8">
        {/* Left-Aligned Text Content */}
        <div className="w-full md:w-1/2 bg-[#e8ffff] p-3 opacity-60 rounded">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">
            Welcome to Our Service
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Experience the best healthcare solutions tailored for your family.
          </p>
          <button className=" border-2 border-pink-500 hover:bg-pink-600 text-pink-600 hover:text-white font-bold py-3 px-6 rounded-lg">
            Book an Appointment
          </button>
        </div>

        {/* Right-Aligned YouTube Video */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-64 md:h-96">
            <NoticeBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
