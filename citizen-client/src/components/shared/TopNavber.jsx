import Link from "next/link";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const TopNavbar = () => {
  return (
    <nav className="bg-[#2b7c7c]">
      <div className=" custom-container flex flex-wrap items-center justify-between">
        <div className="flex items-center text-white border-[#418989] px-2 border-r border-l py-2.5">
          <FaEnvelope className="mr-2" />
          <span>citizencarebd@gmail.com</span>
        </div>
        <div className="flex space-x-2">
          <Link
            href="$&"
            className="border-[#418989] px-3 border-l py-3"
            target="_blank"
          >
            <FaFacebook
              className="text-white hover:text-[hoverColor]  "
              size={16}
            />
          </Link>
          <Link
            href="https://www.youtube.com"
            target="_blank"
            className="border-[#418989] px-3  border-l py-3"
          >
            <FaYoutube
              className="text-white hover:text-[hoverColor] "
              size={16}
            />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className="border-[#418989] px-3 border-l py-3"
          >
            <FaLinkedin
              className="text-white hover:text-[hoverColor]1"
              size={16}
            />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="border-[#418989] px-3 border-r border-l py-3"
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
