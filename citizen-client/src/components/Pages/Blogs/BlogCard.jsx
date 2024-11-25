import Image from "next/image";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="max-w-sm mb-16 bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <Image
          src="/images/blog/blog1.jpg" // replace with your image path
          alt="Health Service"
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        {/* Date Badge */}
        <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          OCT 25, 2024
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">
          10 Taka Health Services: Making Healthcare Accessible For All In
          Bangladesh
        </h2>
        <p className="mt-2 text-gray-600 text-sm">
          Access to affordable healthcare is a critical need for citizens around
          the world, especial...
        </p>
      </div>

      {/* Button */}
      <div className="px-4 pb-4">
        <Link
          href={"/blog-details/1"}
          className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold py-2 px-4 rounded mt-4 no-underline"
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
