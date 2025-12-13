import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaStar } from "react-icons/fa";

const PackageCard = ({ data }) => {
  // Extract first 3 highlights
  const highlights =
    data.content.props.children
      ?.find((child) => child?.type === "ul")
      ?.props.children.slice(0, 3) || [];

  return (
    <Link href={`/package-details/${data.id}`} className="no-underline">
      <div className="rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 bg-white border border-gray-100 h-full flex flex-col hover:-translate-y-1">
        {/* Image */}
        <div className="w-full mb-4">
          <Image
            src={data?.image}
            width={300}
            height={200}
            alt="Card Image"
            className="w-full h-full object-contain rounded-md-t transform transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          />
        </div>
        {/* Content */}
        <div className="p-3 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-bold text-gray-800">{data.enTitle}</h3>
            <FaStar className={`${data.iconColor} text-xl`} />
          </div>

          <ul className="space-y-2 flex-grow">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start text-sm text-gray-600">
                <FaCheckCircle
                  className={`mt-0.5 mr-2 ${data.iconColor} w-4 h-4 flex-shrink-0`}
                />
                <span className="line-clamp-2">{item.props.children}</span>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-[#3abbba]">Details</span>
              <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                <FaArrowRight className="text-[#3abbba] text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PackageCard;
