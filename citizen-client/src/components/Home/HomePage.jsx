"use client";
import useUserData from "@/hooks/useUserData";
import Banner2 from "./Banner2";
import SuccessStories from "./CCBVideos";
import Services from "./services/Services";
import "./Home.css";
import LoayalMember from "./loayal-member/LoayalMember";
import WhyChooseUs from "./WhyChoosUs/WhyChooseUs";
import PartnerShip from "./partnerShip/PartnerShip";
import Packages from "./packages/Packages";

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
        <WhyChooseUs userData={userData} />
      </div>
      {/* <div className="md:hidden  xs:block">
        <NoticeBoard />
      </div> */}
      <div className=" md:mt-0 sm:mt-0 md:mx-0 sm:mx-5 ">
        <LoayalMember userData={userData} />
      </div>
      <div className="">
        <Packages />
      </div>
      <div className="">
        <Services />
      </div>
      <div className="bg-white md:mx-0 sm:mx-5">
        <PartnerShip />
      </div>
      <div className="pb-5">
        <SuccessStories />
      </div>

      {/* <div className="bg-white ">
        <Collaborators />
      </div> */}
    </>
  );
};

export default HomePage;
