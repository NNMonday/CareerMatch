import React from 'react';
import MainNavbar from '../components/common/MainNavBar';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Container } from 'react-bootstrap';

const MainLayout = (props) => {
    document.title = props.title; 
 
    return (
        <>
            <div className='container-md'>
                <MainNavbar />
                <Header />
                {props.children}
            </div>

        </>
    );
};

export default MainLayout;