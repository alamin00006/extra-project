import Image from "next/image";

const Career = () => {
  return (
    <div className="relative w-full h-[20vh] md:h-80">
      <Image
        src={"/images/Career.webp"}
        alt={`Career Image`}
        layout="fill"
        className="w-full h-full object-cover z-0"
        priority // Optional: use priority for above-the-fold images
      />

      {/* Overlay container */}
      <div className="absolute  inset-0 flex justify-center items-center rounded-lg z-10">
        <div className="bg-transparent rounded-lg border border-black p-3  text-center">
          <h1 className="text-base font-semibold bg-teal-500 text-white py-2 px-4 rounded-full mb-4">
            Web Based Recruitment System
          </h1>
          <p className="text-gray-500">No circular Available</p>
        </div>
      </div>
    </div>
  );
};

export default Career;
