"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowRight, MdHome } from "react-icons/md";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(
    "10-takai-shastho-sheba"
  );

  const currentCategory = faqData.find((cat) => cat.id === activeCategory);

  return (
    <div className=" pb-5 px-1 ">
      {/* Responsive Banner */}
      <div className="relative w-full h-[20vh] md:h-72 rounded-lg">
        <Image
          src={currentCategory?.image || ""}
          alt={`${currentCategory?.title} Image`}
          layout="fill"
          className="w-full h-full md:object-cover sm:object-contain"
          priority // Optional: use priority for above-the-fold images
        />
      </div>

      <div className="custom-container">
        {/* Dynamic Page Title */}
        <h1 className="md:text-5xl sm:text-2xl font-semibold mb-4 text-black rounded-lg mt-8">
          {currentCategory?.title}
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-gray-500 mb-12">
          <Link href="/" className="flex items-center space-x-1 text-teal-600">
            <MdHome />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="font-medium text-[#39bcbc] uppercase">
            {currentCategory?.title}
          </span>
        </div>

        <div className="lg:flex lg:space-x-8 bg-white overflow-hidden">
          {/* Sidebar */}
          <div className="lg:w-1/4 bg-[#f4f6f9] p-4 shadow-md">
            <ul className="space-y-4 p-0">
              {faqData.map((category) => (
                <li
                  key={category.id}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-transform transform hover:scale-105 ${
                    activeCategory === category.id
                      ? "bg-[#39bcbc] text-white"
                      : "bg-white text-black"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="md:text-base sm:text-sm font-medium">
                    {category.title}
                  </span>
                  <MdKeyboardArrowRight />
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-3/4">
            <div className="space-y-4">
              {currentCategory?.items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-lg bg-white p-4 text-gray-700 text-base "
                >
                  {item.answer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
