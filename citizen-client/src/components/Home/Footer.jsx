import Image from "next/image";
import React from "react";
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
  return (
    <footer className="shadow-md">
      <div className="bg-[#e8ffff] text-[#565656] py-8 relative  ">
        {/* Watermark */}
        {/* <div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        style={{ backgroundImage: "url('/images/favicon.ico')" }}
      ></div> */}

        <div className="custom-container mx-auto flex flex-wrap justify-between items-start relative z-10">
          {/* Left Section */}
          <div>
            {" "}
            <Image src="/images/logo.png" alt="Logo" width={350} height={350} />
            <p>We are innovative and passionate about the work we do.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Citezen Care Bangladesh</h2>
            <ul className="space-y-2 text-[15px] p-0">
              <li className="flex ">
                {" "}
                <MdOutlineLocationOn size={20} />
                Anamika Terrace, 32/A, Road-02, <br />
                Dhanmondi, Dhaka-1205, Bangladesh
              </li>

              <li className="flex gap-1">
                <IoCallOutline size={20} />
                <span className="font-bold">Phone:</span> 02-41061616
              </li>
              <li className="flex gap-1">
                <MdOutlineEmail size={20} />
                <span className="font-bold">Email:</span>{" "}
                <a href="citizencarebd@gmail.com" className="text-[#565656]">
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
                  className=" text-[#565656]"
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
      </div>
      {/* Footer Bottom */}
      <div className="text-center text-sm bg-[#39bcbc] p-3 text-white">
        © 2023 Citizen Care BD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

// import Image from "next/image";
// import Link from "next/link";
// import {
//   FaFacebookF,
//   FaYoutube,
//   FaLinkedinIn,
//   FaInstagram,
//   FaEnvelope,
//   FaMapMarkerAlt,
// } from "react-icons/fa";
// import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

// const Footer = () => {
//   return (
//     <footer className="bg-[#2a7d7d] text-white py-10">
//       <div className="custom-container px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {/* Logo and Description */}
//         <div>
//           <Image src="/images/logo.png" alt="Logo" width={200} height={20} />
//           <p className="text-sm mb-4 mt-2">
//             We are innovative and passionate about the work we do.
//           </p>
//           <div className="flex space-x-4">
//             <Link
//               href="https://www.facebook.com/Citizencarebd?mibextid=ZbWKwL"
//               className="p-2 bg-[#489393] hover:bg-[#7ab0b0bd] rounded"
//               target="_blank"
//             >
//               <FaFacebookF className="text-white" />
//             </Link>
//             <Link
//               href="https://www.youtube.com/@Citizencarebd"
//               className="p-2 bg-[#489393] hover:bg-[#7ab0b0bd] rounded"
//               target="_blank"
//             >
//               <FaYoutube className="text-white" />
//             </Link>
//             <Link
//               href="#"
//               className="p-2 bg-[#489393] hover:bg-[#7ab0b0bd] rounded"
//             >
//               <FaLinkedinIn className="text-white" />
//             </Link>
//             <Link
//               href="#"
//               className="p-2 bg-[#489393] hover:bg-[#7ab0b0bd] rounded"
//             >
//               <FaInstagram className="text-white" />
//             </Link>
//           </div>
//         </div>

//         {/* Courses */}
//         <div>
//           <h3 className="text-lg font-bold mb-4">Explore</h3>
//           <ul className="space-y-2 text-sm">
//             <li className="flex items-center">
//               <MdKeyboardArrowRight className="text-2xl" />
//               <Link
//                 href="/about-us"
//                 className="hover:underline text-white no-underline text-base"
//               >
//                 About Us
//               </Link>
//             </li>
//             <li className="flex items-center">
//               <MdKeyboardArrowRight className="text-2xl" />

//               <Link
//                 href="/service-details/10-takai-shastho-sheba"
//                 className="hover:underline text-white no-underline text-base"
//               >
//                 Our Services
//               </Link>
//             </li>

//             <li className="flex items-center">
//               <MdKeyboardArrowRight className="text-2xl" />
//               <a
//                 href="/contact-us"
//                 className="hover:underline text-white no-underline text-base"
//               >
//                 Contact Us
//               </a>
//             </li>
//             <li className="flex items-center">
//               <MdKeyboardArrowRight className="text-2xl" />
//               <Link
//                 href="/blogs"
//                 className="hover:underline text-white no-underline text-base"
//               >
//                 Blogs
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Recent Posts */}
//         <div>
//           <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
//           <ul className="space-y-4 text-sm">
//             <li className="flex items-center gap-2">
//               <MdArrowForward className="text-white " size={20} />
//               <div>
//                 <div>
//                   <span className=" text-white text-xs">December 12, 2021</span>
//                 </div>
//                 <div>
//                   <Link
//                     href="/service-details/10-takai-shastho-sheba"
//                     className="hover:underline text-white text-base no-underline"
//                   >
//                     10 Taka Shastho Seba
//                   </Link>
//                 </div>
//               </div>
//             </li>
//             <li className="flex items-center gap-2">
//               <MdArrowForward className="text-white " size={20} />
//               <div>
//                 <div>
//                   <span className="text-white text-xs">December 12, 2021</span>
//                 </div>
//                 <div>
//                   <a
//                     href="#"
//                     className="hover:underline text-white text-base no-underline"
//                   >
//                     Skill Provider Service
//                   </a>
//                 </div>
//               </div>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Us */}
//         <div>
//           <h3 className="text-lg font-bold mb-4">Contact Us</h3>
//           <ul className="space-y-2 text-sm">
//             <li className="flex items-center space-x-2">
//               <FaEnvelope />
//               <span>citizencarebd@gmail.com</span>
//             </li>
//             <li className="flex items-start space-x-2">
//               <FaMapMarkerAlt className="mt-1" />
//               <span>Anamika Terrace, 32/A, Road-02, Dhanmondi, Dhaka-1205</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="text-center text-xs text-gray-300 mt-8">
//         © 2023 Citizen Care BD. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
