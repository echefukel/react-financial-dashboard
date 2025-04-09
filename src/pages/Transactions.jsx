import React, { useState } from "react";
import { transactionData } from "../data/transactionData";
import { Download } from "lucide-react";
import { downloadInvoicePdf } from "../utils/downloadInvoicePdf";
const Transactions = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = transactionData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.business.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-white rounded-2xl shadow-md w-full">
      {/* Page Title */}
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Transactions</h2>

      {/* Search Input */}
      <div className="mb-10">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name or business"
          className="w-full md:w-1/2 border border-gray-300 rounded-lg px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table Header */}
      <div className="hidden lg:grid grid-cols-6 text-sm text-gray-500 font-medium border-b pb-3 mb-3">
        <span className="text-left">Invoice ID</span>
        <span className="text-left">Name</span>
        <span className="text-left">Business</span>
        <span className="text-left">Type</span>
        <span className="text-left">Date</span>
        <span className="text-left">Action</span>
      </div>

      {/* Transactions List */}
      <div className="flex flex-col gap-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col lg:grid grid-cols-6 gap-3 bg-gray-50 p-4 rounded-xl"
          >
            {/* Invoice ID */}
            <div className="text-sm font-semibold text-gray-700">
              <span className="md:hidden font-medium">Invoice ID: </span>
              #{item.id.toString().padStart(4, "0")}
            </div>

            {/* Name */}
            <div className="flex items-center gap-3 text-sm">
              <img src={item.logo} alt={item.name} className="w-8 h-8" />
              <span>{item.name}</span>
            </div>

            {/* Business */}
            <div className="text-sm text-gray-600">
              <span className="md:hidden font-medium">Business: </span>
              {item.business}
            </div>

            {/* Type */}
            <div className="text-sm text-gray-600">
              <span className="md:hidden font-medium">Type: </span>
              {item.type}
            </div>

            {/* Date */}
            <div className="text-sm text-gray-500">
              <span className="md:hidden font-medium">Date: </span>
              {item.date}
            </div>

            {/* Action */}
            <div className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer flex items-center gap-2"
            onClick={() => downloadInvoicePdf(item)}>
              <Download size={16} />
              <span className="hidden md:inline">Download</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
