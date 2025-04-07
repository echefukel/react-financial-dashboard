import React, { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import { monthChartData, allMonths } from "../data/chartData";

const WorkingCapitalChart = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [isBarChart, setIsBarChart] = useState(true);

  const switchChart = () => {
    setIsBarChart(!isBarChart);
  };

  const handleChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const data = monthChartData[selectedMonth] || [];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-3">
        <h2 className="text-[20px] font-semibold text-black">
          Working Capital
        </h2>
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-[#4ade80]"></div>
          <p>income</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-[#f87171]"></div>
          <p>expenses</p>
        </div>

        <select
          value={selectedMonth}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none"
        >
          {allMonths.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      {/* Button that will switch between barchart and linechart */}
      <div className="flex items-center space-x-8 mt-10 mb-10">
        <p className="italic text-[12px] font-semibold">
          Click button to switch between <br /> Bar and line chart{" "}
        </p>
        <button
          className="px-6 py-2 cursor-pointer bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          onClick={switchChart}
        >
          {isBarChart ? "Line Chart" : "Bar Chart"}
        </button>
      </div>

      {/* Logic that switches between bar and line chart */}
      {isBarChart ? (
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="income" fill="#4ade80" radius={[5, 5, 0, 0]} />
              <Bar dataKey="expenses" fill="#f87171" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="income"
                stroke="#4ade80"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="expenses"
                stroke="#f87171"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default WorkingCapitalChart;
