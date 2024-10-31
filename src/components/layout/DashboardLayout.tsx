import React, { ReactNode } from 'react';
import Menu from '../template/Navbar';

interface DashboardLayoutProps {
    children: ReactNode;
}
const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className='bg-indigo-50 flex'>
            <Menu />
            {children}
        </div>
    );
};

export default DashboardLayout;
