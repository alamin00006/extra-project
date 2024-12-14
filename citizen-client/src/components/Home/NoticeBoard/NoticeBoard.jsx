import { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import YouTube from "react-youtube";
import LoadingState from "@/components/shared/LoadingState";

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
    height: "100%",
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
    height: "100%",
  });

  // Pause the currently active video
  const pauseActiveVideo = () => {
    if (activeVideoIndex !== null && players.current[activeVideoIndex]) {
      players.current[activeVideoIndex].pauseVideo();
    }
  };

  // Handle slide change
  // const handleSlideChange = () => {
  //   const splide = splideRef.current.splide;
  //   pauseActiveVideo(); // Pause the active video
  //   setActiveVideoIndex(splide.index); // Set the new active index
  // };

  const [activeSlide, setActiveSlide] = useState(0);
  const [videoEnded, setVideoEnded] = useState([]);
  // const [youtubeVideoLinks, setYoutubeVideoLinks] = useState([]);
  // const splideRef = useRef(null);
  const playerRefs = useRef([]);

  const youtubeVideoLinks = [
    "https://youtu.be/kzeIJOBYoy4?si=1ghHY8poC8UxO1H1?rel=0",
    "https://youtu.be/va7unzVNZog?si=vnoc8o4E_hGjcEoK?rel=0",
    "https://youtu.be/nKyFfgDRhaQ?si=7ILOAux9IRRut4BB?rel=0",
  ];

  const videoOptions = {
    height: "340",
    width: "100%",
    playerVars: {
      autoplay: 0,
      rel: 0,
    },
  };

  const extractVideoId = (url) => {
    const regex = /(?:\?v=|\/embed\/|\.be\/|\/v\/)([^&#?/]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };
  const handleSlideChange = (splide) => {
    const newActiveSlide = splide.index;
    setActiveSlide(newActiveSlide);

    playerRefs.current.forEach((player, index) => {
      if (player) {
        if (index === newActiveSlide) {
          player.playVideo();
        } else {
          player.pauseVideo();
        }
      }
    });
  };

  const handleVideoEnd = (index) => {
    // Mark the video as ended
    setVideoEnded((prevState) => {
      const updatedState = [...prevState];
      updatedState[index] = true;
      return updatedState;
    });
  };

  return (
    <Splide
      className=""
      ref={splideRef}
      options={youtubeSlider()}
      onMove={handleSlideChange} // Trigger on slide change
    >
      {youtubeVideoLinks.map((link, index) => {
        const videoId = extractVideoId(link);
        return (
          <SplideSlide key={index}>
            <YouTube
              videoId={videoId}
              opts={videoOptions}
              onReady={(event) => {
                playerRefs.current[index] = event.target;
              }}
              onEnd={() => handleVideoEnd(index)}
            />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default NoticeBoard;
