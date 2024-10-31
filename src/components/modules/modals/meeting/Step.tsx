import React from 'react';

const Step = ({data,length,stepNum}) => {
    const {id,title,describtion}=data;
    return (
        <div className=' flex flex-col lg:flex-row'>
            <div className='flex lg:flex-col items-center lg:mr-5'>
               <div className={`${stepNum==id? " bg-blue-500 text-white":"bg-blue-100 text-blue-500"} flex justify-center items-center rounded-[9px] w-10 h-10 font-semibold`}>{id}</div> 
               <div className={`${length==id? "hidden":""} w-10 h-0 m-1 lg:w-0 lg:h-10  my-1 border-dashed border-1 border-primary`}>
             </div>
            </div>  
            <div>
                <h3 className={`font-semibold ${stepNum===id?"text-gray-900":"text-gray-500"}`}>{title}</h3>
                <span className='text-gray-500 text-[13px]'>{describtion}</span>
            </div>     
         
        </div>
    );
};

export default Step;