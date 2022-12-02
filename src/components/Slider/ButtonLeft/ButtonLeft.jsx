import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useState } from 'react'

export const ButtonLeft = (props) => {
  const [scale, setScale] = useState('1')

  const style = {
    btn_left: {
      position: 'absolute',
      left: '0',
      bottom: '0',
      display: props.firstSlide ? 'none' : 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '999',
      height: props.height + 'vw',
      width: props.width + '%',
      borderRadius: '5px',
      backgroundColor: 'rgba(0, 0, 0, 0.387)',
      cursor: 'pointer',
      userSelect: 'none',
      opacity: props.opacity
    },
    icon: {
      color: 'white',
      fontSize: '6vw',
      transition: '.15s',
      transform: `scale(${scale})`
    }
  }

  const handlerHoverIn = () => {
    setScale('1.3')
    props.setOpacity(1)
  }
  const handlerHoverOut = () => {
    setScale('1')
    props.setOpacity(0)
  }

  return (<>
        <div
            style={style.btn_left}
            onMouseEnter={handlerHoverIn}
            onMouseLeave={handlerHoverOut}
            onClick={props.retroceder} >
            <ChevronLeftIcon style={style.icon} />
        </div>
   </>)
}
