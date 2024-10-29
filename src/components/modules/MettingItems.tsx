import React from 'react';
const MettingItems = ({meeting}) => {
    return (
        <div className='flex bg-white items-center rounded-lg px-4 py-2 h-[56px] my-2'>
            <img className='rounded-full w-10 h-10 mr-12' src={meeting.profile}/>
            <div className='flex-grow grid grid-cols-3 gap-5'>
               <p>{meeting.user}</p>
              <p>{meeting.title}</p>
              <p>{meeting.date}</p>    
            </div>
             
        </div>
    );
};

export default MettingItems;