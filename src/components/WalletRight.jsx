// src/components/WalletRight.jsx
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { paymentsData, upcomingPayments } from "../data/walletData";

const WalletRight = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredPayments = paymentsData
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) =>
      activeTab === "regular"
        ? item.name.toLowerCase().includes("wise") ||
          item.name.toLowerCase().includes("paypal")
        : true
    );

  const filteredUpcomingPayments = upcomingPayments.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full lg:w-[60%] px-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">My Payments</h2>
        <div className="flex gap-2 items-center border border-gray-100 px-2 py-1 rounded-md">
          <FaSearch className="text-gray-400 text-sm" />
          <input
            value={searchTerm}
            onChange={handleSearch}
            type="text"
            placeholder="Search"
            className="ml-2 text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Tab buttons */}
      <div className="flex gap-4 text-sm mb-4">
        <button
          onClick={() => handleTabClick("all")}
          className={`font-semibold pb-1 ${
            activeTab === "all"
              ? "text-gray-900 border-b-2 border-gray-800"
              : "text-gray-400"
          }`}
        >
          All Payments
        </button>
        <button
          onClick={() => handleTabClick("regular")}
          className={`font-semibold pb-1 ${
            activeTab === "regular"
              ? "text-gray-900 border-b-2 border-gray-800"
              : "text-gray-400"
          }`}
        >
          Regular Payments
        </button>
      </div>

      {/* Current Payments Section */}
      <h2 className="text-[16px] font-semibold text-gray-800">
        Current Payments
      </h2>
      <p className="text-gray-400 mb-4 text-sm">Today</p>

      {filteredPayments.length === 0 ? (
        <p className="text-gray-400 text-sm mb-6">
          No current payments found.
        </p>
      ) : (
        <div className="flex justify-between items-start">
          <div>
            {filteredPayments.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-10 w-10 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs font-semibold text-gray-500">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            {filteredPayments.map((item) => (
              <p key={item.id} className="mb-11">
                {item.amount}$
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Upcoming Payments Section */}
      <h2 className="text-xl font-semibold text-gray-800 mt-6">
        Upcoming Payments
      </h2>
      <p className="text-gray-400 mb-4 mt-2 text-sm">Next Month</p>

      {filteredUpcomingPayments.length === 0 ? (
        <p className="text-gray-400 text-sm">No upcoming payments found.</p>
      ) : (
        <div className="flex flex-col justify-center">
          {filteredUpcomingPayments.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="h-10 w-10" />
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs font-semibold text-gray-500">
                    {item.date}
                  </p>
                </div>
              </div>
              <p>{item.amount}$</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WalletRight;
