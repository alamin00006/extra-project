import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 overflow-hidden">
        <Image
          src="/images/banner/nurse-01.jpg" // Ensure the image is inside the "public/images/banner" folder
          alt="Who We Are"
          layout="fill"
          objectFit="cover"
          priority

        />
        {/* Overlay */}
        <div className="absolute bottom-4 left-4 sm:left-8 md:left-12 bg-gray-800 bg-opacity-80 px-4 sm:px-6 py-2 sm:py-3 text-white text-base sm:text-lg font-semibold flex items-center rounded-md">
          <span className="border-l-4 border-pink-500 pl-3">Who We Are</span>
        </div>
      </div>
    </div>
  );
}
