"use client";
import Banner from "./Banner";
import Collaborators from "./Collaborators/Collaborators";
import Facilites from "./Facilities/Facilites";
import "./Home.css";
import TenTakaiShasto from "./TenTakaiShasto/TenTakaiShasto";
import WhyChoosUs from "./WhyChoosUs/WhyChoosUs";

const HomePage = () => {
  return (
    <>
      <div>
        <Banner />
      </div>
      {/* <div className="md:hidden  xs:block">
        <NoticeBoard />
      </div> */}
      <div className="bg-[#f4f6f9] md:mt-0 sm:mt-48">
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
