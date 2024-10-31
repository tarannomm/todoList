import React from 'react';
import Dashboard from './template/dashboard';
import Profile from './template/Profile';
import SearchDropDown from './modules/SearchDropDown';
import { employees } from '../data/selectData';
import DashboardLayout from './layout/dashboardLayout';


type EmployeeOption = {
  id: number;
  name: string;
  code: string;
  avatar: string;
};

const ToDoDashboard: React.FC = () => {
  return (
    <div>
      <DashboardLayout>
        <div className='flex flex-grow h-screen overflow-y-auto flex-col items-center xl:items-start m-[2%]'>
          <div className='w-[200px] mt-[10px] xl:mt-0'>
            <SearchDropDown options={employees as EmployeeOption[]} />
          </div>
          <div className='flex w-[100%] justify-center xl:justify-end flex-wrap flex-row-reverse'>
            <Profile />
            <Dashboard />
          </div>
        </div>
      </DashboardLayout>
    </div>
  );
};

export default ToDoDashboard;
