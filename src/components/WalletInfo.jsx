import React from "react";

const WalletInfo = () => {
  return (
    <div className="w-full space-y-4 relative">
      {/* Title */}
        <div className="flex justify-between items-center px-4 py-2">
        <h2 className="text-lg font-semibold text-gray-900">Wallet</h2>
        <p className="text-[30px] text-gray-500">...</p>

        </div>
      {/* Card 1 */}

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-5 rounded-2xl shadow-md space-y-4 h-50">
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">Maglo.</p>
          <span className="text-xs">Universal Bank</span>
        </div>
        <div className="text-xl tracking-widest font-semibold">
          5495 7381 3759 2321
        </div>
      </div>

      {/* Card 2 */}
      
      <div className="bg-white border border-gray-200 p-5 rounded-2xl shadow-md space-y-4 h-50 absolute top-50 left-0 right-0 mx-auto opacity-70 "> 
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg text-gray-900">Maglo.</p>
          <span className="text-xs text-gray-500">Commercial Bank</span>
        </div>
        <div className="text-lg font-semibold tracking-wider text-gray-900">
          85952548****
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">09/25</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="h-5"
          />
        </div>
      </div>
    </div>
  );
};

export default WalletInfo;
