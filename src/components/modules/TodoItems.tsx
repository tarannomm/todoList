import React from 'react';

type TodoItemsProps = {
  icon: string |undefined;
  title: string;
  date: string | undefined; 
};

const TodoItems: React.FC<TodoItemsProps> = ({ icon, title, date }) => {
  return (
    <div className='flex font-bold mb-2'>
      <img className='bg-purple-50 rounded-2xl p-2 w-10 h-10 mr-3' src={icon} alt={title} />
      <div>
        <h3 className='text-base'>{title}</h3>
        <h4 className='text-xs text-gray-400'>{date}</h4>
      </div>
    </div>
  );
};

export default TodoItems;
