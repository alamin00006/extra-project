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
      <div className="relative ">
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

        <div className="md:block sm:hidden xs:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <NoticeBoard />
        </div>
        <div className="md:hidden sm:block xs:block">
          <NoticeBoard />
        </div>
      </div>
    </>
  );
};

export default Banner;
