import React from 'react';

type Meeting = {
  profile: string;
  user: string;
  title: string;
  date: string;
};

const MeetingItems: React.FC<Meeting> = ({profile,user,title,date}) => {
  return (
    <div className='flex bg-white items-center rounded-lg px-4 py-2 min-h-[56px] my-2'>
      <img className='rounded-full w-10 h-10 mr-12' src={profile} alt={user} />
      <div className='flex-grow grid grid-cols-3 gap-5'>
        <p>{user}</p>
        <p>{title}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default MeetingItems;
