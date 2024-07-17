import React from 'react';
import MainNavbar from '../components/common/MainNavBar';
import Header from '../components/common/Header';
import SideBar from '../components/SideBar';
import clsx from 'clsx';

const MainLayout = ({ title, children, showSidebar }) => {
    document.title = title;

    return (
        <>
            <div className={clsx([showSidebar && 'bcontainer', 'container-md'])}>
                <MainNavbar />
                <Header />
                <div className={clsx([showSidebar && 'vh-100 d-flex'])}>
                    {showSidebar && <SideBar />}
                    {children}
                </div>
            </div>

        </>
    );
};

export default MainLayout;