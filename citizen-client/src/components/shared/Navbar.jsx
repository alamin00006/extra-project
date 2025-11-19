"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { MdOutlineDehaze } from "react-icons/md";

import { isLoggedIn } from "@/services/auth.service";
import { authKey } from "@/constants/storageKey";
import { removeUserInfo } from "@/helpers/utils/local-storage";
import DropdownUser from "./DropdownUser";
import { useGetUserQuery } from "@/redux/api/authApi";
import { cardData } from "@/helpers/utils/serviceData";
import useUserData from "@/hooks/useUserData";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isRegisOpen, setIsRegisOpen] = useState(false);

  const [menuItems, setMenuItems] = useState([]);

  // State to track whether the navbar should have the animation
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const [isUser, setIsUser] = useState(false);

  // Ref for the dropdown
  const dropdownRef = useRef(null);

  // Check if the user is logged in
  const userLoggedIn = isLoggedIn();

  useEffect(() => {
    if (userLoggedIn) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [userLoggedIn]);

  // Get User
  const {
    userData,
    error: userError,
    loading: isLoadingUser,
  } = useUserData(isUser);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
        setIsServiceOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsDropdownOpen(false);
    setIsServiceOpen(false);
  }, [pathname]);

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
    setIsDropdownOpen(false);
    window.location.reload();
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsDropdownOpen(false);
    setIsServiceOpen(false);
  };

  // Handle link click for mobile
  const handleMobileLinkClick = () => {
    closeMobileMenu();
  };

  // Toggle service dropdown for mobile
  const toggleServiceDropdown = () => {
    setIsServiceOpen(!isServiceOpen);
  };
  const toggleRegisDropdown = () => {
    setIsRegisOpen(!isRegisOpen);
  };
  const toggleBlogDropdown = () => {
    setIsBlogOpen(!isBlogOpen);
  };

  // Toggle main dropdown for mobile
  const toggleMainDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`bg-white md:pt-2 md:pb-3 sm:pt-3 sm:pb-3 shadow-md ${
        isInitialLoad || hasScrolled ? "sticky-navbar" : ""
      }`}
    >
      <div className="custom-container">
        <div className="md:flex justify-between flex-none">
          <div className="col-span-2 relative">
            <div className="dropdown flex justify-between" ref={dropdownRef}>
              <div className="md:hidden sm:block md:ps-0 sm:ps-2">
                <Link href="/" onClick={handleMobileLinkClick}>
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
                onClick={toggleMainDropdown}
              >
                <div className="bg-[#39bcbc] py-2.5 px-3 rounded">
                  <MdOutlineDehaze className="text-white text-2xl" />
                </div>
              </div>
              {/* For Mobile Screen */}
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content text-base z-[1] mt-5 w-screen pb-8 shadow bg-white text-black dark:bg-white dark:text-black ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
              >
                <li className="custom-navbar">
                  <Link
                    href="/"
                    className={`no-underline text-black text-[16px] ${
                      pathname === "/" ? "text-[#39bcbc]" : "text-black"
                    }`}
                    onClick={handleMobileLinkClick}
                  >
                    Home
                  </Link>
                </li>

                <li tabIndex={0} className="dropdown group">
                  <div
                    className={`no-underline dropdown_text text-[16px]`}
                    onClick={toggleServiceDropdown}
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
                    className={`p-2 bg-white dark:bg-gray-800 dark:text-black ${
                      isServiceOpen ? "block" : "hidden"
                    }`}
                  >
                    {cardData.map((item) => (
                      <li key={item.id} className="dropdown_link">
                        <Link
                          href={`/service-details/${item.id}`}
                          className={`uppercase no-underline text-black ${
                            pathname === `/service-details/${item.id}`
                              ? "text-[#39bcbc]"
                              : "text-black"
                          }`}
                          onClick={handleMobileLinkClick}
                        >
                          {item.enTitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <br />

                <li tabIndex={0} className="dropdown group pr-5 cursor-pointer">
                  <div
                    className={`text-black hover:text-[#39bcbc] no-underline dropdown_text text-[16px] pb-2`}
                    onClick={toggleBlogDropdown}
                  >
                    Blog
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
                    className={`p-2 bg-white dark:bg-gray-800 dark:text-black ${
                      isBlogOpen ? "block" : "hidden"
                    }`}
                  >
                    <li className="dropdown_link my-1 py-1 hover:border-l-4 border-l-pink-600">
                      <Link
                        href="/blogs"
                        className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-sm`}
                        onClick={handleMobileLinkClick}
                      >
                        Blog
                      </Link>
                    </li>
                    <li className="dropdown_link my-1 py-1 hover:border-l-4 border-l-pink-600">
                      <Link
                        href="/gallery"
                        className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-sm`}
                        onClick={handleMobileLinkClick}
                      >
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </li>

                <li
                  tabIndex={0}
                  className="dropdown group pr-5 cursor-pointer d-block -mb-3"
                >
                  <div
                    className={`text-black hover:text-[#39bcbc] no-underline dropdown_text text-[16px] mt-1`}
                    onClick={toggleRegisDropdown}
                  >
                    Registration
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
                    className={`p-2 bg-white dark:bg-gray-800 dark:text-black ${
                      isRegisOpen ? "block" : "hidden"
                    }`}
                  >
                    <li className="dropdown_link my-1 py-1 hover:border-l-4 border-l-pink-600">
                      <Link
                        href={`/doctors`}
                        className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-sm`}
                        onClick={handleMobileLinkClick}
                      >
                        Book an Appointment
                      </Link>
                    </li>
                  </ul>
                </li>
                <br />
                <li
                  tabIndex={0}
                  className="dropdown group pr-5 cursor-pointer custom-navbar"
                >
                  <div
                    className={`text-black hover:text-[#39bcbc] no-underline dropdown_text text-[16px] pb-3 `}
                  >
                    About Us
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
                  <ul className="p-0 md:-ml-7 sm:-ml-0 bg-white hidden shadow-lg group-hover:block absolute z-10 w-[200px] dark:bg-gray-800 dark:text-black">
                    <li className="dropdown_link text-sm my-1 border-b py-1 hover:border-l-4 border-l-pink-600">
                      <Link
                        href={`/about-us`}
                        className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-[16px]`}
                        onClick={handleMobileLinkClick}
                      >
                        Who We Are
                      </Link>
                    </li>
                    <li className="dropdown_link text-sm my-1 border-b py-1 hover:border-l-4 border-l-pink-600">
                      <Link
                        href={`/company-profile`}
                        className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-[16px]`}
                        onClick={handleMobileLinkClick}
                      >
                        Company Profile
                      </Link>
                    </li>
                    <li className="dropdown_link text-sm my-1 border-b py-1 hover:border-l-4 border-l-pink-600">
                      <Link
                        href={`/mission-vision`}
                        className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-[16px]`}
                        onClick={handleMobileLinkClick}
                      >
                        Mission & Vission
                      </Link>
                    </li>
                    <li className="dropdown_link text-sm my-1 border-b py-1 hover:border-l-4 border-l-pink-600">
                      <Link
                        href={`/career`}
                        className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-[16px]`}
                        onClick={handleMobileLinkClick}
                      >
                        Careers
                      </Link>
                    </li>
                    <li className="dropdown_link text-sm my-1 border-b py-1 hover:border-l-4 border-l-pink-600">
                      <Link
                        href={`/terms-condition`}
                        className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-[16px]`}
                        onClick={handleMobileLinkClick}
                      >
                        Terms & Condition
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="custom-navbar">
                  {!isUser ? (
                    <Link
                      href="/Login"
                      className={`uppercase no-underline ${
                        pathname === "/Login" ? "text-[#39bcbc]" : "text-black"
                      }`}
                      onClick={handleMobileLinkClick}
                    >
                      Login
                    </Link>
                  ) : (
                    <Link
                      href="/profile"
                      className={`uppercase no-underline ${
                        pathname === "/profile"
                          ? "text-[#39bcbc]"
                          : "text-black"
                      }`}
                      onClick={handleMobileLinkClick}
                    >
                      My Profile
                    </Link>
                  )}
                </li>
                {isUser && (
                  <li
                    onClick={() => {
                      logOut();
                      handleMobileLinkClick();
                    }}
                  >
                    <Link
                      href="#"
                      className={`uppercase no-underline text-black`}
                    >
                      Logout
                    </Link>
                  </li>
                )}
              </ul>
            </div>
            <div className="md:p-0 md:w-[300px] sm:w-[200px] md:block sm:hidden mt-2.5">
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
          <div className="navbar-center hidden lg:flex col-span-10 mt-4 z-10">
            <ul className="custom_menu menu-horizontal text-black">
              {/* ... Desktop menu items remain the same ... */}
              <li className="pr-5 custom-navbar">
                <Link
                  href="/"
                  className={`no-underline text-[16px] ${
                    pathname === "/" ? "text-[#39bcbc]" : "text-black"
                  }`}
                >
                  Home
                </Link>
              </li>

              <li className="dropdown group pr-5 cursor-pointer">
                <div
                  className={`text-black hover:text-[#39bcbc] no-underline dropdown_text text-[16px] pb-3`}
                >
                  Our packages
                </div>
                <ul className="p-0 bg-white hidden shadow-lg group-hover:block absolute w-[300px] -ml-5 dark:bg-gray-800 dark:text-black">
                  {cardData.map((item) => (
                    <li
                      key={item.id}
                      className="dropdown_link text-sm my-1 border-b py-1 hover:border-l-4 border-l-pink-600"
                    >
                      <Link
                        href={`/service-details/${item.id}`}
                        className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-[16px]`}
                      >
                        {item.enTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li tabIndex={0} className="dropdown group pr-5 cursor-pointer">
                <div
                  className={`text-black hover:text-[#39bcbc] no-underline dropdown_text text-[16px] pb-3`}
                >
                  Blog
                </div>
                <ul className="p-0 -ml-7 bg-white hidden shadow-lg group-hover:block absolute z-10 w-[200px] dark:bg-gray-800 dark:text-black">
                  <li className="dropdown_link my-1 py-1 hover:border-l-4 border-l-pink-600">
                    <Link
                      href={`/blogs`}
                      className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-[16px]`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="dropdown_link my-1 py-1 hover:border-l-4 border-l-pink-600">
                    <Link
                      href={`/gallery`}
                      className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-[16px]`}
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </li>

              <li tabIndex={0} className="dropdown group pr-5 cursor-pointer">
                <div
                  className={`text-black hover:text-[#39bcbc] no-underline dropdown_text text-[16px] pb-3`}
                >
                  Registration
                </div>
                <ul className="p-0 -ml-7 bg-white hidden shadow-lg group-hover:block absolute z-10 w-[200px] dark:bg-gray-800 dark:text-black">
                  <li className="dropdown_link my-1 py-1 hover:border-l-4 border-l-pink-600">
                    <Link
                      href={`/doctors`}
                      className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-[16px]`}
                    >
                      Book an Appointment
                    </Link>
                  </li>
                </ul>
              </li>
              <li tabIndex={0} className="dropdown group pr-5 cursor-pointer">
                <div
                  className={`text-black hover:text-[#39bcbc] no-underline dropdown_text text-[16px] pb-3`}
                >
                  About Us
                </div>
                <ul className="p-0 -ml-7 bg-white hidden shadow-lg group-hover:block absolute z-10 w-[200px] dark:bg-gray-800 dark:text-black">
                  <li className="dropdown_link text-sm my-1 border-b py-1 hover:border-l-4 border-l-pink-600">
                    <Link
                      href={`/about-us`}
                      className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-[16px]`}
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li className="dropdown_link text-sm my-1 border-b py-1 hover:border-l-4 border-l-pink-600">
                    <Link
                      href={`/company-profile`}
                      className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-[16px]`}
                    >
                      Company Profile
                    </Link>
                  </li>
                  <li className="dropdown_link text-sm my-1 border-b py-1 hover:border-l-4 border-l-pink-600">
                    <Link
                      href={`/mission-vision`}
                      className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-[16px]`}
                    >
                      Mission & Vission
                    </Link>
                  </li>
                  <li className="dropdown_link text-sm my-1 border-b py-1 hover:border-l-4 border-l-pink-600">
                    <Link
                      href={`/career`}
                      className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-[16px]`}
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="dropdown_link text-sm my-1 border-b py-1 hover:border-l-4 border-l-pink-600">
                    <Link
                      href={`/terms-condition`}
                      className={`no-underline text-black dark:hover:text-gray-200 px-2 py-1 text-[16px]`}
                    >
                      Terms & Condition
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                {isUser ? (
                  <DropdownUser userData={userData} />
                ) : (
                  <Link
                    href="/login"
                    className={`rounded text-[16px] no-underline px-3 py-2.5 bg-[#39bcbc] hover:bg-pink-600 text-white hover:text-white`}
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
