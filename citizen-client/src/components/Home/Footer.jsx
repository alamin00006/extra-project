"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaLink,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { TbLocation } from "react-icons/tb";

const Footer = () => {
  const [isSocial, setSocial] = useState(false);

  return (
    <footer className="shadow-md">
      <div className="bg-[#e8ffff] text-[#565656] py-8 relative">
        {/* Watermark */}
        <div
          className="absolute top-5 left-0 w-full h-full opacity-20"
          style={{
            backgroundImage: "url('/images/logo.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain", // Ensure it's contained in the space
            backgroundPosition: "center", // Adjust position if needed
            pointerEvents: "none", // Make sure it doesn't block interactions
          }}
        ></div>

        <div className="custom-container mx-auto flex flex-wrap justify-between items-start relative z-10 ">
          {/* Left Section */}
          <div>
            <Image src="/images/logo.png" alt="Logo" width={350} height={350} />

            <p>We are innovative and passionate about the work we do.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Citezen Care Bangladesh</h2>
            <ul className="space-y-2 text-[15px] p-0">
              <li className="flex">
                <MdOutlineLocationOn size={20} />
                Anamika Terrace, 32/A, Road-02, <br />
                Dhanmondi, Dhaka-1205, Bangladesh
              </li>

              <li className="flex gap-1">
                <IoCallOutline size={20} /> 02-41061616
                <span className="font-bold">Phone:</span> 02-41061616
              </li>
              <li className="flex gap-1">
                <MdOutlineEmail size={20} />
                <span className="font-bold">Email:</span>{" "}
                <a
                  href="mailto:citizencarebd@gmail.com"
                  className="text-[#565656]"
                >
                  citizencarebd@gmail.com
                </a>
              </li>
              <li className="flex gap-1">
                <FaLink size={20} />
                <span className="font-bold ">Website:</span>{" "}
                <a
                  href="https://www.citizencarebd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#565656]"
                >
                  www.citizencarebd.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-white text-pink-600 hover:bg-gray-100 transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white text-pink-600 hover:bg-gray-100 transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white text-pink-600 hover:bg-gray-100 transition"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white text-pink-600 hover:bg-gray-100 transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center space-y-4">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58435.677869841085!2d90.378612!3d23.739181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b93af48652eb%3A0xee9ace2160af5673!2sAnamika%20Terrace!5e0!3m2!1sen!2sbd!4v1730666893904!5m2!1sen!2sbd"
                width="300"
                height="200"
                allowFullScreen
                loading="lazy"
                className="rounded shadow-md"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <div>
            {isSocial && (
              <>
                <div>
                  <a href="https://wa.me/+8801647647404" target="_blank">
                    <Image
                      src="/images/whastapp.png"
                      alt="Logo"
                      width={350}
                      height={350}
                      style={{ width: 60, height: 60 }}
                    />
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/+8801647647404" target="_blank">
                    <Image
                      src="/images/messenger.png"
                      alt="Logo"
                      width={350}
                      height={350}
                      style={{ width: 60, height: 60 }}
                    />
                  </a>
                </div>
              </>
            )}

            <div onClick={() => setSocial(!isSocial)}>
              <label className="btn btn-circle swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg
                  className="swap-off fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                </svg>

                {/* close icon */}
                <svg
                  className="swap-on fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm bg-[#39bcbc] p-3 text-white">
        © 2023 Citizen Care BD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
