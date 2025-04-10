import React, { useEffect, useState } from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Profile from "../assets/profile-pic.png";

const Header = ({ currentSection }) => {
  const [userName, setUserName] = useState("User");
  const [profileImage, setProfileImage] = useState(Profile);

  useEffect(() => {
    const storedData = localStorage.getItem("userSettings");
    if (storedData) {
      const parsed = JSON.parse(storedData);
      const fullName = `${parsed.firstName || ""} ${parsed.lastName || ""}`;
      setUserName(fullName.trim() || "User");
      if (parsed.profileImage) {
        setProfileImage(parsed.profileImage);
      }
    }
  }, []);

  return (
    <div className="flex justify-between items-center px-6 py-4 w-full mt-20 md:mt-0">
      <h2 className="text-xl font-bold text-black">{currentSection}</h2>

      <div className="flex justify-end items-center gap-6">
        <FaSearch className="text-gray-500 text-lg cursor-pointer" />
        <FaBell className="text-gray-500 text-lg cursor-pointer" />
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={profileImage}
            alt="User Avatar"
            className="w-5 h-5 rounded-full object-fit"
          />
          <p className="font-medium text-black">{userName}</p>
          <IoIosArrowDown className="text-gray-500 text-lg font-bold" />
        </div>
      </div>
    </div>
  );
};

export default Header;
