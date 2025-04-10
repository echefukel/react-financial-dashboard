// src/components/LogoutOverlay.jsx
import React from "react";

const LogoutOverlay = ({onClose}) => {
  return (
    <div className="fixed inset-0 z-200 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg p-10 shadow-lg text-center max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Thanks for visiting Maglo 👋</h2>
            <p className="text-gray-600 mb-6">We look forward to having you again soon.</p>
            <button
              onClick={onClose}
              className="bg-[#c8ee44] text-black px-6 py-2 rounded-md font-semibold hover:scale-105 transition"
            >
              Dive Right Back
            </button>
          </div>
        </div>
  );
};

export default LogoutOverlay;
