import { useRef, useState, useEffect } from 'react'
import { useGetWindowWidth } from './hooks/useGetWindowWidth'
import { Header } from './Header/Header'
import { ButtonLeft } from './ButtonLeft/ButtonLeft';
import { ButtonRight } from './ButtonRight/ButtonRight';
import { Scale } from '@mui/icons-material';


export const Slider = () => {
  //useRef con el slider, para modificar posicion de los children en el DOM
  const slider = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const apiArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  //array con listado de peliculas - series
  const [data, setData] = useState(apiArray);
  const [btnOpacity, setBtnOpacity] = useState(0);
  const windowWidth = useGetWindowWidth();
  const [sizes, setSizes] = useState({
    amount: 5.5,
    itemWidth: 100 / 5.5,
    itemHeight: (100 / 5.5) / 1.8,
    btnWidth: (100 / 5.5) * 0.25
  });

  useEffect(() => {
    if (windowWidth > 1050) {
      return setSizes({
        amount: 5.5,
        itemWidth: 100 / 5.5,
        itemHeight: (100 / 5.5) / 1.8,
        btnWidth: (100 / 5.5) * 0.25
      })
    } else if (windowWidth < 1050 && windowWidth >= 800) {
      return setSizes({
        amount: 4.5,
        itemWidth: 100 / 4.5,
        itemHeight: (100 / 4.5) / 1.8,
        btnWidth: (100 / 4.5) * 0.25
      })
    } else if (windowWidth < 800) {
      return setSizes({
        amount: 3.5,
        itemWidth: 100 / 3.5,
        itemHeight: (100 / 3.5) / 1.8,
        btnWidth: (100 / 3.5) * 0.25
      })
    }
  }, [windowWidth])

  const style = {  //estilo de los items del slider 
    slider_container: {
      position: 'relative',
      width: '100%',
      overflowX: 'hidden',
      bottom: '70px',
      left: '0',
      cursor: 'pointer',
      userSelect: 'none',
    },
    slider: {
      display: 'flex',
      paddingTop: '3em',
      transform: `translateX(-${sizes.itemWidth * 0.75}%)`,
    },
    item_box: {
      position: 'relative',
      minWidth: sizes.itemWidth + '%',
      height: sizes.itemHeight + 'vw',
      color: 'rgb(209, 209, 209)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    item_box_content: {
      width: '98%',
      height: '98%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgb(65, 91, 25)',
    },
    modal_box: {
      display: 'none',
      position: 'absolute',
      width: '100%',
      height: '100%',
      border: '1px solid yellow',
    }
  }

  const avanzar = () => {
    slider.current.style.transition = 'cubic-bezier(.42,.02,.37,1.06) 1s';
    const itemsWidth = slider.current.firstChild.getBoundingClientRect().width;
    slider.current.style.transform = `translateX(-${(itemsWidth * sizes.amount) + (itemsWidth * 0.25)}px)`;

    const restore = () => {
      slider.current.style.transition = 'none';
      slider.current.style.transform = `translateX(-${sizes.itemWidth * 0.75}%)`;
      for (let i = 0; i < Math.floor(sizes.amount); i++) {
        const firstChild = slider.current.firstChild;
        slider.current.append(firstChild)
      }
      slider.current.removeEventListener('transitionend', restore);
    }
    slider.current.addEventListener('transitionend', restore);
  }


  const retroceder = () => {
    for (let i = 0; i < Math.floor(sizes.amount); i++) {
      const lastChild = slider.current.lastChild;
      slider.current.prepend(lastChild)
    }

    slider.current.style.transition = 'none';
    const itemsWidth = slider.current.firstChild.getBoundingClientRect().width;
    slider.current.style.transform = `translateX(-${(itemsWidth * sizes.amount) + (itemsWidth * 0.25)}px)`;

    setTimeout(() => {
      slider.current.style.transition = 'cubic-bezier(.42,.02,.37,1.06) 1s';
      slider.current.style.transform = `translateX(-${sizes.itemWidth * 0.75}%)`;
    }, 30);
  }

  const handlerShowModal = (e) => {
    setShowModal(true);
  }
  const handlerHideModal = (e) => {
    setShowModal(false)
  }

  return (
    <div style={style.slider_container}>
      <Header />
      <ButtonLeft
        sizes={sizes}
        retroceder={retroceder}
        btnOpacity={btnOpacity} setBtnOpacity={setBtnOpacity}
      />
      <ButtonRight
        sizes={sizes}
        avanzar={avanzar}
        btnOpacity={btnOpacity} setBtnOpacity={setBtnOpacity}
      />
      <div
        style={style.slider}
        ref={slider}
        onMouseEnter={() => { setBtnOpacity(1) }}
        onMouseLeave={() => { setBtnOpacity(0) }}
      >
        {data.map((item, index) => {
          return (
            <div style={style.item_box} key={index}
              onMouseEnter={(e) => handlerShowModal(e)}
              onMouseLeave={(e) => handlerHideModal(e)}>
              <div style={style.item_box_content}>
                <div>{item}</div>
              </div>
              <div style={style.modal_box} key={index}>un modal</div>
            </div>)
        })}
      </div>
    </div>
  )
}
