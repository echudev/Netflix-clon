import './Slider.css'
import { useRef, useEffect, useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

export const Slider = (props) => {

  //useRef con el slider, para modificar posicion de los children en el DOM
  const slider = useRef(null);

  const apiArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  //cantidad de items que se van a mostrar en el slider
  const showItems = 5;
  const margins = 30
  //width de cada item del slider (para que se vea bien)
  const itemWidth = (90 / showItems);

  //array con listado de peliculas - series
  const [items, setItems] = useState(apiArray);


  //estilo de los items del slider (solo width calculado)
  const styles = {
    item: {
      minWidth: itemWidth + 'vw'
    }
  }

  const avanzar = () => {
    slider.current.style.transition = '500ms ease-in-out all';
    const itemsWidth = slider.current.firstChild.offsetWidth;
    slider.current.style.transform = `translateX(-${(itemsWidth * showItems) + margins}px)`;

    const restore = () => {
      slider.current.style.transition = 'none';
      slider.current.style.transform = `translateX(0px)`;
      for (let i = 0; i < showItems; i++) {
        const firstChild = slider.current.firstChild;
        slider.current.append(firstChild)
      }
      slider.current.removeEventListener('transitionend', restore);
    }
    slider.current.addEventListener('transitionend', restore);
  }


  const retroceder = () => {
    for (let i = 0; i < showItems; i++) {
      const lastChild = slider.current.lastChild;
      slider.current.prepend(lastChild)
    }
    slider.current.style.transition = 'none';
    const itemsWidth = slider.current.lastChild.offsetWidth;
    slider.current.style.transform = `translateX(-${(itemsWidth * showItems) + margins}px)`;

    setTimeout(() => {
      slider.current.style.transition = '500ms ease-in-out all';
      slider.current.style.transform = `translateX(0px)`;
    }, 30);
  }



  return (
    <>
      <div className="slider-container">
        <div className='btn-left' onClick={retroceder}>
          <ChevronLeftIcon className="btn" />
        </div>
        <div className="slider" ref={slider}>
          {items.map((item, index) => {
            return (
              <div className="item" key={index} style={styles.item}>
                <div className="item-content">
                  <h2>{item}</h2>
                </div>
              </div>)
          })}
        </div>
        <div className='btn-right' onClick={avanzar}>
          <ChevronRightIcon className="btn" />
        </div>
      </div>
    </>
  )
}
