import React from 'react';
import {useState} from 'react';
import calendar from "../../assets/leftpart/calendar.svg";
import message from "../../assets/leftpart/meesage.svg";
import notif from "../../assets/leftpart/notif.svg";
import profile from "../../assets/leftpart/profile.svg";
import bottom from "../../assets/leftpart/bottomArrow.svg";
import payroll from "../../assets/leftpart/payroll.svg";
import time from "../../assets/leftpart/time.svg";
import add from "../../assets/leftpart/add.svg";
import { Button,Progress } from '@nextui-org/react';
import TodoItems from '../modules/TodoItems';
import AddToDoModal from './modals/AddToDoModal';

const Profile = () => {
    const items=[calendar,notif,message];
    const todoItems=[
        {title:"Run payroll" , date:"mar 4 at 6:00 pm" ,icon:payroll},
        {title:"Review time of request",date:"mar 7 at 8:00 pm",icon:time},

    ]

    const[openAddModal,setOpenAddModal] = useState<boolean>(false)
    return (
        <>        
        <div className='flex flex-col gap-4 w-[303px] h-fit bg-white rounded-3xl px-4 py-6  mt-[95px] '>
            <div className='flex justify-around items-center'>
                {items.map(item=>
                <img className={`w-7 h-7 `} src={item}/>
                )}
                <img src={profile} className='w-12 h-12'/>
                <img src={bottom} className='w-6 h-6'/>
            </div>
            
              <div className='flex flex-col justify-around w-full h-[290px] rounded-2xl border-[1px] p-6  border-gray-200 gap-5 shadow-md '>
                <div className='text-gray-900 font-bold'>
                    <h1 className='text-2xl'>
                    Formation status
                    </h1>
                    <h3 className='text-base'> in progress</h3>

                </div>
                <div className='font-bold h-[224px] flex flex-col justify-around'>
                <Progress  size="lg" color='secondary' aria-label="Loading..." value={75} />
                <div>
                <h3 className='text-base'>Estimated processing</h3>
                <h2 className='text-gray-500'>4-5 business days</h2>
               </div>
                <Button color='secondary' className='w-[223px] h-[42px] p-2'>View status</Button>
                </div>

            </div>
            <div className='w-full font-bold mt-2'>
                <div className='grid gap-6'>
                <h2 className='text-6'>Your to-Do list</h2>
                <div className='grid gap-4'>
                    {todoItems.map(todo=>
                      <TodoItems title="bbb" icon="" date=""/>  
                    )}
                <div className='flex items-center font-bold'>
                    <button className='bg-purple-200 rounded-2xl p-2 w-10 h-10 mr-3 hover:bg-purple-400 duration-300 cursor-pointer' onClick={()=>setOpenAddModal(!openAddModal)}>
                      <img  src={add}/>
                    </button>
                   <h3 className='text-base'>Add to Do</h3>                 
                </div>    
                </div>
                </div>
                <div className='font-bold h-[100px] flex flex-col justify-around mt-7'>
                    <h3>Board meeting</h3>
                    <h3 className='text-sm text-gray-400'>feb 22 at 6:00 PM</h3>
                    <p className='text-xs text-gray-400'>You have been invited to attend a meeting of the Boeards directors</p>

                </div>
            </div>
        </div> 
         <AddToDoModal open={openAddModal} setopen={setOpenAddModal}/>
        </>

    );
};

export default Profile;