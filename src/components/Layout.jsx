import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Transactions from "../pages/Transactions";
import Invoices from "../pages/Invoices";
import Settings from "../pages/Settings";
import MyWallets from "../pages/MyWallets";
import Help from "../pages/Help";


const Layout = () =>{
    const location = useLocation();
    const sectionMapping = {
        '/': "Dashboard",
        '/transactions': "Transactions",
        '/invoices' : 'Invoices',
        '/settings' : 'Settings',
        '/mywallet' : 'My Wallets',
        '/help' : 'Help'
    };
   const currentSection = sectionMapping[location.pathname];
    return (
        <div className="flex font-Poppins">
      <Sidebar />
      <div className="flex-1 p-5 md:ml-64 bg-white min-h-screen">
        <Header currentSection={currentSection} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/mywallet" element={<MyWallets />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </div>
    )
};



export default Layout ;