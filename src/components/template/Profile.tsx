import React, { useState } from 'react';
import { Button, Progress } from '@nextui-org/react';
import TodoItems from '../modules/TodoItems';
import calendar from "../../assets/leftpart/calendar.svg";
import message from "../../assets/leftpart/meesage.svg";
import notif from "../../assets/leftpart/notif.svg";
import profile from "../../assets/leftpart/profile.svg";
import bottom from "../../assets/leftpart/bottomArrow.svg";
import payroll from "../../assets/leftpart/payroll.svg";
import time from "../../assets/leftpart/time.svg";
import board from "../../assets/leftpart/board.svg"
import add from "../../assets/leftpart/add.svg";
import avatar from "../../assets/avatars/avatar1.png"
import AddToDoModal from './modals/AddToDoModal';
import  {TodoItem}  from '../../types/type';
import { useSelector } from 'react-redux';

const Profile: React.FC = () => {
  const items = [calendar, notif, message];
  const initialToDoItems: TodoItem[] = [
    { title: "Run payroll", date: "Mar 4 at 6:00 pm", icon: payroll ,users:[] },
    { title: "Review time of request", date: "Mar 7 at 8:00 pm", icon: time ,users:[]},
    { title: "Sign board Resulotion", date: "Mar 12 at 8:30 pm", icon: board,users:[]},
  ];
 //ACCESS TO REDUX TODO ITEMS 
  const TODOItems = useSelector((state: any) => state.myArray.todo);
  console.log(TODOItems);
  
  const [openAddModal, setOpenAddModal] = useState<boolean>(false);
 
  return (
    <>
      <div className="flex flex-row justify-center flex-wrap xl:flex-col gap-4 w-[90%] xl:w-[22%] min-w-[305px] h-fit bg-white rounded-3xl px-4 py-6 mt-[14px] xl:ml-[4%]">
        <div className="flex flex-col flex-grow min-w-[275px] w-[45%] mr-5 xl:ml-0 xl:w-full">
          <div className="flex justify-around items-center mb-3">
            {items.map((item, index) => (
              <img key={index} className="w-7 h-7" src={item} alt={`icon-${index}`} />
            ))}
            <img src={profile} className="w-12 h-12" alt="profile" />
            <img src={bottom} className="w-6 h-6" alt="dropdown" />
          </div>
          <div className="flex flex-col justify-around w-full h-[290px] rounded-2xl border-[1px] p-6 border-gray-200 gap-5 shadow-md">
            <div className="text-gray-900 font-bold">
              <h1 className="text-2xl">Formation status</h1>
              <h3 className="text-base">In progress</h3>
            </div>
            <div className="font-bold h-[224px] flex flex-col justify-around">
              <Progress size="lg" color="secondary" aria-label="Loading..." value={75} />
              <div>
                <h3 className="text-base">Estimated processing</h3>
                <h2 className="text-gray-500">4-5 business days</h2>
              </div>
              <Button color="secondary" className="w-[223px] h-[42px] p-2 mx-auto">
                View status
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-grow min-w-[300px] w-[45%] xl:w-full font-bold mt-2">
          <div className="grid gap-6">
            <h2 className="text-6">Your To-Do List</h2>
            <div className="grid gap-4">
                <div className='max-h-[300px] overflow-y-auto'>
                  {initialToDoItems.map((todo, index) => (
                        <TodoItems key={index} title={todo.title} icon={todo.icon} date={todo.date} />
                    ))
                    }
                    {  
                        TODOItems.map((todos)=>(
                        <TodoItems key={todos.id} title={todos.title} icon={avatar} date="Dec 12 at 9:00 PM" />
                        ))
                    }
                </div>
           
              <div className="flex items-center font-bold">
                <button
                  className="bg-purple-200 rounded-2xl p-2 w-10 h-10 mr-3 hover:bg-purple-400 duration-300 cursor-pointer"
                  onClick={() => setOpenAddModal(!openAddModal)}
                >
                  <img src={add} alt="add" />
                </button>
                <h3 className="text-base">Add To Do</h3>
              </div>
            </div>
          </div>
          <div className="font-bold h-[100px] flex flex-col justify-around mt-7">
            <h3>Board meeting</h3>
            <h3 className="text-sm text-gray-400 font-josefin">Feb 22 at 6:00 PM</h3>
            <p className="text-xs text-gray-400">
              You have been invited to attend a meeting of the Board of Directors.
            </p>
          </div>
        </div>
      </div>
      <AddToDoModal open={openAddModal} setOpen={setOpenAddModal} />
    </>
  );
};

export default Profile;
