"use client";

import React from "react";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const GallerySection = () => {
  const images = [
    {
      src: "/images/gallery/mou-sing/mou-1.webp",
    },
    {
      src: "/images/gallery/mou-sing/mou-2.webp",
    },
    {
      src: "/images/gallery/mou-sing/mou-3.webp",
    },
    {
      src: "/images/gallery/mou-sing/mou-4.webp",
    },
    {
      src: "/images/gallery/mou-sing/mou-5.webp",
    },
    {
      src: "/images/gallery/mou-sing/mou-6.webp",
    },
    {
      src: "/images/gallery/mou-sing/mou-7.webp",
    },
    {
      src: "/images/gallery/mou-sing/mou-8.webp",
    },
    {
      src: "/images/gallery/mou-sing/mou-9.webp",
    },
    {
      src: "/images/gallery/mou-sing/mou-10.webp",
    },
    {
      src: "/images/gallery/mou-sing/mou-11.webp",
    },
    {
      src: "/images/gallery/mou-sing/mou-12.webp",
    },
    {
      src: "/images/gallery/corporate/corporate-1.png",
    },
    {
      src: "/images/gallery/corporate/corporate-2.webp",
    },
    {
      src: "/images/gallery/others/Senior-Festival-1.webp",
    },
    {
      src: "/images/gallery/others/Senior-Festival-2.webp",
    },
    {
      src: "/images/gallery/others/Senior-Festival-3.webp",
    },
    {
      src: "/images/gallery/others/Senior-Festival-4.webp",
    },
    {
      src: "/images/gallery/others/probin-1.webp",
    },
    {
      src: "/images/gallery/others/probin-2.webp",
    },
    {
      src: "/images/gallery/others/probin-3.webp",
    },
    {
      src: "/images/gallery/others/probin-4.webp",
    },
    {
      src: "/images/gallery/others/1.webp",
    },
    {
      src: "/images/gallery/others/2.webp",
    },
    {
      src: "/images/gallery/others/3.webp",
    },
    {
      src: "/images/gallery/others/4.webp",
    },
    {
      src: "/images/gallery/others/5.webp",
    },
    {
      src: "/images/gallery/others/6.webp",
    },
    {
      src: "/images/gallery/others/7.webp",
    },
    {
      src: "/images/gallery/others/8.webp",
    },
    {
      src: "/images/gallery/others/9.webp",
    },
    {
      src: "/images/gallery/others/10.webp",
    },
    {
      src: "/images/gallery/others/11.webp",
    },
    {
      src: "/images/gallery/others/12.webp",
    },
    {
      src: "/images/gallery/others/13.webp",
    },
    {
      src: "/images/gallery/others/14.webp",
    },
    {
      src: "/images/gallery/others/15.webp",
    },
    {
      src: "/images/gallery/milon-mela/1.webp",
    },
    {
      src: "/images/gallery/milon-mela/2.webp",
    },
    {
      src: "/images/gallery/milon-mela/3.webp",
    },
    {
      src: "/images/gallery/milon-mela/4.webp",
    },
    {
      src: "/images/gallery/milon-mela/5.webp",
    },
    {
      src: "/images/gallery/milon-mela/6.webp",
    },
  ];

  return (
    <div className="custom-container bg-white dark:bg-gray-800 mb-5 mt-2">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex items-center justify-center gap-12 mb-3">
          <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white my-3">
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
                // title={img.title}
              >
                {({ ref, open }) => (
                  <div
                    ref={ref}
                    onClick={open}
                    className="group relative flex h-48 md:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg cursor-pointer"
                  >
                    <Image
                      src={img.src}
                      alt={"Gallery Image"}
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
