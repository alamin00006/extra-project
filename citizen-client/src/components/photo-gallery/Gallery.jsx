"use client";

import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const GallerySection = () => {
  const images = [
    {
      src: "/images/gallery/image-1.jpg",
    },
    {
      src: "/images/gallery/image-2.jpg",
    },
    {
      src: "/images/gallery/image-3.jpg",
    },
    {
      src: "/images/gallery/image-4.jpg",
    },
    {
      src: "/images/gallery/Senior Festival 1.webp",
    },
    {
      src: "/images/gallery/Senior Festival 2.webp",
    },
    {
      src: "/images/gallery/Senior Festival 3.webp",
    },
    {
      src: "/images/gallery/Senior Festival 4.webp",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 mb-5">
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
                    <img
                      src={img.src}
                      alt={img.title}
                      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                      {img.title}
                    </span>
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
