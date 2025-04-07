import React from "react";
import { scheduledTransfers } from "../data/scheduledTransfers";
import { ArrowRight } from "lucide-react";

const ScheduleTransfer = () => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full mt-40">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-black">Scheduled Transfers</h2>
        <button className="text-sm text-green-600 hover:underline flex items-center gap-1">
          View All <ArrowRight size={16} />
        </button>
      </div>

      {/* Transfer List */}
      <div className="flex flex-col gap-8 lg:gap-12">
        {scheduledTransfers.map((transfer) => (
          <div key={transfer.id} className="flex justify-between items-center">
            {/* Avatar & Name */}
            <div className="flex items-center gap-3">
              <img
                src={transfer.avatar}
                alt={transfer.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-sm">{transfer.name}</p>
                <p className="text-xs text-gray-500">{transfer.date}</p>
              </div>
            </div>

            {/* Amount */}
            <p className="text-red-500 font-semibold text-sm">
              - ${transfer.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTransfer;
