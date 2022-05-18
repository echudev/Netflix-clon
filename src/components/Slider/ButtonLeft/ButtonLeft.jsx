import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from 'react';

export const ButtonLeft = (props) => {
    const [scale, setScale] = useState('1');

    const style = {
        btn_left: {
            position: 'absolute',
            left: '0',
            bottom: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '99',
            height: props.sizes.itemHeight + 'vw',
            width: props.sizes.btnWidth + '%',
            borderRadius: '5px',
            backgroundColor: 'rgba(0, 0, 0, 0.387)',
            cursor: 'pointer',
            userSelect: 'none',
            opacity: props.btnOpacity,
            transition: ' 0.2s ease-out all',
        },
        icon: {
            color: 'white',
            fontSize: '6vw',
            transition: '.15s',
            transform: `scale(${scale})`,
        }
    }

    const handlerHoverIn = () => {
        setScale('1.3');
        props.setBtnOpacity(1);
    }
    const handlerHoverOut = () => {
        setScale('1');
        props.setBtnOpacity(0);
    }

    return (
        <div
            style={style.btn_left}
            onMouseEnter={handlerHoverIn}
            onMouseLeave={handlerHoverOut}
            onClick={props.retroceder} >
            <ChevronLeftIcon style={style.icon} />
        </div>
    )
}
