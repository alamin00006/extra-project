import { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import YouTube from "react-youtube";

const NoticeBoard = () => {
  const videoArray = [
    { id: 1, link: "kzeIJOBYoy4" },
    { id: 2, link: "va7unzVNZog" },
    { id: 3, link: "JWgDV9zLOMg" },
  ];

  const [activeVideoIndex, setActiveVideoIndex] = useState(null);
  const splideRef = useRef(null);
  const players = useRef([]);

  const opts = {
    height: "250",
    width: "100%",
    playerVars: {
      autoplay: 0, // Set to 0 to avoid autoplay on load
    },
  };

  const youtubeSlider = () => ({
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    arrows: true,
    width: "100%",
    height: "auto",
  });

  // Pause the currently active video
  const pauseActiveVideo = () => {
    if (activeVideoIndex !== null && players.current[activeVideoIndex]) {
      players.current[activeVideoIndex].pauseVideo();
    }
  };

  // Handle slide change
  const handleSlideChange = () => {
    const splide = splideRef.current.splide;
    pauseActiveVideo(); // Pause the active video
    setActiveVideoIndex(splide.index); // Set the new active index
  };

  return (
    <div className="md:w-[500px] h-[250px] mx-auto md:rounded-lg xs:rounded-none shadow-lg">
      <div className="flex items-center justify-center">
        <Splide
          ref={splideRef}
          options={youtubeSlider()}
          onMove={handleSlideChange} // Trigger on slide change
        >
          {videoArray.map((video, index) => (
            <SplideSlide key={video.id}>
              <div className="w-full md:h-[250px] sm:h-[200px] rounded">
                <YouTube
                  videoId={video.link}
                  opts={opts}
                  onReady={(e) => {
                    players.current[index] = e.target; // Store player instances
                  }}
                  onPlay={() => {
                    if (activeVideoIndex !== index) {
                      pauseActiveVideo(); // Ensure only one video plays
                    }
                  }}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default NoticeBoard;
