"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaLink,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
import { TbMessage } from "react-icons/tb";

const Footer = () => {
  const [isSocial, setSocial] = useState(false);

  return (
    <footer className="shadow-md">
      <div className="bg-[#e8ffff] text-[#565656] py-8 relative">
        {/* Watermark */}
        <div
          className="absolute top-12 left-48 w-full h-full opacity-20"
          style={{
            backgroundImage: "url('/images/logo.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            pointerEvents: "none",
            width:"1000px"
          }}
        ></div>

        <div className="custom-container mx-auto md:px-0 sm:px-5 flex flex-wrap justify-between items-start relative z-10">
          {/* Left Section */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={350}
              height={350}
              priority
            />

            <p className="mt-4">
              We are innovative and passionate about the work we do.
            </p>
          </div>

          {/* Middle Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Citizen Care Bangladesh</h2>
            <ul className="space-y-2 text-[15px] p-0">
              <li className="flex items-start gap-2">
                <MdOutlineLocationOn size={20} />
                <span>
                  Anamika Terrace, 32/A, Road-02, <br />
                  Dhanmondi, Dhaka-1205, Bangladesh
                </span>
              </li>

              <li className="flex items-center gap-2">
                <IoCallOutline size={20} />
                <span>
                  <span className="font-bold">Phone:</span> 09-613166166 
                </span>
              </li>

              <li className="flex items-center gap-2">
                <MdOutlineEmail size={20} />
                <span>
                  <span className="font-bold">Email:</span>{" "}
                  <a
                    href="mailto:citizencarebd@gmail.com"
                    className="text-[#565656] hover:underline"
                  >
                    citizencarebd@gmail.com
                  </a>
                </span>
              </li>

              <li className="flex items-center gap-2">
                <FaLink size={20} />
                <span>
                  <span className="font-bold">Website:</span>{" "}
                  <a
                    href="https://www.citizencarebd.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#565656] hover:underline"
                  >
                    www.citizencarebd.com
                  </a>
                </span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <Link
                href="https://www.facebook.com/Citizencarebd?mibextid=ZbWKwL"
                aria-label="Facebook"
                className="p-2 rounded-full bg-white text-pink-600 hover:text-[#39bcbc] transition"
                target="_blank"
              >
                <FaFacebookF size={20} />
              </Link>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 rounded-full bg-white text-pink-600 hover:text-[#39bcbc] transition"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://bd.linkedin.com/company/citizen-care-bangladesh-ccb"
                target="_blank"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-white text-pink-600 hover:text-[#39bcbc] transition"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 rounded-full bg-white text-pink-600 hover:text-[#39bcbc] transition"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Right Section */}

          <div className=" md:mt-0 sm:mt-5  ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14609.418450867022!2d90.36257800319694!3d23.73473070889417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b8fbbd6745%3A0xce196d754cb46b35!2sCitizencare%20Bangladesh!5e0!3m2!1sen!2sbd!4v1738339417866!5m2!1sen!2sbd"
              className=" h-[200px] rounded"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Social Media Toggle */}
        <div className="flex justify-end overflow-hidden fixed bottom-6 right-6">
          <div>
            {/* Social Media Links */}
            <div
              className={`transition-all duration-500 transform ${
                isSocial
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-20 opacity-0 scale-90"
              } flex flex-col items-center `}
            >
              <a
                href="https://wa.me/8801894671875"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/whastapp.png"
                  alt="WhatsApp"
                  width={43}
                  height={43}
                />
              </a>
              <a
                href="https://www.facebook.com/Citizencarebd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/messenger.png"
                  alt="Messenger"
                  width={54}
                  height={54}
                />
              </a>
            </div>

            {/* Toggle Button */}
            <button
              onClick={() => setSocial(!isSocial)}
              className={`flex items-center justify-center p-2.5 mt-2 rounded-full bg-[#39bcbc] hover:bg-[#39bcbc] text-white transition-transform duration-300  ${
                isSocial ? "rotate-180" : "rotate-0"
              }`}
            >
              {/* Hamburger Icon */}
              {!isSocial && <TbMessage size={35} />}

              {/* Close Icon */}
              {isSocial && (
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm bg-[#39bcbc] p-3 text-white">
        © 2025 Citizen Care BD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
