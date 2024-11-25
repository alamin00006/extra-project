"use client";
import Image from "next/image";
import Link from "next/link";

const TenTakaiShasto = () => {
  return (
    <div className="custom-container">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full gap-5 py-20">
        <div className="md:col-span-6 w-full h-full">
          <Image
            src={"/images/10-Takar-Health-Services.webp"}
            width={1000}
            height={500}
            className="w-full h-full object-cover"
            alt="banner"
          />
        </div>
        <div className="md:col-span-6 w-full h-full p-4 md:p-6">
          <h2 className="text-2xl font-semibold mb-4">10 Takai Shastho Seba</h2>
          <p className="text-base md:text-lg mb-4">
            10 Taka Health Services is an initiative launched to provide
            affordable healthcare to citizens in Bangladesh. It aims to make
            basic healthcare services accessible to people for a nominal fee of
            10 Bangladeshi Taka, ensuring that even the poorest individuals can
            access essential healthcare services without facing significant
            financial barriers.
          </p>
          <ul className="list-disc ml-4 space-y-2 text-base md:text-lg">
            <li>
              Affordable healthcare for citizens at a nominal fee of 10
              Bangladeshi Taka
            </li>
            <li>Aims to provide basic healthcare services to all</li>
            <li>
              Goal is to improve healthcare access, especially in rural and
              underserved areas
            </li>
            <li>
              Acknowledges the financial barriers to healthcare and seeks to
              overcome them
            </li>
          </ul>
          <div className="mt-5">
            <Link
              href={"/service-application"}
              className="uppercase no-underline px-6 py-3 bg-[#3abbba] text-white rounded hover:bg-black "
            >
              Registration Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenTakaiShasto;
