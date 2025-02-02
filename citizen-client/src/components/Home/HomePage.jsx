"use client";

import dynamic from "next/dynamic";
import useUserData from "@/hooks/useUserData";
import "./Home.css";
import { useEffect, useState } from "react";

// Loading placeholder
const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#39bcbc]"></div>
  </div>
);

// Dynamically import components (disable SSR)
const Banner2 = dynamic(() => import("./Banner2"), { ssr: false });
const SuccessStories = dynamic(() => import("./CCBVideos"), { ssr: false });
const Collaborators = dynamic(() => import("./Collaborators/Collaborators"), {
  ssr: false,
});
const Facilities = dynamic(() => import("./Facilities/Facilites"), {
  ssr: false,
});
const TenTakaiShasto = dynamic(
  () => import("./TenTakaiShasto/TenTakaiShasto"),
  { ssr: false }
);
const WhyChooseUs = dynamic(() => import("./WhyChoosUs/WhyChoosUs"), {
  ssr: false,
});

const HomePage = () => {
  // Get User
  const { userData, loading: isLoadingUser } = useUserData();

  const [showLoading, setShowLoading] = useState(false);

  // Show loading after a delay if components take too long to load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(true);
    }, 300); // Show loading after 300ms if components haven't loaded

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showLoading && <Loading />}
      <Banner2 userData={userData} />

      <div className="md:mt-0 sm:mt-0 md:mx-0 sm:mx-5">
        <TenTakaiShasto userData={userData} />
      </div>

      <div className="bg-base-100">
        <Facilities />
      </div>

      <div className="bg-base-100">
        <SuccessStories />
      </div>

      <div className="bg-white mt-4">
        <WhyChooseUs />
      </div>

      <div className="bg-white">
        <Collaborators />
      </div>
    </div>
  );
};

export default HomePage;
