import React, { useState } from 'react';
import balance from "../../assets/cards/balance.svg";
import tax from "../../assets/cards/tax.svg";
import working from "../../assets/cards/working.svg";
import spending from "../../assets/cards/spending.svg";
import CardSm from '../modules/CardSm';
import CardMd from '../modules/CardMd';
import { Button } from '@nextui-org/react';
import MettingItems from '../modules/MettingItems';
import Chart from '../modules/LineChart';
import chartdata from "../../data/chartData.json";
import AddMeeting from './modals/AddMetting';
import EmpDropDown from '../modules/SearchDropDown';
import { employees } from '../../data/selectData';

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

    const meetings = [
        { profile: tax, user: "tarannom", title: "ggggg", date: "12:00 pm" },
        { profile: balance, user: "tarannom azimi", title: "We have a meeting in fvfvrf", date: "dec 12:00 pm" },
        { profile: tax, user: "tarannom", title: "ggggg", date: "12:00 pm" }
    ];

    return (
        <div className='flex flex-col gap-6 pt-6'>
            <div className='w-[200px]'>
                <EmpDropDown type="dashboard" options={employees} />
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-wrap justify-around'>
                {smCards.map((sm, index) => <CardSm key={index} data={sm} />)}
            </div>

            <div className='w-full flex justify-around'>
                <div className='flex flex-col gap-5'>
                    {mdCards.map((md, index) => <CardMd key={index} data={md} />)}
                </div>
                <div className='w-[70%] bg-white rounded-3xl shadow-lg'>
                    <Chart grid data={chartdata} />
                </div>
            </div>

            <div className='grid gap-3'>
                <div className='flex justify-between'>
                    <h1 className='text-xl font-bold'>Meeting Time</h1>
                    <Button className='text-base font-bold' color='secondary' variant='bordered' onClick={() => setMeetingModalOpen(true)}>
                        Add Meeting
                    </Button>
                </div>
                <div className='w-full h-[332px] overflow-y-auto'>
                    {meetings.map((meeting, index) => <MettingItems key={index} meeting={meeting} />)}
                </div>
            </div>
            <AddMeeting open={meetingModalOpen} setOpen={setMeetingModalOpen} />
        </div>
    );
};

export default Dashboard;
