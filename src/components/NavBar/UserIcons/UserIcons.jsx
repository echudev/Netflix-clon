import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import profilePic from '../../.././img/profile1.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export const UserIcons = () => {
    const iconStyle = {
        userIcons: {
            display:'flex',
            alignItems:'center',
            color:'white',
            marginRight:'30px',
        },
        user: {
            margin:'0 10px',
            borderRadius:'3px',
            height:'30px',
        },
        notif: {
            margin:'0 10px',
        },
        arrow: {
            position:'relative',
            margin:'0',
            right:'8px',
        }
    }

    return (
        <div style={iconStyle.userIcons}>
            <NotificationsIcon style={iconStyle.notif} />
            <img src={profilePic} style={iconStyle.user}></img>
            <ArrowDropDownIcon style={iconStyle.arrow}/>
        </div>
    )
}
