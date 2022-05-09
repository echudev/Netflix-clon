import React from 'react'
import './UserIcons.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import profilePic from '../../.././img/profile1.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const UserIcons = () => {
    return (
        <div className="user-icons">
            <NotificationsIcon className="notif-icon" />
            <img src={profilePic} height="30" className="user-icon"></img>
            <ArrowDropDownIcon className="arrow-icon"/>
        </div>
    )
}
