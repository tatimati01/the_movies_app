import React from 'react';
import {NavLink} from "react-router-dom";

import UserInfo from "../UserInfo/UserInfo";
import css from '../../App.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.navbar}>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
            </div>
            <div>
                <UserInfo/>
            </div>
        </div>
    );
};

export default Header;