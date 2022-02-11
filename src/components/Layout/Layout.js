import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import css from '../../App.module.css'

const Layout = () => {
    return (
        <div>
            <Header/>
            <div className={css.mainContent}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;