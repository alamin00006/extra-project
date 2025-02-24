"use client";
import useUserData from "@/hooks/useUserData";
import Banner2 from "./Banner2";
import SuccessStories from "./CCBVideos";
import Collaborators from "./Collaborators/Collaborators";
import Facilites from "./Facilities/Facilites";
import "./Home.css";
import TenTakaiShasto from "./TenTakaiShasto/TenTakaiShasto";
import WhyChoosUs from "./WhyChoosUs/WhyChoosUs";

const HomePage = () => {
  // Get User
  const { userData, error: userError, loading: isLoadingUser } = useUserData();
  return (
    <>
      {/* <div>
        <Banner />
      </div> */}
      <div>
        <Banner2 userData={userData} />
      </div>
      <div className="bg-white mt-4">
        <WhyChoosUs userData={userData}/>
      </div>
      {/* <div className="md:hidden  xs:block">
        <NoticeBoard />
      </div> */}
      <div className=" md:mt-0 sm:mt-0 md:mx-0 sm:mx-5 ">
        <TenTakaiShasto userData={userData} />
      </div>
      <div className="bg-base-100 ">
        <Facilites />
      </div>
      <div className="bg-base-100 ">
        <SuccessStories />
      </div>

      <div className="bg-white mt-4">
        <Collaborators />
      </div>
    </>
  );
};

export default HomePage;
