import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="relative ">
        <Image
          src="/images/About-us/about-us.jpg" // Ensure the image is inside the "public/images/banner" folder
          alt="Who We Are"
          width={1280}
          height={300}
          objectFit="contain"
          objectPosition="center"
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
