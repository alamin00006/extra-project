"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authKey } from "@/constants/storageKey";
import {
  getFromLocalStorage,
  removeUserInfo,
} from "@/helpers/utils/local-storage";
import ClickOutside from "../ClickOutSide/ClickOutSide";
import {
  User,
  LogOut,
  ChevronDown,
  Settings,
  User as UserIcon,
} from "lucide-react";

const DropdownUser = ({ userData }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const authToken = getFromLocalStorage(authKey);
  const router = useRouter();

  const logOut = () => {
    removeUserInfo(authKey);
    setDropdownOpen(false);
    router.push("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <ClickOutside onClick={closeDropdown} className="relative -mt-3">
      <div className="">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-expanded={dropdownOpen}
          aria-haspopup="true"
        >
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br bg-[#39bcbc] rounded-full">
            <UserIcon className="w-4 h-4 text-white" />
          </div>

          <div className="hidden sm:flex items-center gap-1">
            <span className="text-sm font-medium text-gray-700 max-w-[120px] truncate">
              {"Account"}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute right-0 top-12 mt-2 w-72 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 animate-in fade-in-0 zoom-in-95">
            {/* Navigation Links */}
            <div className="p-2">
              <Link
                href="/profile"
                onClick={closeDropdown}
                className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 group "
              >
                <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg group-hover:bg-blue-50 transition-colors">
                  <User className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                </div>
                <div className="mt-2">
                  <p className="font-medium">My Profile</p>
                </div>
              </Link>
            </div>

            {/* Logout Section */}
            <div className="p-2 border-t border-gray-100">
              <button
                onClick={logOut}
                className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200 group"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                  <LogOut className="w-4 h-4" />
                </div>
                <span className="font-medium">Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </ClickOutside>
  );
};

export default DropdownUser;
