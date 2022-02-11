import React from 'react';

import css from '../../App.module.css'

const UserInfo = () => {
    return (
        <div className={css.userInfo}>
            <div className={css.userAvatar}>
                A
            </div>
            <h3>User name</h3>
        </div>
    );
};

export default UserInfo;