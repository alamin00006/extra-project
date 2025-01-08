"use client";
import Banner2 from "./Banner2";
import Collaborators from "./Collaborators/Collaborators";
import Facilites from "./Facilities/Facilites";
import "./Home.css";
import TenTakaiShasto from "./TenTakaiShasto/TenTakaiShasto";
import WhyChoosUs from "./WhyChoosUs/WhyChoosUs";

const HomePage = () => {
  return (
    <>
      {/* <div>
        <Banner />
      </div> */}
      <div>
        <Banner2 />
      </div>
      {/* <div className="md:hidden  xs:block">
        <NoticeBoard />
      </div> */}
      <div className=" md:mt-0 sm:mt-10 ">
        <TenTakaiShasto />
      </div>
      <div className="bg-base-100 ">
        <Facilites />
      </div>
      <div className="bg-white mt-4">
        <WhyChoosUs />
      </div>
      <div className="bg-white ">
        <Collaborators />
      </div>
    </>
  );
};

export default HomePage;
