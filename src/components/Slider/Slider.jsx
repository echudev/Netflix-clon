import { useRef, useState } from 'react'
import { Header } from './Header/Header'
import { ButtonLeft } from './ButtonLeft/ButtonLeft';
import { ButtonRight } from './ButtonRight/ButtonRight';
import { Card } from './Card/Card';
import { useGetSliderConfig } from './hooks/useGetSliderConfig.js';
import style from './Slider.module.css';

export const Slider = (props) => {
  const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // 
  const slider = useRef(null);
  const [btnOpacity, setBtnOpacity] = useState(0);
  const [cardsToShow, cardWidth, cardHeight, btnWidth] = useGetSliderConfig();


  const avanzar = () => {
    slider.current.style.transition = 'cubic-bezier(.42,.02,.37,1.06) 1s';
    const itemsWidth = slider.current.firstChild.getBoundingClientRect().width;
    slider.current.style.transform = `translateX(-${(itemsWidth * cardsToShow) + (itemsWidth * 0.25)}px)`;
    const restore = () => {
      slider.current.style.transition = 'none';
      slider.current.style.transform = `translateX(-${cardWidth * 0.75}%)`;
      for (let i = 0; i < Math.floor(cardsToShow); i++) {
        const firstChild = slider.current.firstChild;
        slider.current.append(firstChild)
      }
      slider.current.removeEventListener('transitionend', restore);
    }
    slider.current.addEventListener('transitionend', restore);
  }


  const retroceder = () => {
    for (let i = 0; i < Math.floor(cardsToShow); i++) {
      const lastChild = slider.current.lastChild;
      slider.current.prepend(lastChild)
    }
    slider.current.style.transition = 'none';
    const itemsWidth = slider.current.firstChild.getBoundingClientRect().width;
    slider.current.style.transform = `translateX(-${(itemsWidth * cardsToShow) + (itemsWidth * 0.25)}px)`;
    setTimeout(() => {
      slider.current.style.transition = 'cubic-bezier(.42,.02,.37,1.06) 1s';
      slider.current.style.transform = `translateX(-${cardWidth * 0.75}%)`;
    }, 30);
  }


  return (
      <div className={style.slider_container} >
        <Header titulo={props.titulo} />
        <ButtonLeft
          height={cardHeight}
          width={btnWidth}
          opacity={btnOpacity} setOpacity={setBtnOpacity}
          retroceder={retroceder}
        />
        <ButtonRight
          height={cardHeight}
          width={btnWidth}
          opacity={btnOpacity} setOpacity={setBtnOpacity}
          avanzar={avanzar}
        />
        <div
          ref={slider}
          className={style.slider}
          style={{ transform: `translateX(-${cardWidth * 0.75}%)` }}
          onMouseEnter={() => { setBtnOpacity(1) }}
          onMouseLeave={() => { setBtnOpacity(0) }}
        >
          {props.data.loading && fakeArray.map((data, i) => {
            return (<Card
              data={data} key={i}
              width={cardWidth} height={cardHeight} />)
          })}
          {props.data.collection && props.data.collection.results.map(data => {
            return (<Card
              data={data} key={data.id} 
              width={cardWidth} height={cardHeight} />)
          })}
        </div>
      </div>
  )
}
