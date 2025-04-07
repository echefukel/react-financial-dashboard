// components/WalletCards.jsx
import React from "react";
import { FaWallet, FaShoppingCart, FaPiggyBank } from "react-icons/fa";

const cardData = [
  {
    title: "Total balance",
    amount: "$5240.21",
    icon: <FaWallet className="text-white text-xl" />,
    bg: "bg-gray-800",
    textColor: "text-white",
  },
  {
    title: "Total spending",
    amount: "$250.80",
    icon: <FaShoppingCart className="text-gray-700 text-xl" />,
    bg: "bg-gray-100",
    textColor: "text-gray-900",
  },
  {
    title: "Total saved",
    amount: "$550.25",
    icon: <FaPiggyBank className="text-gray-700 text-xl" />,
    bg: "bg-gray-100",
    textColor: "text-gray-900",
  },
];

const WalletCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`p-5 rounded-xl flex items-center justify-between ${card.bg} shadow-sm`}
        >
          <div className={`flex flex-col ${card.textColor}`}>
            <span className="text-sm">{card.title}</span>
            <span className="text-xl font-bold">{card.amount}</span>
          </div>
          <div className="p-3 rounded-full bg-white/10">
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WalletCards;
