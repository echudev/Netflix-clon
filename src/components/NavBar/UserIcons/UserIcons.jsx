import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import profilePic from './img/profile2.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import style from './UserIcons.module.css';

export const UserIcons = () => {
    return (
        <div className={style.userIcons}>
            <NotificationsIcon className={style.notif} />
            <img src={profilePic} className={style.user}></img>
            <ArrowDropDownIcon className={style.arrow}/>
        </div>
    )
}
