import { ChartData } from "chart.js";
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

 

const Chart= ({ data, grid = false }) => {
  return (
    <div className="w-full h-[302px]">
      <div className="flex flex-col justify-between text-gray-900 bg-white rounded-3xl py-2 font-robotoMedium font-normal text-[9px] shadow-md h-full">
        <h1 className="pl-8 font-robotoBlack font-bold text-xl mb-4">Revenue</h1>
        <div className="h-full mt-2">
          <ResponsiveContainer width="100%" height="87%">
            <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              {grid && <CartesianGrid vertical={false} strokeDasharray="3" />}
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="Withdrawal" stroke="#101828" activeDot={{ r: 2 }} strokeWidth={3} />
              <Line type="monotone" dataKey="deposit" stroke="#6941C6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex justify-start items-center pl-8 gap-2 font-normal text-xs mt-2">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-700 rounded-full"></div>
              <h1>Deposit</h1>
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              <h1>Withdrawal</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
