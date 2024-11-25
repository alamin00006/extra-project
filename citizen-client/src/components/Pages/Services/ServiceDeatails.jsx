"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ServiceDeatails = ({ params }) => {
  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    if (params.id) {
      fetch("/menuItems.json")
        .then((response) => response.json())
        .then((data) => {
          const foundItem = data.find((item) => item.id === params.id);
          setMenuItem(foundItem);
        })
        .catch((error) => console.error("Error fetching item:", error));
    }
  }, [params]);

  if (!menuItem) return <p>Loading...</p>;

  return (
    <div>
      <div className="relative w-full h-[20vh] md:h-72 rounded-lg">
        <Image
          src={menuItem.image || ""}
          alt={menuItem.title}
          layout="fill"
          className="w-full h-full md:object-contain sm:object-contain top-0"
          priority // Optional: use priority for above-the-fold images
        />
      </div>
      <h1>{menuItem.title}</h1>
      <div>
        {menuItem.items[0].answer.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ServiceDeatails;
