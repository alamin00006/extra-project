"use client";
import { useState } from "react";
import Image from "next/image";

const videos = [
  {
    videoUrl: "https://www.youtube.com/embed/qyl1cJqohJs",
  },
  {
    videoUrl: "https://www.youtube.com/embed/Arb1yWgFXlk",
  },
  {
    videoUrl: "https://www.youtube.com/embed/xl2Bs8KHlAg",
  },

  {
 
    videoUrl: "https://www.youtube.com/embed/nKyFfgDRhaQ",
  },
  {
    videoUrl: "https://www.youtube.com/embed/va7unzVNZog",
  },
];

export default function SuccessStories() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="custom-container  ">
      <div className=" text-center md:mx-0 sm:mx-5 md:mt-4 sm:-mt-2 ">
        <h2 className="md:text-4xl sm:text-xl text-gray-900 my-4 md:mt-0 sm:mt-6">
          Our Live Experience
        </h2>
        {/* <p className="text-gray-600 mb-8">
          Our students presence in the ever-expanding IT industry drives us to
          guide more people towards a sustainable future.
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {videos.map((video, index) => {
            const videoId = video.videoUrl.split("/").pop();
            const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            return (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-md h-[250px]"
              >
                <Image
                  src={thumbnail}
                  alt={"videos"}
                  width={600}
                  height={350}
                  className="w-full h-[250px]"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-2">
                  <div className="mt-4 flex justify-center items-center bg-white rounded-full p-2 relative">
                    <svg
                      className="w-12 h-12 text-red-500 transition-transform duration-1000 cursor-pointer animate-ping rounded-full bg-red-400 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      onClick={() => setSelectedVideo(video.videoUrl)}
                    >
                      <path d="M10 15l5-3-5-3v6z" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedVideo && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-black text-xl"
              onClick={() => setSelectedVideo(null)}
            >
              &times;
            </button>
            <iframe
              className="w-full h-96"
              src={selectedVideo}
              title="YouTube Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
