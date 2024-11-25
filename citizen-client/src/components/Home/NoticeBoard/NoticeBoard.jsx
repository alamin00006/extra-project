import { AiOutlineInfoCircle } from "react-icons/ai";

const NoticeBoard = () => {
  return (
    <div className="md:w-[500px] xs:w-full md:h-[250px] xs:h-[180px] mx-auto p-6 bg-[#2b7c7c] md:rounded-lg xs:rounded-none shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <AiOutlineInfoCircle className="text-white text-4xl mr-2" />
        <h2 className="text-3xl font-bold text-white">Notice Board</h2>
      </div>
    </div>
  );
};

export default NoticeBoard;
