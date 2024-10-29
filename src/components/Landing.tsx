import React from 'react';
import DashboardLayout from './layout/dashboardLayout';
import Dashboard from './template/dashboard';
import Profile from './template/Profile';

const ToDoDashboard = () => {
    return (
        <div>
            <DashboardLayout>
                <div className=' flex flex-grow justify-around  flex-wrap flex-row-reverse'>
                   <Profile/>   
                   <Dashboard/>
                   
                </div>
              
            </DashboardLayout>
            
        </div>
    );
};

export default ToDoDashboard;