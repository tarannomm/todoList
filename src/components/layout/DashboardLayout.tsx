import React from 'react';
import Menu from '../template/Navbar';
 
const DashboardLayout = ({children}) => {
    return (
        <div className='bg-indigo-50 flex'>
            <Menu/>
            {children}
        </div>
    );
};

export default DashboardLayout;