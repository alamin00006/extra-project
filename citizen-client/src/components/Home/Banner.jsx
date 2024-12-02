import Image from "next/image";
import Slider from "react-slick";
import NoticeBoard from "./NoticeBoard/NoticeBoard";

const Banner = () => {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <>
      <div className="relative">
        <div className="slider-container md:block sm:hidden xs:hidden">
          <Slider {...settings}>
            <div className="w-[1000px] h-[calc(100vh-200px)]">
              <Image
                src={"/images/1.webp"}
                width={1000}
                height={500}
                className="w-full h-full"
                alt="banner"
              />
            </div>
            <div className="w-[1000px] h-[calc(100vh-200px)]">
              <Image
                src={"/images/2.webp"}
                width={1000}
                height={500}
                className="w-full h-full"
                alt="banner"
              />
            </div>
            <div className="w-[1000px] h-[calc(100vh-200px)]">
              <Image
                src={"/images/4.webp"}
                width={1000}
                height={500}
                className="w-full h-full"
                alt="banner"
              />
            </div>
            <div className="w-[1000px] h-[calc(100vh-200px)]">
              <Image
                src={"/images/5.webp"}
                width={1000}
                height={500}
                className="w-full h-full"
                alt="banner"
              />
            </div>
          </Slider>
        </div>

        {/* Center the NoticeBoard */}
        <div className="absolute md:top-20 sm:top-3 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-full">
          <NoticeBoard />
        </div>
      </div>
    </>
  );
};

export default Banner;
