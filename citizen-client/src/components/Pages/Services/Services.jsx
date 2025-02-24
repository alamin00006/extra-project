"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdKeyboardArrowRight, MdHome } from "react-icons/md";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(
    "10-takai-shastho-sheba"
  );

  const menuItems = [
    {
      id: "10-takai-shastho-sheba",
      title: "10 Taka Shastho Sheba",
      image: "/images/service-banner/service-10-taka.png",
      items: [
        {
          id: 1,
          answer: (
            <div>
              <p>
                {"10 Taka Health Services"} is an initiative launched to provide
                affordable healthcare to citizens in Bangladesh. It aimed to
                make basic healthcare services accessible to people for a
                nominal fee of 10 Bangladeshi Taka, which is a meager cost. The
                program aimed to ensure that even the poorest individuals could
                access essential healthcare services without facing significant
                financial barriers.
              </p>
              <p>
                The services covered under this program typically included basic
                medical consultations like Diabetic tests, blood pressure
                Measure, Weight Measure, and Pregnancy Test. The goal was to
                improve healthcare access, particularly in rural and underserved
                areas, where many people might otherwise not have access to
                quality healthcare.
              </p>
              <p>
                {`It's`} important to note that the availability and scope of
                such programs may vary by region and change over time.
                Therefore, I recommend checking with local healthcare
                authorities or the government of Bangladesh for the most
                up-to-date information on the {"10 Taka Health Service"} and its
                current status and services provided.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      id: "Awareness-Program",
      title: "Awareness Program",
      image: "/images/service-banner/Awareness-Program.webp",
      items: [
        {
          id: 1,
          answer: (
            <div>
              <p>
                Citizen Care Bangladesh is a non-profit organization that
                focuses on providing awareness programs to the citizens of
                Bangladesh. These programs aim to educate and inform the public
                about various aspects of society, health, and rights.
              </p>
              <p>
                One of the key areas that Citizen Care Bangladesh focuses on is
                healthcare. Through their awareness programs, they aim to
                educate citizens about common health issues, prevention methods,
                and the importance of regular check-ups. They organize workshops
                and seminars where medical professionals provide valuable
                information and answer queries from the participants. These
                programs also emphasize the significance of proper nutrition and
                exercise in maintaining a healthy lifestyle.
              </p>
              <p>
                Another important aspect of Citizen Care {`Bangladesh's`}{" "}
                awareness programs is social issues and rights. They conduct
                sessions on domestic violence, child abuse, and {`women's`}{" "}
                rights to create awareness and provide support to those
                affected. These programs involve experts in the field who
                provide guidance on legal procedures and available support
                services.
              </p>
              <p>
                Citizen Care Bangladesh also takes an active role in
                environmental awareness. They organize workshops and campaigns
                to highlight the importance of preserving the environment and
                promoting sustainable practices. These programs cover issues
                such as waste management, pollution control, and the importance
                of conservation.
              </p>
              <p>
                In addition to these main focus areas, Citizen Care Bangladesh
                provides awareness programs on various other topics such as
                education, disaster preparedness, and personal safety.
              </p>
            </div>
          ),
        },
      ],
    },
  ];

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
