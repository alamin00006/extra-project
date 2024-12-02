"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineDehaze } from "react-icons/md";

import { isLoggedIn } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { removeUserInfo } from "@/helpers/utils/local-storage";
import DropdownUser from "./DropdownUser";
import { useGetUserQuery } from "@/redux/api/authApi";

const Navbar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const [menuItems, setMenuItems] = useState([]);

  // State to track whether the navbar should have the animation
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const [isUser, setIsUser] = useState(false);
  // Check if the user is logged in
  const userLoggedIn = isLoggedIn();

  const {
    data: userData,
    error: userError,
    isLoading: userIsLoading,
  } = useGetUserQuery();

  useEffect(() => {
    if (userLoggedIn) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [userLoggedIn]);

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    setIsInitialLoad(false);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fetch JSON data on component mount
  useEffect(() => {
    fetch("/menuItems.json")
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error fetching menu items:", error));
  }, []);

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/");
    // setIsDropdownOpen(false);
  };

  return (
    <div
      className={`bg-[#242323] md:pt-2 md:pb-3 sm:pt-3 sm:pb-3${
        isInitialLoad || hasScrolled ? "sticky-navbar" : ""
      }`}
    >
      <div className="custom-container">
        <div className="md:flex justify-between shadow-md flex-none  ">
          <div className="col-span-2 custom-navbar relative">
            <div className="dropdown flex justify-between">
              <div className="md:hidden sm:block md:ps-0 sm:ps-2 ">
                <Link href="/">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={300}
                    height={20}
                    className="md:p-0 md:w-[300px] sm:w-[230px]"
                  />
                </Link>
              </div>
              <div
                tabIndex={0}
                role="button"
                className="md:hidden sm:block relative md:pr-0 sm:pr-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="bg-[#39bcbc] py-2.5 px-3 rounded  ">
                  <MdOutlineDehaze className="text-white text-2xl" />
                </div>
              </div>
              {/* For Mobile Screen */}
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content text-base z-[1] mt-5 w-screen  pb-8 shadow uppercase bg-white text-black dark:bg-white dark:text-black ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link
                    href="/"
                    className={` uppercase no-underline text-black ${
                      pathname === "/" ? "text-[#39bcbc]" : "text-black"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className={` uppercase no-underline  ${
                      pathname === "/about-us" ? "text-[#39bcbc]" : "text-black"
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li tabIndex={0} className="dropdown group">
                  <div
                    className={`uppercase no-underline`}
                    onClick={() => setIsServiceOpen(!isServiceOpen)}
                  >
                    Services
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 inline-block ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                  <ul
                    className={`p-2 bg-white dark:bg-gray-800 dark:text-white dropdown_link  ${
                      isServiceOpen ? "block" : "hidden"
                    }`}
                  >
                    {menuItems.map((item) => (
                      <li key={item.id}>
                        <Link
                          href={`/service-details/${item.id}`}
                          className={` uppercase no-underline  ${
                            pathname === `/service-details/${item.id}`
                              ? "text-[#39bcbc]"
                              : "text-black"
                          }`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <br />

                <li>
                  <Link
                    href="/blogs"
                    className={` uppercase no-underline  ${
                      pathname === "/blogs" ? "text-[#39bcbc]" : "text-black"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  {!isUser ? (
                    <Link
                      href="/Login"
                      className={` uppercase no-underline  ${
                        pathname === "/Login" ? "text-[#39bcbc]" : "text-black"
                      }`}
                    >
                      Login
                    </Link>
                  ) : (
                    <Link
                      href="/profile"
                      className={` uppercase no-underline  ${
                        pathname === "/profile"
                          ? "text-[#39bcbc]"
                          : "text-black"
                      }`}
                    >
                      My Profile
                    </Link>
                  )}
                </li>
                {isUser && (
                  <li onClick={logOut}>
                    <Link
                      href="#"
                      className={` uppercase no-underline  text-black`}
                    >
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div
              className=" md:p-0 md:w-[300px] sm:w-[200px] md:block sm:hidden 
            mt-2.5"
            >
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={300}
                  height={20}
                  className="md:w-full sm:w-full"
                />
              </Link>
            </div>
          </div>
          {/* For Desktop */}
          <div className="navbar-center hidden lg:flex col-span-10 mt-4 custom-navbar ">
            <ul className="custom_menu menu-horizontal px-10 text-white">
              <li className="pr-4">
                <Link
                  href="/"
                  className={` uppercase no-underline  ${
                    pathname === "/" ? "text-[#39bcbc]" : "text-white"
                  }`}
                >
                  Home
                </Link>
              </li>

              <li tabIndex={0} className="dropdown group pr-4 cursor-pointer">
                <div
                  className={`text-white uppercase no-underline dropdown_text `}
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline-block ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <ul className="p-2 mt-2 bg-white hidden dropdown_link group-hover:block absolute z-10 w-[300px] dark:bg-gray-800 dark:text-white">
                  {menuItems.map((item) => (
                    <li
                      key={item.id}
                      className=" hover:bg-[#39bcbc] hover:text-white text-sm my-1"
                    >
                      <Link
                        href={`/service-details/${item.id}`}
                        className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="pr-4">
                <Link
                  href="/blogs"
                  className={` uppercase no-underline  ${
                    pathname === "/blogs" ? "text-[#39bcbc]" : "text-white"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li className="pr-4">
                <Link
                  href="/company-profile"
                  className={`text-white uppercase no-underline hover:text-[#2b7c7c] ${
                    pathname === "/blog"
                      ? "text-blue-500"
                      : "hover:text-blue-500 dark:hover:text-blue-300"
                  }`}
                >
                  Company Profile
                </Link>
              </li>

              <li className="pr-4">
                <Link
                  href="/about-us"
                  className={` uppercase no-underline  ${
                    pathname === "/about-us" ? "text-[#39bcbc]" : "text-white"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                {isUser ? (
                  <DropdownUser userData={userData} />
                ) : (
                  <Link
                    href="/login"
                    className={` rounded text-white uppercase no-underline px-3 py-2.5 hover:text-white ${
                      pathname === "/login"
                        ? "bg-[#39bcbc] text-white"
                        : "bg-[#39bcbc] text-white"
                    }`}
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
