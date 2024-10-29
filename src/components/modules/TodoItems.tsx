import React from 'react';
import icons from "../../assets/menu/bank.svg"
const TodoItems = ({icon,title,date}) => {
    return (
        <div className='flex font-bold'>
            <img className='bg-purple-50 rounded-2xl p-2 w-10 h-10 mr-3' src={icons}/>
            <div>
                <h3 className='text-base'>gttbfgvf</h3>
                <h4 className='text-xs text-gray-400'>3 nar at 6pm</h4>
            </div>
        </div>
    );
};

export default TodoItems;