import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <>
      <div className="relative w-full h-[20vh] md:h-72 ">
        <Image
          src={"/images/blog/blog-banner.png"}
          alt={`About Image`}
          layout="fill"
          className="w-full h-full md:object-cover sm:object-contain"
          priority // Optional: use priority for above-the-fold images
        />
      </div>
      <div className="custom-container">
        <h1 className="md:text-5xl sm:text-2xl font-semibold mb-4 text-black rounded-lg mt-8">
          Our Blogs
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-gray-500 mb-12">
          <Link href="/" className="flex items-center space-x-1 text-teal-600">
            <MdHome className="text-xl" />
            <span className="uppercase">Home</span>
          </Link>
          <span>/</span>
          <span className="font-medium text-[#39bcbc] uppercase">Blogs</span>
        </div>
        <BlogCard />
      </div>
    </>
  );
};

export default Blogs;
