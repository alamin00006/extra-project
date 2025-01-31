"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import useUserData from "@/hooks/useUserData";
import "./Home.css";

// Loading placeholder
const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#39bcbc]"></div>
  </div>
);

// Dynamically import components (SSR enabled)
const Banner2 = dynamic(() => import("./Banner2"), { ssr: true });
const SuccessStories = dynamic(() => import("./CCBVideos"), { ssr: true });
const Collaborators = dynamic(() => import("./Collaborators/Collaborators"), {
  ssr: true,
});
const Facilites = dynamic(() => import("./Facilities/Facilites"), {
  ssr: true,
});
const TenTakaiShasto = dynamic(
  () => import("./TenTakaiShasto/TenTakaiShasto"),
  { ssr: true }
);
const WhyChoosUs = dynamic(() => import("./WhyChoosUs/WhyChoosUs"), {
  ssr: true,
});

const HomePage = () => {
  // Get User
  const { userData, error: userError, loading: isLoadingUser } = useUserData();

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Banner2 userData={userData} />
      </div>

      <div className="md:mt-0 sm:mt-0 md:mx-0 sm:mx-5">
        <TenTakaiShasto userData={userData} />
      </div>

      <div className="bg-base-100">
        <Facilites />
      </div>

      <div className="bg-base-100">
        <SuccessStories />
      </div>

      <div className="bg-white mt-4">
        <WhyChoosUs />
      </div>

      <div className="bg-white">
        <Collaborators />
      </div>
    </Suspense>
  );
};

export default HomePage;
