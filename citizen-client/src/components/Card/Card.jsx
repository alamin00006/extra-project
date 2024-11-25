import Image from "next/image";

const Card = ({ text, miniText, image, icon, icon2 }) => {
  return (
    <div className="bg-[#f4f6f9] rounded-lg overflow-hidden p-4 group">
      <div className="w-full mb-4">
        <Image
          src={image}
          width={500}
          height={300}
          alt="Card Image"
          className="w-full h-auto object-contain rounded-md transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center ">
        <div>
          <p className="text-gray-600 text-sm">{miniText}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-gray-800">{text}</h3>
        <div className="w-10 h-10 transform transition-transform duration-1000 group-hover:rotate-[360deg]">
          {icon2 ? (
            icon2
          ) : (
            <Image
              src={icon}
              width={30}
              height={30}
              alt="Icon"
              className="w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
