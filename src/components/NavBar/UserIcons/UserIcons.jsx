import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import profilePic from './img/profile2.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import style from './UserIcons.module.css';

export const UserIcons = () => {
    return (
        <div className={style.userIcons}>
            <NotificationsIcon
                style={{
                    fontSize: 'x-large',
                    margin: '0 10px',
                    cursor: 'pointer',
                }} />
            <img src={profilePic} className={style.user}></img>
            <ArrowDropDownIcon
                style={{
                    position: 'relative',
                    margin: '0',
                    right: '8px',
                    cursor: 'pointer',
                }} />
        </div>
    )
}
