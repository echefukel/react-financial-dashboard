import React from "react";
import OverlapCard from "./OverlapCard"; // Assuming you have this component in the same directory
const WalletInfo = () => {
  return (
    <div className="w-full space-y-4 relative">
      {/* Title */}
        <div className="flex justify-between items-center px-4 py-2">
        <h2 className="text-lg font-semibold text-gray-900">Wallet</h2>
        <p className="text-[30px] text-gray-500">...</p>

        </div>

      {/* Card */}
      <OverlapCard />

    </div>
  );
};

export default WalletInfo;
