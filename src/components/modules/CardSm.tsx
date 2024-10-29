import React from 'react';
const CardSm = ({data}) => {
    return (
        <div className='bg-white w-[196px] h-[162px] rounded-3xl p-4 gap-2 flex flex-col justify-around 
        shadow-md
        m-3
        '>
            <img className="w-6 h-6 text-red-700" src={data.icon}/>
            <h1 className="text-[32px] leading-[48px] font-bold text-gray-900">{data.amount}</h1>
            <h6 className='max-w-[100px] text-gray-600 text-[14px] leading-[21px] font-bold'>{data.title}</h6>
        </div>
    );
};

export default CardSm;