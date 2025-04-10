import React, { useState } from "react";
import { FaFileInvoice, FaFilter, FaSearch, FaEllipsisV } from "react-icons/fa";
import invoices from "../data/invoices";

const Invoices = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.orderType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-white rounded-2xl shadow-md w-full">
      {/* Page Title */}
      

      {/* Search and Buttons */}
      <div className="flex flex-col gap-6 justify-between items-center mb-6 lg:flex-row ">
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full md:w-1/2 ">
          <FaSearch className="text-gray-500 " />
          <input
            value={searchTerm}
            onChange={handleSearch}
            type="text"
            placeholder="Search by name or business type"
            className="w-full text-sm focus:outline-none px-4 py-2 "
          />
        </div>

        <div className="w-full md:w-auto flex justify-between md:justify-start gap-4 ">
          <button className="bg-[#c8ee44] px-6 py-4 font-semibold rounded-md text-gray-800 gap-2 flex items-center">
            <FaFileInvoice />
            Create Invoice
          </button>
          <button className="bg-white px-6 py-4 border-gray-100 font-semibold border rounded-md text-gray-800 gap-2 flex items-center">
            <FaFilter />
            Filter
          </button>
        </div>
      </div>

      {/* Table Header */}
      <div className="hidden lg:grid grid-cols-6 text-sm text-gray-500 font-medium border-b pb-3 mb-3 mt-4">
        <span className="text-left">Name/Client</span>
        <span className="text-left">Date</span>
        <span className="text-left">Orders/Type</span>
        <span className="text-left">Amount</span>
        <span className="text-left">Status</span>
        <span className="text-left">Action</span>
      </div>

      {/* Invoices List */}
      <div className="flex flex-col gap-4">
        {filteredInvoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex flex-col lg:grid grid-cols-6 gap-3 bg-gray-50 p-4 rounded-xl text-sm text-gray-700"
          >
            {/* Name/Client */}
            <div className="flex items-center gap-3 font-medium">
              <img
                src={invoice.logo}
                alt={invoice.client}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>{invoice.client}</span>
            </div>

            {/* Date */}
            <div className="font-medium">{invoice.date}</div>

            {/* Orders/Type */}
            <div className="font-medium text-gray-600">{invoice.orderType}</div>

            {/* Amount */}
            <div className="font-semibold text-gray-800">
              ${invoice.amount.toFixed(2)}
            </div>

            {/* Status */}
            <div>
              <span
                className={`text-xs  font-semibold px-3 py-1 rounded-lg shadow-sm inline-block w-[80px] text-center ${
                  invoice.status === "Paid"
                    ? "bg-green-100 text-green-600"
                    : invoice.status === "Pending"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {invoice.status}
              </span>
            </div>

            {/* Action */}
            <button className="text-gray-500 flex items-center gap-2 hover:text-gray-700 transition cursor-pointer ">
              <FaEllipsisV className="sm:hidden " />
              <span className="text-sm font-medium text-blue-600">View</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Invoices;
