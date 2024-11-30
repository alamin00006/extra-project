import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#2a7d7d] text-white py-10">
      <div className="custom-container px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <Image src="/images/logo.png" alt="Logo" width={200} height={20} />
          <p className="text-sm mb-4 mt-2">
            We are innovative and passionate about the work we do.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/Citizencarebd?mibextid=ZbWKwL"
              className="p-2 bg-[#489393] hover:bg-[#7ab0b0bd] rounded"
              target="_blank"
            >
              <FaFacebookF className="text-white" />
            </Link>
            <Link
              href="https://www.youtube.com/@Citizencarebd"
              className="p-2 bg-[#489393] hover:bg-[#7ab0b0bd] rounded"
              target="_blank"
            >
              <FaYoutube className="text-white" />
            </Link>
            <Link
              href="#"
              className="p-2 bg-[#489393] hover:bg-[#7ab0b0bd] rounded"
            >
              <FaLinkedinIn className="text-white" />
            </Link>
            <Link
              href="#"
              className="p-2 bg-[#489393] hover:bg-[#7ab0b0bd] rounded"
            >
              <FaInstagram className="text-white" />
            </Link>
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-lg font-bold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <MdKeyboardArrowRight className="text-2xl" />
              <Link
                href="/about-us"
                className="hover:underline text-white no-underline text-base"
              >
                About Us
              </Link>
            </li>
            <li className="flex items-center">
              <MdKeyboardArrowRight className="text-2xl" />

              <Link
                href="/service-details/10-takai-shastho-sheba"
                className="hover:underline text-white no-underline text-base"
              >
                Our Services
              </Link>
            </li>

            <li className="flex items-center">
              <MdKeyboardArrowRight className="text-2xl" />
              <a
                href="/contact-us"
                className="hover:underline text-white no-underline text-base"
              >
                Contact Us
              </a>
            </li>
            <li className="flex items-center">
              <MdKeyboardArrowRight className="text-2xl" />
              <Link
                href="/blogs"
                className="hover:underline text-white no-underline text-base"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <MdArrowForward className="text-white " size={20} />
              <div>
                <div>
                  <span className=" text-white text-xs">December 12, 2021</span>
                </div>
                <div>
                  <Link
                    href="/service-details/10-takai-shastho-sheba"
                    className="hover:underline text-white text-base no-underline"
                  >
                    10 Taka Shastho Seba
                  </Link>
                </div>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <MdArrowForward className="text-white " size={20} />
              <div>
                <div>
                  <span className="text-white text-xs">December 12, 2021</span>
                </div>
                <div>
                  <a
                    href="#"
                    className="hover:underline text-white text-base no-underline"
                  >
                    Skill Provider Service
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <FaEnvelope />
              <span>citizencarebd@gmail.com</span>
            </li>
            <li className="flex items-start space-x-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>Anamika Terrace, 32/A, Road-02, Dhanmondi, Dhaka-1205</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-300 mt-8">
        © 2023 Citizen Care BD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
