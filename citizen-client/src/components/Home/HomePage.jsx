"use client";
import Banner from "./Banner";
import Collaborators from "./Collaborators/Collaborators";
import Facilites from "./Facilities/Facilites";
import "./Home.css";
import NoticeBoard from "./NoticeBoard/NoticeBoard";
import TenTakaiShasto from "./TenTakaiShasto/TenTakaiShasto";
import WhyChoosUs from "./WhyChoosUs/WhyChoosUs";

const HomePage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <div className="md:block xs:hidden">
        <Banner />
      </div>
      <div className="md:hidden  xs:block">
        <NoticeBoard />
      </div>
      <div className="bg-[#f4f6f9]">
        <TenTakaiShasto />
      </div>
      <div className="bg-white">
        <Facilites />
      </div>
      <div className="bg-white">
        <WhyChoosUs />
      </div>
      <div className="bg-white ">
        <Collaborators />
      </div>
    </>
  );
};

export default HomePage;
