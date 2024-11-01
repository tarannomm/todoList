import React from "react";
import { CardMdProps } from "../../types/type";

const CardMd: React.FC<CardMdProps> = ({ data }) => {
  return (
    <div className="bg-white min-w-[175px] w-[45%] xl:w-[100%] h-[139px] rounded-3xl px-4 py-6 mx-[2px] gap-2 flex items-center font-bold shadow-md">
      <div className="flex flex-col justify-between flex-grow h-[100%]">
        <h3 className="text-gray-600 text-md leading-[21px] font-bold">
          {data.title}
        </h3>
        <h1 className="text-[40px] leading-[48px] font-bold text-gray-900">
          {data.amount}
        </h1>
      </div>
      <div
        className={`gap-2 w-[70px] flex justify-center items-center    xl: h-[35px] rounded-[40px] text-xs  xl:text-lg px-2 xl:px-0 py-1 ${
          !data.positive
            ? "bg-red-100 text-red-500"
            : "bg-green-100 text-green-500"
        }`}
      >
        {`${data.positive ? "+" : "-"} ${data.percent}%`}
      </div>
    </div>
  );
};

export default CardMd;