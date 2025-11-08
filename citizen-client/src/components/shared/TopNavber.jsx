import Link from "next/link";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const TopNavbar = () => {
  return (
    <nav className="bg-pink-600">
      <div className="custom-container flex flex-wrap items-center justify-between">
        <div className="flex items-center text-white border-base-100 px-2 border-r border-l py-2.5 gap-1 sm:hidden md:flex">
          <IoCallOutline size={20} />
          <span className="text-sm">09-613166166</span>
        </div>
        <div className="flex items-center text-white border-base-100 px-2 py-2.5 gap-1 md:hidden sm:flex">
          <IoCallOutline size={20} />
          <span className="text-sm">09-613166166</span>
        </div>
        <div className="flex space-x-2">
          <Link
            href="https://www.facebook.com/Citizencarebd?mibextid=ZbWKwL"
            className="border-base-100 px-3 border-l py-3 bg-pink-600 hover:bg-pink-600"
            target="_blank"
          >
            <FaFacebook
              className="text-white hover:text-[hoverColor]  "
              size={16}
            />
          </Link>
          <Link
            href="https://www.youtube.com/@Citizencarebd"
            target="_blank"
            className="border-base-100 px-3  border-l py-3 bg-pink-600 hover:bg-pink-600"
          >
            <FaYoutube
              className="text-white hover:text-[hoverColor] "
              size={16}
            />
          </Link>
          {/* <Link
            href="https://bd.linkedin.com/company/citizen-care-bangladesh-ccb"
            target="_blank"
            className="border-base-100 px-3 border-l py-3 bg-pink-600 hover:bg-pink-600"
          >
            <FaLinkedin
              className="text-white hover:text-[hoverColor]1"
              size={16}
            />
          </Link> */}
          <Link
            href="#"
            target="_blank"
            className="border-base-100 px-3 border-r border-l py-3 bg-pink-600 hover:bg-pink-600"
          >
            <FaInstagram
              className="text-white hover:text-[hoverColor]"
              size={16}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
