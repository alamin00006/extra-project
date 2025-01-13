import Image from "next/image";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <Link href={`/service-details/${data.id}`} className="no-underline">
      <div className="bg-base-100 rounded-lg overflow-hidden group shadow-md">
        <div className="w-full mb-4">
          <Image
            src={data?.image}
            width={300}
            height={250}
            alt="Card Image"
            className="w-full h-auto object-contain rounded-md-t transform transition-transform duration-500 group-hover:scale-110 cursor-pointer "
          />
        </div>
        <div className="flex items-center px-3">
          <div>
            <p className="text-gray-600 text-[12px]">{data?.miniText}</p>
          </div>
        </div>
        <div className="flex justify-between items-center px-3 pb-1">
          <h3 className="text-sm font-semibold text-gray-800">{data?.text}</h3>
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
