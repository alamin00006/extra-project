import Image from "next/image";

const WhyChoosUs = () => {
  return (
    <>
      <div className="custom-container mb-10 h-[700px] bg-[#f4f6f9] relative md:block xs:hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full gap-5 mt-20 ">
          <div className="md:col-span-6 w-full p-4 md:p-6 ">
            <div className="mt-48">
              <h2 className="text-5xl font-semibold mb-4">Why you choose us</h2>
              <p className="text-base  mb-4 text-[#7c839f]">
                We are innovative and passionate about the work we do. We always
                come up with new ways to enrich your revenue to greater heights.
                Extraordinary and High Quality services: We have a supreme team
                who works rigorously to grow businesses beyond clients
                expectations.
              </p>

              <button className="mt-4 uppercase px-6 py-2 bg-[#3abbba] text-white rounded hover:bg-blue-600">
                Read More
              </button>
            </div>
          </div>
          <div className="md:col-span-6 w-full h-full bg-[#2b7c7c] flex justify-end">
            <div className="mr-16 mt-48">
              <div>
                <p className="text-center font-bold leading-normal text-white text-5xl">
                  {" "}
                  1720 +
                </p>
                <p className="text-center font-bold leading-normal text-white ">
                  {" "}
                  HAPPY CUSTOMER
                </p>
              </div>
              <div>
                <p className="text-center font-bold leading-normal text-white text-5xl">
                  {" "}
                  570 +
                </p>
                <p className="text-center font-bold leading-normal text-white ">
                  {" "}
                  EMPLOYMENT
                </p>
              </div>
              <div>
                <p className="text-center font-bold leading-normal text-white text-5xl">
                  {" "}
                  33 +
                </p>
                <p className="text-center font-bold leading-normal text-white ">
                  EXPERTS{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-24 right-60">
          <div className="w-[450px]">
            <Image
              src={"/images/Why-you-choose-us.webp"}
              width={500}
              height={500}
              className="w-full h-full object-cover"
              alt="banner"
            />
          </div>
        </div>
      </div>
      {/* For Mobile */}
      <div className="custom-container bg-[#f4f6f9] md:hidden xs:block">
        <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full gap-5 mt-10 ">
          <div className="md:col-span-6 w-full p-4 md:p-6 ">
            <div className="mt-10">
              <h2 className="text-5xl font-semibold mb-4">Why you choose us</h2>
              <p className="text-base  mb-4 text-[#7c839f]">
                We are innovative and passionate about the work we do. We always
                come up with new ways to enrich your revenue to greater heights.
                Extraordinary and High Quality services: We have a supreme team
                who works rigorously to grow businesses beyond clients
                expectations.
              </p>

              <button className="mt-4 uppercase px-6 py-2 bg-[#3abbba] text-white rounded hover:bg-blue-600">
                Read More
              </button>
            </div>
          </div>

          <div className="">
            <div className="w-screen">
              <Image
                src={"/images/Why-you-choose-us.webp"}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                alt="banner"
              />
            </div>
          </div>
          <div className=" w-full h-full bg-[#2b7c7c] flex justify-center">
            <div className=" mt-20">
              <div>
                <p className="text-center font-bold leading-normal text-white text-5xl">
                  {" "}
                  1720 +
                </p>
                <p className="text-center font-bold leading-normal text-white ">
                  {" "}
                  HAPPY CUSTOMER
                </p>
              </div>
              <div>
                <p className="text-center font-bold leading-normal text-white text-5xl">
                  {" "}
                  570 +
                </p>
                <p className="text-center font-bold leading-normal text-white ">
                  {" "}
                  EMPLOYMENT
                </p>
              </div>
              <div>
                <p className="text-center font-bold leading-normal text-white text-5xl">
                  {" "}
                  33 +
                </p>
                <p className="text-center font-bold leading-normal text-white pb-14">
                  EXPERTS{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChoosUs;
