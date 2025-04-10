import React, { useState , useEffect } from "react";
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
import LogoutOverlay from "./LogoutOverlay";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const [showLogoutOverlay, setShowLogoutOverlay] = useState(()=>{

    const storedValue = localStorage.getItem("showLogoutOverlay");
    
      return storedValue === "true"|| false
  });
  // save to local storage when state changes
  useEffect(() => {
    localStorage.setItem("showLogoutOverlay", showLogoutOverlay);
  }, [showLogoutOverlay]);


  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    setShowLogoutOverlay(true);
  };

  const closeLogoutOverlay = () => {
    setShowLogoutOverlay(false);
    localStorage.removeItem(showLogoutOverlay)
  };

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 w-full flex items-center justify-between bg-white px-4 h-20 shadow-md z-100">
        <h1 className="font-bold text-xl text-black font-Urbanist">Maglo.</h1>
        <button onClick={toggleSidebar}>
          {isOpen ? (
            <FaTimes size={30} className="text-black" />
          ) : (
            <FaBars size={30} className="text-black" />
          )}
        </button>
      </nav>

      {/* Sidebar for mobile screens */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#e8e8e8] z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 mt-20">
          <ul className="space-y-8">
            <li className="flex items-center space-x-3 hover:bg-[#c8ee44] px-3 py-2 rounded-md">
              <FaHome />
              <Link to="/" onClick={handleLinkClick}>
                Dashboard
              </Link>
            </li>
            <li className="flex items-center space-x-3 hover:bg-[#c8ee44] px-3 py-2 rounded-md">
              <FaMoneyBill />
              <Link to="/transactions" onClick={handleLinkClick}>
                Transactions
              </Link>
            </li>
            <li className="flex items-center space-x-3 hover:bg-[#c8ee44] px-3 py-2 rounded-md">
              <FaFileInvoice />
              <Link to="/invoices" onClick={handleLinkClick}>
                Invoices
              </Link>
            </li>
            <li className="flex items-center space-x-3 hover:bg-[#c8ee44] px-3 py-2 rounded-md">
              <FaWallet />
              <Link to="/mywallet" onClick={handleLinkClick}>
                My Wallet
              </Link>
            </li>
            <li className="flex items-center space-x-3 hover:bg-[#c8ee44] px-3 py-2 rounded-md">
              <FaCogs />
              <Link to="/settings" onClick={handleLinkClick}>
                Settings
              </Link>
            </li>
          </ul>

          <div className="mt-30 space-y-6">
            <div className="flex items-center space-x-3">
              <FaQuestionCircle />
              <Link to="/help" onClick={handleLinkClick}>
                Help
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <FaSignOutAlt />
              <button
                className="bg-red-600 text-white px-5 py-3 rounded-md shadow-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      

      {/* Sidebar for desktop screens */}
      <aside className="bg-[#e8e8e8] w-64 h-screen p-4 fixed top-0 left-0 shadow-lg hidden md:block z-30">
        <h1 className="font-bold tracking-wide text-center text-black text-2xl font-Urbanist">
          Maglo.
        </h1>
        <div className="flex flex-col space-y-40 lg:space-y-60 mt-10">
          <ul>
            <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
              <FaHome />
              <Link to="/">Dashboard</Link>
            </li>
            <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
              <FaMoneyBill />
              <Link to="/transactions">Transactions</Link>
            </li>
            <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
              <FaFileInvoice />
              <Link to="/invoices">Invoices</Link>
            </li>
            <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
              <FaWallet />
              <Link to="/mywallet">My Wallet</Link>
            </li>
            <li className="flex space-x-5 items-center px-3 py-4 rounded-md hover:bg-[#c8ee44]">
              <FaCogs />
              <Link to="/settings">Settings</Link>
            </li>
          </ul>

          <div className="space-y-4 mt-auto">
            <div className="flex space-x-5 items-center px-3 py-2">
              <FaQuestionCircle />
              <Link to="/help">Help</Link>
            </div>
            <div className="space-x-5 flex items-center px-3 py-2">
              <FaSignOutAlt />
              <button
                className="bg-red-600 text-white px-6 py-2 rounded-md"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </aside>

      
      {/* Logout Overlay */}
      {showLogoutOverlay && (
        <LogoutOverlay onClose={closeLogoutOverlay} />
      )}
    </>
  );
};

export default Sidebar;
