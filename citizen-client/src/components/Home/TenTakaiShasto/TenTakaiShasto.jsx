"use client";
import { useGetUserQuery } from "@/redux/api/authApi";
import Image from "next/image";
import { useRouter } from "next/navigation";

const TenTakaiShasto = () => {
  const router = useRouter();
  const {
    data: user,
    error: userError,
    isLoading: userIsLoading,
  } = useGetUserQuery();

  const handleRegistration = () => {
    if (!user) {
      return router.push(`/login`);
    } else {
      return router.push(`/service-application`);
    }
  };

  return (
    <div className="custom-container shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full gap-5 py-10 md:mt-0 sm:mt-10 xs:mt-10 ">
        <div className="md:col-span-6 w-full h-full">
          <Image
            src={"/images/10-Takar-Health-Services.webp"}
            width={1000}
            height={500}
            className="w-full h-full object-cover"
            alt="banner"
          />
        </div>
        <div className="md:col-span-6 w-full h-full sm:p-4 xs:p-4 md:p-6 py-0">
          <h2 className="text-2xl mb-4">10 Takai Shastho Seba</h2>
          <p className="text-sm md:text-base mb-4 text-[#565656] leading-8 ">
            10 Taka Health Services is an initiative launched to provide
            affordable healthcare to citizens in Bangladesh. It aims to make
            basic healthcare services accessible to people for a nominal fee of
            10 Bangladeshi Taka, ensuring that even the poorest individuals can
            access essential healthcare services without facing significant
            financial barriers.
          </p>
          <ul className="list-disc ml-4 space-y-2 text-sm md:text-base text-[#565656]">
            <li>Blood Pressure (BP)</li>
            <li>Body Weight Measurement</li>
            <li>Body Mass Index (BMI)</li>
            <li>Temperature Measurement</li>
            <li>Respiration Rate </li>
            <li>Pulse Oximeter Reading</li>
            <li>Diabetes Test</li>
            <li>E-medical consultancy</li>
          </ul>
          <div className="mt-5">
            <button
              onClick={handleRegistration}
              className="uppercase no-underline px-6 py-3 bg-[#3abbba] text-white rounded hover:bg-black md:text-base sm:text-sm xs:text-sm"
            >
              Registration Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenTakaiShasto;
