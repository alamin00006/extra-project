"use client";
import { convertHtml } from "@/helpers/utils/convertHtml";
import { cardData } from "@/helpers/utils/serviceData";
import Image from "next/image";
import { useEffect, useState } from "react";

const ServiceDeatails = ({ params }) => {
  const [menuItem, setMenuItem] = useState(null);

  console.log(params.id);
  useEffect(() => {
    if (params.id) {
      const foundItem = cardData.find((item) => item.id === Number(params.id));
      setMenuItem(foundItem);
    }
  }, [params]);

  if (!menuItem)
    return (
      <p className="flex justify-center items-center h-screen">Loading...</p>
    );

  return (
    <div>
      <div className="relative w-full h-[20vh] md:h-72 rounded-lg">
        <Image
          src={menuItem.banner || menuItem?.image || ""}
          alt={menuItem.text}
          layout="fill"
          // className="w-screen h-full md:object-contain sm:object-contain top-0"
          priority // Optional: use priority for above-the-fold images
        />
      </div>
      <h3 className="mt-4">{menuItem?.text}</h3>
      <div>
        <p
        // dangerouslySetInnerHTML={{
        //   __html: convertHtml(menuItem?.content),
        // }}
        >
          {menuItem?.content}
        </p>
      </div>
    </div>
  );
};

export default ServiceDeatails;
