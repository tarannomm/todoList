// Chart.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChartProps,
} from "recharts";

type DataPoint = {
  name: string;
  Withdrawal: number;
  deposit: number;
};

interface ChartProps {
  data: DataPoint[];
  grid?: boolean;
}

const Chart: React.FC<ChartProps> = ({ data, grid = false }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-between text-gray-900 bg-white rounded-3xl py-3 font-robotoMedium font-normal text-[9px] shadow-md">
        <h1 className="pl-8 mb-5 font-robotoBlack font-bold text-xl">
          Revenue
        </h1>
        <div>
          <ResponsiveContainer aspect={3}>
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="Withdrawal"
                stroke="#101828"
                activeDot={{ r: 2 }}
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="deposit"
                stroke="#6941C6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="flex justify-start items-center pl-9 gap-2 font-normal text-xs mt-4">
            <span className="flex justify-between items-center gap-2">
              <div className="w-2 h-2 bg-purple-700 rounded-full"></div>
              <h1>deposit</h1>
            </span>
            <span className="flex justify-between items-center gap-2">
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