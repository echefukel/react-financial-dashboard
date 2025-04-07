
import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Profile from "../assets/profile-pic.png";

const Header = ({ currentSection }) => {
  return (
    <div className="flex justify-between items-center  px-6 py-4 w-full">
      {/* Dynamic Section Title */}
      <h2 className="text-xl font-bold text-black">{currentSection}</h2>

      {/* Right Section: Search, Notifications, User Info */}
      <div className="flex justify-end items-center gap-6">
        {/* Search Icon */}
        <FaSearch className="text-gray-500 text-lg cursor-pointer" />

        {/* Notification Icon */}
        <FaBell className="text-gray-500 text-lg cursor-pointer" />

        {/* User Info */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={Profile}
            alt="User Avatar"
            className="w-5 h-5 rounded-full object-fit"
          />
          <p className="font-medium text-black">Kelechi Echefu</p>
          <IoIosArrowDown className="text-gray-500 text-lg font-bold" />
        </div>
      </div>
    </div>
  );
};

export default Header;
