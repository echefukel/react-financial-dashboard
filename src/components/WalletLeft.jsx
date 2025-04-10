// src/components/WalletLeft.jsx
import React from "react";
import { walletData } from "../data/walletData"; // Assuming you have this data in a separate file
import { FaPlus } from "react-icons/fa";

const WalletLeft = () => {
  return (
    <div className="w-full lg:w-[40%] px-4">

      {/* Cards */}
      <div className="flex flex-col gap-4">
        {walletData.map((wallet) => (
          <div
            key={wallet.id}
            className={`rounded-xl p-5 shadow-md h-50 w-100 ${wallet.color}`}
          >
            <p className="text-sm font-semibold">Maglo. | {wallet.bankName}</p>
            <p className="mt-6 tracking-widest font-semibold text-lg">
              {wallet.cardNumber}
            </p>
            <div className="flex justify-between items-center mt-4 text-sm">
              <span className="font-bold">{wallet.expiry}</span>
              <span className="text-xs bg-white px-2 py-1 rounded-full text-black font-semibold">
                {wallet.cardType}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Wallet Info Box */}
      <div className="bg-transparent rounded-xl shadow p-5 mt-6 w-100 h-40 mb-4">
        <div className="mb-4">
          <p className="text-sm text-gray-500">Your Balance</p>
          <h3 className="text-xl font-bold text-gray-900">$5240.00</h3>
          <div className="flex gap-4 mt-1 text-xs">
            <span className="text-green-500 font-semibold">↑ 23.65%</span>
            <span className="text-red-500 font-semibold">↓ 10.40%</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="text-gray-500">Currency</p>
            <p className="font-semibold">USD / US Dollar</p>
          </div>
          <div>
            <p className="text-gray-500">Status</p>
            <p className="font-semibold">Active</p>
          </div>
        </div>
      </div>

      {/* Add Card Button */}
      <button className="mt-6 w-full bg-white border border-gray-300 text-green-600 py-3 rounded-xl flex items-center justify-center gap-2 text-sm">
        <FaPlus /> Add New Card
      </button>
    </div>
  );
};

export default WalletLeft;
