"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MdOutlineDehaze } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoChevronDownSharp } from "react-icons/io5";

const Navbar = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isProductsOpen, setProductsOpen] = useState(false);

  console.log(pathname);
  const [menuItems, setMenuItems] = useState([]);

  // State to track whether the navbar should have the animation
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

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

  return (
    <div
      className={`bg-[#242323]  ${
        isInitialLoad || hasScrolled ? "sticky-navbar" : ""
      }`}
    >
      <div className="custom-container ">
        <div className="navbar shadow-md flex flex-wrap items-center ">
          <div className="col-span-2 custom-navbar">
            <div className="dropdown md:hidden sm:block">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden absolute top-6"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="bg-[#39bcbc] py-2.5 px-3 rounded">
                  <MdOutlineDehaze className="text-white text-2xl" />
                </div>
              </div>
              {/* For Mobile Screen */}
              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content text-base z-[1] mt-20 w-screen  pb-8 shadow uppercase bg-white text-black dark:bg-white dark:text-black ${
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
                <li tabIndex={0} className="dropdown group">
                  <div
                    className={`uppercase no-underline`}
                    onClick={() => setProductsOpen(!isProductsOpen)}
                  >
                    Our Products
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
                      isProductsOpen ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      <Link
                        href={`/service-details/10-takai-shastho-sheba`}
                        className={` uppercase no-underline  ${
                          pathname === `/service-details/10-takai-shastho-sheba`
                            ? "text-[#39bcbc]"
                            : "text-black"
                        }`}
                      >
                        10-takai-shastho-sheba
                      </Link>
                    </li>
                  </ul>
                </li>
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
              </ul>
            </div>
            <div className="xs:p-2 md:p-0">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={300}
                  height={20}
                />
              </Link>
            </div>
          </div>
          {/* For Desktop */}
          <div className="navbar-center hidden lg:flex col-span-10 mt-2 custom-navbar">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link
                  href="/"
                  className={` uppercase no-underline  ${
                    pathname === "/" ? "text-[#39bcbc]" : "text-white"
                  }`}
                >
                  Home
                </Link>
              </li>

              <li tabIndex={0} className="dropdown group">
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
                <ul className="p-2 bg-white hidden dropdown_link group-hover:block absolute z-10 w-[300px] dark:bg-gray-800 dark:text-white">
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/service-details/${item.id}`}
                        className={`no-underline text-black hover:bg-[#39bcbc] hover:text-white dark:hover:text-gray-200`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li tabIndex={0} className="dropdown group">
                <div
                  className={`text-white uppercase no-underline dropdown_text `}
                >
                  Our Products
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
                <ul className="p-2 bg-white hidden dropdown_link group-hover:block absolute z-10 w-[200px] dark:bg-gray-800 dark:text-white">
                  <li>
                    <Link
                      href={`/service-details/10-takai-shastho-sheba`}
                      className={`no-underline text-black hover:bg-[#39bcbc] hover:text-white dark:hover:text-gray-200`}
                    >
                      10-takai-shastho-sheba
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className={` uppercase no-underline  ${
                    pathname === "/blogs" ? "text-[#39bcbc]" : "text-white"
                  }`}
                >
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/blogs"
                  className={`text-white uppercase no-underline hover:text-[#2b7c7c] ${
                    pathname === "/blog"
                      ? "text-blue-500"
                      : "hover:text-blue-500 dark:hover:text-blue-300"
                  }`}
                >
                  Company Profile
                </Link>
              </li> */}

              <li>
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
                {/* <Link
                  href="/login"
                  className={`bg-[#39bcbc] rounded text-white uppercase no-underline px-3 py-2.5 hover:bg-black hover:text-white`}
                >
                  Login
                </Link> */}

                <button className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5">
                  <HiOutlineUserCircle
                    style={{ width: "30px", height: "30px" }}
                    className="text-white"
                  />

                  <IoChevronDownSharp
                    strokeWidth={2.5}
                    className={`h-3 w-3  text-white
                `}
                  />
                  {/* <IoChevronDownSharp
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform 
                  ${
                  isMenuOpen ? "rotate-180" : ""
                }`
              } 
              /> */}
                </button>
              </li>
            </ul>
          </div>
          <div className="navbar-end col-span-4 md:hidden sm:block">
            <Link
              href="/login"
              className={`bg-[#39bcbc] text-white rounded uppercase text-base px-3 py-2.5 no-underline ${
                pathname === "/login" ? "  text-white" : "active_color_login"
              }`}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="md:block hidden">
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
            >
              <HiOutlineUserCircle style={{ width: "30px", height: "30px" }} />

              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
          </MenuHandler>
          <MenuList className="p-1">
            <Link to={"/profile"} onClick={closeMenu}>
              <MenuItem className={`flex items-center gap-2 rounded `}>
                <Typography as="span" variant="small" className="font-normal">
                  {user?.firstName} {user?.lastName}
                </Typography>
              </MenuItem>
            </Link>
            <NavLink onClick={handleLogOut}>
              <MenuItem
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded `}
              >
                <Typography as="span" variant="small" className="font-normal">
                  Log out
                </Typography>
              </MenuItem>
            </NavLink>
          </MenuList>
        </Menu>
      </div> */}
    </div>
  );
};

export default Navbar;
