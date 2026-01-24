"use client";
import { useState } from "react";
import Image from "next/image";

const videos = [
  { videoUrl: "https://www.youtube.com/embed/iHVxFWGAnuo" },
  { videoUrl: "https://www.youtube.com/embed/UB_F2ZUNVU8" },
  { videoUrl: "https://www.youtube.com/embed/qyl1cJqohJs" },
  { videoUrl: "https://www.youtube.com/embed/8etWY4_0z4o" },
  { videoUrl: "https://www.youtube.com/embed/yaFId-1VfcQ" },
  { videoUrl: "https://www.youtube.com/embed/lrgHv03tewU" },
];

export default function SuccessStories() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="custom-container">
      <div className="text-center md:mx-0 sm:mx-5 md:mt-0 sm:-mt-8">
        <h2 className="md:text-4xl sm:text-2xl text-gray-900 md:mb-8 sm:mb-4 md:mt-0 sm:mt-3">
          Our Live Experience
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4">
          {videos.map((video, index) => {
            const videoId = video.videoUrl.split("/embed/")[1]?.split("?")[0];
            const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

            return (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-md cursor-pointer"
                onClick={() => setSelectedVideo(video.videoUrl + "?autoplay=1")}
              >
                {/* Thumbnail */}
                <div className="relative w-full aspect-video">
                  <Image
                    src={thumbnail}
                    alt="YouTube video thumbnail"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={index === 0}
                  />
                </div>

                {/* Overlay + previous motion */}
                <div className="absolute inset-0 flex items-center justify-center ">
                  <div className="relative flex items-center justify-center">
                    {/* Ping animation circle */}
                    <span className="absolute inline-flex h-16 w-16 rounded-full bg-red-500 opacity-60 animate-ping"></span>

                    {/* Play button */}
                    <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
                      <svg
                        className="w-8 h-8 text-red-600 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M10 15l5-3-5-3v6z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-white p-4 rounded-xl max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-3 -right-3 bg-red-500 text-white w-8 h-8 rounded-full text-lg shadow"
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>

            <div className="relative w-full aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full rounded-lg"
                src={selectedVideo}
                title="YouTube Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
