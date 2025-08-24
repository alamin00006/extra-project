"use client";

import React from "react";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const GallerySection = () => {
  const images = [
    { src: "/images/gallery/image-1.jpg", title: "Gallery 1" },
    { src: "/images/gallery/image-2.jpg", title: "Gallery 2" },
    { src: "/images/gallery/image-3.jpg", title: "Gallery 3" },
    { src: "/images/gallery/image-4.jpg", title: "Gallery 4" },
    {
      src: "/images/gallery/Senior Festival 1.webp",
      title: "Senior Festival 1",
    },
    {
      src: "/images/gallery/Senior Festival 2.webp",
      title: "Senior Festival 2",
    },
    {
      src: "/images/gallery/Senior Festival 3.webp",
      title: "Senior Festival 3",
    },
    {
      src: "/images/gallery/Senior Festival 4.webp",
      title: "Senior Festival 4",
    },
  ];

  return (
    <div className="custom-container bg-white dark:bg-gray-800 mb-5 mt-2">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex items-center justify-center gap-12 mb-3">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
            Gallery
          </h2>
        </div>

        <Gallery>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {images.map((img, i) => (
              <Item
                key={i}
                original={img.src}
                thumbnail={img.src}
                width="1200"
                height="800"
                title={img.title}
              >
                {({ ref, open }) => (
                  <div
                    ref={ref}
                    onClick={open}
                    className="group relative flex h-48 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer"
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      className="absolute inset-0 object-cover object-center transition-transform duration-200 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 
                             (max-width: 1200px) 50vw, 
                             33vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                  </div>
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>
    </div>
  );
};

export default GallerySection;
