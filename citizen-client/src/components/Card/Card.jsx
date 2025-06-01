import Image from "next/image";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <Link href={`/service-details/${data.id}`} className="no-underline">
      <div className="rounded-lg overflow-hidden group shadow-md md:h-[300px] sm:h-auto relative">
        {/* Text section centered in the middle of the image */}
        {data.id === 2 && (
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/3 -translate-y-1/2 w-full z-[1]">
            <p className="text-[#12a88b] text-xl font-black py-1 px-2 my-0 font-bengali">
              প্রতি মাসে <span className="text-3xl text-pink-600 ">১</span> বার
            </p>

            <p className=" font-black px-2 my-0 leading-tight ">
              <span
                className=" text-pink-600 text-xl font-bold inline-block font-bengali"
                // style={{
                //   clipPath: "polygon(0 0, 100% 0, 94.5% 100%, 0% 100%)",
                // }}
              >
                {/* রেজিস্টার্ড */}
                MBBS ডাক্তার
              </span>
            </p>

            <p className="font-bold px-2 my-0 opacity-80 leading-tight ">
              <span
                className="text-[#12a88b] bg-white  px-2 py-1 font-bold text-xl inline-block font-bengali"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 94.5% 100%, 0% 100%)",
                }}
              >
                আপনার বাসায়
              </span>
            </p>
            {/* <p className="text-[10px] font-black py-1 px-2 my-0 leading-tight">
              <span
                className="bg-[#39bcbc] text-white p-2 inline-block"
                style={{ clipPath: "polygon(0 0, 100% 0, 93% 100%, 0% 100%)" }}
              >
                জরুরি প্রয়োজনে টেলিমেডিসিন সেবা
              </span>
            </p> */}
          </div>
        )}
        {data.id === 3 && (
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-full z-[1]">
            <p className="text-[#12a88b] text-xl font-black py-1 px-2 my-0 font-bengali">
              প্রতি মাসে <span className="text-3xl text-pink-600 ">১</span> বার
            </p>

            <p className="font-black px-2 my-0 leading-tight ">
              <span
                className="text-xl font-bold text-pink-600 inline-block font-bengali"
                // style={{
                //   clipPath: "polygon(0 0, 100% 0, 94.5% 100%, 0% 100%)",
                // }}
              >
                অভিজ্ঞ নিউট্রিশনিস্ট
              </span>
            </p>

            <p className=" font-bold px-2 my-0 leading-tight ">
              <span
                className="text-[#12a88b] text-xl inline-block font-bengali"
                // style={{
                //   clipPath: "polygon(0 0, 100% 0, 94.5% 100%, 0% 100%)",
                // }}
              >
                আপনার বাসায়
              </span>
            </p>
          </div>
        )}
        {data.id === 4 && (
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-full z-[1]">
            <p className="text-[#12a88b] text-xl font-black  px-2 my-0 font-bengali">
              প্রতি মাসে <span className="text-2xl text-pink-600">২-৪</span> বার
            </p>

            <p className=" font-black px-2 my-0 leading-tight ">
              <span
                className=" text-pink-600 font-bold text-xl inline-block font-bengali"
                // style={{
                //   clipPath: "polygon(0 0, 100% 0, 94.5% 100%, 0% 100%)",
                // }}
              >
                BSc নার্স/SACMO
              </span>
            </p>
            <p className=" font-bold  px-2 my-0 leading-tight   ">
              <span
                className="text-[#12a88b] text-xl inline-block font-bengali "
                // style={{
                //   clipPath: "polygon(0 0, 100% 0, 94.5% 100%, 0% 100%)",
                // }}
              >
                আপনার বাসায়
              </span>
            </p>
          </div>
        )}
        {/* Image section */}
        <div className="w-full mb-4">
          <Image
            src={data?.image}
            width={300}
            height={200}
            alt="Card Image"
            className="w-full h-full object-contain rounded-md-t transform transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="flex items-center px-3">
          <div>
            <p className="text-gray-600 text-sm font-bengali">
              {data?.miniText}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center px-3 pb-1">
          <h3 className="text-base font-semibold text-gray-800 font-bengali">
            {data?.text}
          </h3>
          <div className="w-10 h-10 transform transition-transform duration-1000 group-hover:rotate-[360deg]">
            {data?.icon2 ? (
              data?.icon2
            ) : (
              <Image
                src={data?.icon}
                width={30}
                height={30}
                alt="Icon"
                className="w-full h-full"
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
