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
    <nav className="bg-[#39bcbc]">
      <div className="custom-container flex flex-wrap items-center justify-between">
        <div className="flex items-center text-white border-base-100 px-2 border-r border-l py-2.5">
          <FaEnvelope className="mr-2" />
          <span>citizencarebd@gmail.com</span>
        </div>
        <div className="flex space-x-2">
          <Link
            href="https://www.facebook.com/Citizencarebd?mibextid=ZbWKwL"
            className="border-base-100 px-3 border-l py-3 bg-[#39bcbc] hover:bg-[#418989]"
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
            className="border-base-100 px-3  border-l py-3 bg-[#39bcbc] hover:bg-[#418989]"
          >
            <FaYoutube
              className="text-white hover:text-[hoverColor] "
              size={16}
            />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="border-base-100 px-3 border-l py-3 bg-[#39bcbc] hover:bg-[#418989]"
          >
            <FaLinkedin
              className="text-white hover:text-[hoverColor]1"
              size={16}
            />
          </Link>
          <Link
            href="#"
            target="_blank"
            className="border-base-100 px-3 border-r border-l py-3 bg-[#39bcbc] hover:bg-[#418989]"
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
