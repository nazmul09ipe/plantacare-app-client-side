import React from 'react';

import { Outlet } from 'react-router';
import Footer from '../../Components/ui/Footer';
import Navbar from '../../Components/ui/Navbar/Nav';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;