import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaFileInvoice,
  FaCogs,
  FaQuestionCircle,
  FaSignOutAlt,
  FaMoneyBill,
  FaTimes,
  FaBars,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* ✅ Navbar (Only visible on small screens) */}
      <nav className="md:hidden fixed top-0 left-0 w-full flex items-center justify-between bg-[#ffffff] px-3 z-30 h-20">
        <h1 className="font-bold text-xl text-black">Maglo.</h1>
        <button onClick={toggleSidebar}>
          {isOpen ? (
            <FaTimes size={25} className="text-black" />
          ) : (
            <FaBars size={25} className="text-black" />
          )}
        </button>
      </nav>

      {/* ✅ Sidebar for Small Screens */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-[#e8e8e8] p-4 shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-2xl"
        >
          &times;
        </button>

        {/* Logo */}
        <h1 className="font-bold tracking-wide text-center text-black text-2xl">
          Maglo.
        </h1>

        {/* ✅ Nav Links */}
        <ul className="mt-10 space-y-4">
          <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
            <FaHome />
            <Link to="/">Dashboard</Link>
          </li>
          <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
            <FaMoneyBill />
            <Link to="/Transactions">Transactions</Link>
          </li>
          <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
            <FaFileInvoice />
            <Link to="/Invoices">Invoices</Link>
          </li>
          <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
            <FaWallet />
            <Link to="/MyWallet">My Wallet</Link>
          </li>
          <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
            <FaCogs />
            <Link to="/Settings">Settings</Link>
          </li>
        </ul>

        {/* ✅ Help and Logout */}
        <div className="absolute bottom-10 left-4 space-y-4">
          <div className="flex space-x-5 items-center px-3 py-2">
            <FaQuestionCircle />
            <Link to="#">Help</Link>
          </div>
          <div className="flex space-x-5 items-center px-3 py-2">
            <FaSignOutAlt />
            <button className="bg-red-600 text-white px-4 py-2 rounded-md">
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Sidebar for Larger Screens (Always Visible) */}
      <aside className="hidden md:block bg-[#e8e8e8] w-64 h-screen p-4 fixed top-0 left-0 shadow-lg">
        <h1 className="font-bold tracking-wide text-center text-black text-2xl">
          Maglo.
        </h1>

        <ul className="mt-10 space-y-4">
          <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
            <FaHome />
            <Link to="/">Dashboard</Link>
          </li>
          <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
            <FaMoneyBill />
            <Link to="/Transactions">Transactions</Link>
          </li>
          <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
            <FaFileInvoice />
            <Link to="/Invoices">Invoices</Link>
          </li>
          <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
            <FaWallet />
            <Link to="/MyWallet">My Wallet</Link>
          </li>
          <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
            <FaCogs />
            <Link to="/Settings">Settings</Link>
          </li>
        </ul>

        <div className="absolute bottom-10 left-4 space-y-4">
          <div className="flex space-x-5 items-center px-3 py-2">
            <FaQuestionCircle />
            <Link to="#">Help</Link>
          </div>
          <div className="flex space-x-5 items-center px-3 py-2">
            <FaSignOutAlt />
            <button className="bg-red-600 text-white px-4 py-2 rounded-md">
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;