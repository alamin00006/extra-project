import { projectSlider } from "@/helpers/utils/projectSlider";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const NoticeBoard = () => {
  const videoArray = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/kzeIJOBYoy4",
    },
    {
      id: 2,
      link: "https://www.youtube.com/embed/va7unzVNZog",
    },
    {
      id: 3,
      link: "https://www.youtube.com/embed/JWgDV9zLOMg",
    },
  ];

  return (
    <div className="md:w-[500px] h-[250px] mx-auto md:rounded-lg xs:rounded-none shadow-lg">
      <div className="flex items-center justify-center ">
        <Splide options={projectSlider(videoArray)}>
          {videoArray.map((link) => (
            <SplideSlide key={link.id}>
              <iframe
                className="w-full md:h-[250px] sm:h-[200px] rounded"
                src={link.link}
                title="Citezencare Bangladesh"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default NoticeBoard;
