"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from "react";

const ServiceSidebar = () => {
  const pathname = usePathname();
  const [menuItems, setMenuItems] = useState([]);
  const iconWidth = { width: "24px", height: "24px" };

  // Fetch JSON data on component mount
  useEffect(() => {
    fetch("/menuItems.json")
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error fetching menu items:", error));
  }, []);

  return (
    <aside
      id="default-sidebar"
      className="z-0  transition-transform -translate-x-full xs:translate-x-0  w-[370px] bg-gray-50 dark:bg-gray-800"
      aria-label="Sidebar"
    >
      <div className="h-full py-4">
        <ul className="space-y-2 font-medium  px-10">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={`/service-details/${item.id}`}
                className={`flex items-center justify-between p-2 rounded-l-lg group no-underline ${
                  pathname === `/service-details/${item.id}`
                    ? "bg-[#00a47e] text-white"
                    : "bg-white text-gray-900 dark:text-white"
                }`}
              >
                <span className="ms-3">{item.title}</span>
                <MdKeyboardArrowRight
                  style={iconWidth}
                  className={`${
                    pathname === `/service-details/${item.id}`
                      ? "text-white"
                      : "text-gray-500"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
