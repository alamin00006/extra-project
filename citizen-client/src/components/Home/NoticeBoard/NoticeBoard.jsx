import { projectSlider } from "@/helpers/utils/projectSlider";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const NoticeBoard = () => {
  const videoArray = [
    {
      id: 1,
      link: "https://www.youtube.com/embed/kzeIJOBYoy4?autoplay=1",
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
    <div className="md:w-[500px] xs:w-full md:h-[250px] xs:h-[180px] mx-auto p-6 bg-[#2b7c7c] md:rounded-lg xs:rounded-none shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <Splide options={projectSlider(videoArray)}>
          {videoArray.map((link) => (
            <SplideSlide key={link.id}>
              <iframe
                className="w-full h-[200px] rounded"
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
