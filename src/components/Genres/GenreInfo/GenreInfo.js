import React from 'react';
import {NavLink,Outlet} from "react-router-dom";

const GenreInfo = ({genre}) => {
    return (
        <div>
            <NavLink to={':genreName'}>{genre.name}</NavLink>
            <Outlet/>
        </div>
    );
};

export default GenreInfo;