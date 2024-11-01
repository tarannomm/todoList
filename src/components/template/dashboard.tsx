import React, { useState } from 'react';
import balance from "../../assets/cards/balance.svg";
import tax from "../../assets/cards/tax.svg";
import working from "../../assets/cards/working.svg";
import spending from "../../assets/cards/spending.svg";
import CardSm from '../modules/CardSm';
import CardMd from '../modules/CardMd';
import { Button, avatar } from '@nextui-org/react';
import MettingItems from '../modules/MettingItems';
import Chart from '../modules/LineChart';
import chartdata from "../../data/chartData.json";
import AddMeeting from './modals/AddMetting';
import { initialMeeting } from '../../data/selectData';
import { useSelector } from 'react-redux';
import prof from "../../assets/avatars/avatar3.png"

const Dashboard = () => {
    const [meetingModalOpen, setMeetingModalOpen] = useState(false);

    const smCards = [
        { title: "Your Bank balance", amount: "$123.423", icon: balance },
        { title: "Your tax", amount: "$43.110", icon: tax },
        { title: "Employees working today", amount: "24", icon: working },
        { title: "This week's card spending", amount: "$3.287", icon: spending },
    ];

    const mdCards = [
        { title: "New Clients", amount: 54, percent: 18.7, positive: true },
        { title: "Invoice overdue", amount: 6, percent: 2.7, positive: false },
    ];

     //ACCESS TO REDUX MEETING ITEMS 
    const MEETINGItems = useSelector((state: any) => state.myArray.meeting);

    return (
        <div className='flex flex-col w-[100%] xl:w-[69%] gap-6 pt-6'>
          <div className="w-full grid gap-5 grid-cols-2 xl:grid-cols-4 justify-center place-items-center flex-wrap">
            {smCards.map((sm, index) => <CardSm key={index} data={sm} />)}
        </div>
        <div className='w-full flex flex-col xl:flex-row  justify-around flex-wrap'>
            <div className=' w-[100%] xl:w-[26%] flex xl:flex-col justify-around xl:justify-between xl:h-[302px] xl:gap-5  my-4 xl:my-0'>
                {mdCards.map((md, index) => <CardMd key={index} data={md} />)}
            </div>
            <div className='w-[95%] xl:w-[68%] bg-white rounded-3xl shadow-lg m-auto'>
                <Chart grid  data={chartdata} />
            </div>
        </div>
            <div className='grid gap-3'>
                <div className='flex justify-between px-3'>
                    <h1 className='text-xl font-bold'>Meeting Time</h1>
                    <Button className='text-base font-bold' color='secondary' variant='bordered' onClick={() => setMeetingModalOpen(true)}>
                        Add Meeting
                    </Button>
                </div>
                <div className="w-full h-[220px] overflow-y-auto ">
          {MEETINGItems.reverse().map((meet) => (
            <MettingItems
              key={meet.id}
              profile={prof}
              title={meet.course}
              user={meet.email}
              date={meet.date}
            />
          ))}
          {initialMeeting.map((meeting, index) => (
            <MettingItems
              key={index}
              profile={meeting.profile}
              title={meeting.title}
              user={meeting.user}
              date={meeting.date}
            />
          ))}
        </div>
            </div>
            <AddMeeting open={meetingModalOpen} setOpen={setMeetingModalOpen} />
        </div>
    );
};

export default Dashboard;
