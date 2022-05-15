import style from './Slider.module.css'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useRef, useState, useEffect } from 'react'
import { Header } from './Header/Header'
import { useGetWindowWidth } from './hooks/useGetWindowWidth'




export const Slider = () => {
  //useRef con el slider, para modificar posicion de los children en el DOM
  const slider = useRef(null);
  const apiArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  //array con listado de peliculas - series
  const [data, setData] = useState(apiArray);
  const [btnOpacity, setBtnOpacity] = useState(0);
  const windowWidth = useGetWindowWidth();
  const [items, setItems] = useState({
    amount: 5.5,
    width: 99 / 5.5,
    height: (99 / 5.5) / 1.8
  });

  useEffect(() => {
    if (windowWidth > 1050) {
      return setItems({
        amount: 5.5,
        width: 99 / 5.5,
        height: (99 / 5.5) / 1.8
      })
    } else if (windowWidth < 1050 && windowWidth >= 800) {
      return setItems({
        amount: 4.5,
        width: 99 / 4.5,
        height: (99 / 4.5) / 1.8
      })
    } else if (windowWidth < 800) {
      return setItems({
        amount: 3.5,
        width: 99 / 3.5,
        height: (99 / 3.5) / 1.8
      })
    }
  }, [windowWidth])

  const jsStyle = {  //estilo de los items del slider 
    slider: {
      display: 'flex',
      paddingTop: '3em',
      transform: `translateX(-${items.width * 0.75}vw)`,
    },
    item_box: {
      minWidth: items.width + 'vw',
      height: items.height + 'vw',
      color: 'rgb(209, 209, 209)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn_left: {
      position: 'absolute',
      left: '0',
      bottom: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '999',
      height: items.height + 'vw',
      width: items.width * 0.25 + 'vw',
      borderRadius: '5px',
      backgroundColor: 'rgba(0, 0, 0, 0.387)',
      cursor: 'pointer',
      userSelect: 'none',
      opacity: btnOpacity,
      transition: ' 0.2s ease-out all',
    },
    btn_right: {
      position: 'absolute',
      right: '0',
      bottom: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '999',
      height: items.height + 'vw',
      width: items.width * 0.25 + 'vw',
      borderRadius: '5px',
      backgroundColor: 'rgba(0, 0, 0, 0.387)',
      cursor: 'pointer',
      userSelect: 'none',
      opacity: btnOpacity,
      transition: ' 0.2s ease-out all',
    }
  }

  const avanzar = () => {
    slider.current.style.transition = 'cubic-bezier(.42,.02,.37,1.06) 1s';
    const itemsWidth = slider.current.firstChild.getBoundingClientRect().width;
    slider.current.style.transform = `translateX(-${(itemsWidth * items.amount) + (itemsWidth * 0.25)}px)`;

    const restore = () => {
      slider.current.style.transition = 'none';
      slider.current.style.transform = `translateX(-${items.width * 0.75}vw)`;
      for (let i = 0; i < Math.floor(items.amount); i++) {
        const firstChild = slider.current.firstChild;
        slider.current.append(firstChild)
      }
      slider.current.removeEventListener('transitionend', restore);
    }
    slider.current.addEventListener('transitionend', restore);
  }


  const retroceder = () => {
    for (let i = 0; i < Math.floor(items.amount); i++) {
      const lastChild = slider.current.lastChild;
      slider.current.prepend(lastChild)
    }

    slider.current.style.transition = 'none';
    const itemsWidth = slider.current.firstChild.getBoundingClientRect().width;
    slider.current.style.transform = `translateX(-${(itemsWidth * items.amount) + (itemsWidth * 0.25)}px)`;

    setTimeout(() => {
      slider.current.style.transition = 'cubic-bezier(.42,.02,.37,1.06) 1s';
      slider.current.style.transform = `translateX(-${items.width * 0.75}vw)`;
    }, 30);
  }



  return (
    <div className={style.slider_container}>
      <Header />
      <div
        style={jsStyle.btn_left}
        onMouseEnter={() => { setBtnOpacity(1) }}
        onMouseLeave={() => { setBtnOpacity(0) }}
        onClick={retroceder} >
        <ChevronLeftIcon className={style.btn} />
      </div>
      <div
        style={jsStyle.btn_right}
        onMouseEnter={() => { setBtnOpacity(1) }}
        onMouseLeave={() => { setBtnOpacity(0) }}
        onClick={avanzar} >
        <ChevronRightIcon className={style.btn} />
      </div>
      <div
        style={jsStyle.slider}
        ref={slider}
        onMouseEnter={() => { setBtnOpacity(1) }}
        onMouseLeave={() => { setBtnOpacity(0) }}
      >
        {data.map((item, index) => {
          return (
            <div style={jsStyle.item_box} key={index}>
              <div className={style.item_content}>
                <div>{item}</div>
              </div>
            </div>)
        })}
      </div>
    </div>
  )
}
