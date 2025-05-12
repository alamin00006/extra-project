import Image from "next/image";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <Link href={`/service-details/${data.id}`} className="no-underline">
      <div className="rounded-lg overflow-hidden group shadow-md md:h-[320px] sm:h-auto relative">
        {/* Text section centered in the middle of the image */}
        {/* {data.id === 2 && (
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-[1]">
            <p className="text-[#12a88b] text-sm font-black py-1 px-2 my-0 leading-tight">
              ঘরে বসেই পেশাদার
            </p>
            <p className="text-[14px] font-bold py-1 px-2 my-0 leading-tight">
              <span
                className="text-[#ff25a0] p-2 inline-block"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 94.5% 100%, 0% 100%)",
                }}
              >
                MBBS Doctor
              </span>
            </p>
            <p className="text-[10px] font-black py-1 px-2 my-0 leading-tight">
              <span
                className="bg-pink-600 text-white p-2 inline-block"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 94.5% 100%, 0% 100%)",
                }}
              >
                ভিজিট নিন প্রতি মাসে একবার।
              </span>
            </p>
            <p className="text-[10px] font-black py-1 px-2 my-0 leading-tight">
              <span
                className="bg-[#39bcbc] text-white p-2 inline-block"
                style={{ clipPath: "polygon(0 0, 100% 0, 93% 100%, 0% 100%)" }}
              >
                জরুরি প্রয়োজনে টেলিমেডিসিন সেবা
              </span>
            </p>
          </div>
        )} */}
        {/* Image section */}
        <div className="w-full mb-4">
          <Image
            src={data?.image}
            width={300}
            height={250}
            alt="Card Image"
            className="w-full h-auto object-contain rounded-md-t transform transition-transform duration-500 group-hover:scale-110 cursor-pointer"
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
