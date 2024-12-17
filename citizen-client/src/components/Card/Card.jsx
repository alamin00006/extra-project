import Image from "next/image";

const Card = ({ text, miniText, image, icon, icon2 }) => {
  return (
    <div className="bg-base-100 rounded-lg overflow-hidden group shadow-md">
      <div className="w-full mb-4">
        <Image
          src={image}
          width={300}
          height={250}
          alt="Card Image"
          className="w-full h-auto object-contain rounded-md-t transform transition-transform duration-500 group-hover:scale-110 cursor-pointer "
        />
      </div>
      <div className="flex items-center px-3">
        <div>
          <p className="text-gray-600 text-sm">{miniText}</p>
        </div>
      </div>
      <div className="flex justify-between items-center px-3 pb-1">
        <h3 className="text-base font-semibold text-gray-800">{text}</h3>
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
