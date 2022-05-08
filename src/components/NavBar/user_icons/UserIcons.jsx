import React from 'react'
import './UserIcons.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const UserIcons = () => {
    return (
        <div className="user-icons">
            <p className="user-icon">Niños</p>
            <NotificationsIcon className="user-icon" />
            <AccountCircleIcon className="user-icon" />
        </div>
    )
}
