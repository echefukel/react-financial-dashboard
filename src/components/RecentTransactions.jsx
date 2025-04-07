import React, { useState } from "react";
import { transactionData } from "../data/transactionData";
import { ArrowRight } from "lucide-react";

const RecentTransactions = () => {
  
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = transactionData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.business.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleData = showAll ? filteredData : filteredData.slice(0, 3);

  const handleViewAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-black">Recent Transactions</h2>
        <button
          className="text-sm text-blue-600 hover:underline flex items-center gap-1"
          onClick={handleViewAll}
        >
          {showAll ? (
            "View Less"
          ) : (
            <>
              View All <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or business"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded-md px-3 py-2 w-full text-sm focus:outline-none"
        />
      </div>

      {/* Desktop Table Headers */}
      <div className="hidden md:grid grid-cols-4 text-sm font-semibold text-gray-500 border-b pb-3">
        <span className="text-center">Name / Business</span>
        <span className="text-center">Type</span>
        <span className="text-center">Amount</span>
        <span className="text-center">Date</span>
      </div>

      {/* Transactions */}
      <div className="flex flex-col gap-6 mt-4">
        {visibleData.length === 0 ? (
          <p className="text-gray-500 text-center text-sm">No transactions found.</p>
        ) : (
          visibleData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 p-4 sm:px-8 rounded-xl flex flex-col md:grid md:grid-cols-4 md:items-center gap-3"
            >
              {/* Name & Business */}
              <div className="flex items-center gap-3">
                <img src={item.logo} alt={item.name} className="w-10 h-10" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500 text-xs">{item.business}</p>
                </div>
              </div>

              {/* Type */}
              <div className="text-gray-600 md:text-center text-sm">
                <span className="md:hidden font-semibold">Type: </span>
                {item.type}
              </div>

              {/* Amount */}
              <div className="text-gray-900 font-semibold md:text-center text-sm">
                <span className="md:hidden font-semibold">Amount: </span>$
                {(item.id * 100 + 20).toFixed(2)}
              </div>

              {/* Date */}
              <div className="text-gray-500 md:text-right text-sm">
                <span className="md:hidden font-semibold">Date: </span>
                {item.date}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
