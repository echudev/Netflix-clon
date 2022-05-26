import { useRef, useState } from 'react'
import { Header } from './Header/Header'
import { ButtonLeft } from './ButtonLeft/ButtonLeft';
import { ButtonRight } from './ButtonRight/ButtonRight';
import { Card } from './Card/Card';
import { useGetSizes } from './hooks/useGetSizes';
import { SliderStateProvider } from './context/SliderContext';

export const Slider = (props) => {
  const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] // 
  const slider = useRef(null);
  const [btnOpacity, setBtnOpacity] = useState(0);
  const [amount, itemWidth, itemHeight, btnWidth] = useGetSizes();

  const style = {
    slider_container: {
      position: 'relative',
      width: '100%',
      bottom: '80px',
      left: '0',
      marginBottom: '3vw',
      cursor: 'pointer',
      userSelect: 'none',
      overflow: 'hidden',
      WebkitTransform: 'translateZ(0)',
      MozTransform: 'translateZ(0)',
      msTransform: 'translateZ(0)',
      OTransform: 'translateZ(0)',
      transform: 'translateZ(0)',
    },
    slider: {
      display: 'flex',
      paddingTop: '2.5em',
      transform: `translateX(-${itemWidth * 0.75}%)`,
    }
  }

  const avanzar = () => {
    slider.current.style.transition = 'cubic-bezier(.42,.02,.37,1.06) 1s';
    const itemsWidth = slider.current.firstChild.getBoundingClientRect().width;
    slider.current.style.transform = `translateX(-${(itemsWidth * amount) + (itemsWidth * 0.25)}px)`;

    const restore = () => {
      slider.current.style.transition = 'none';
      slider.current.style.transform = `translateX(-${itemWidth * 0.75}%)`;
      for (let i = 0; i < Math.floor(amount); i++) {
        const firstChild = slider.current.firstChild;
        slider.current.append(firstChild)
      }
      slider.current.removeEventListener('transitionend', restore);
    }
    slider.current.addEventListener('transitionend', restore);
  }


  const retroceder = () => {
    for (let i = 0; i < Math.floor(amount); i++) {
      const lastChild = slider.current.lastChild;
      slider.current.prepend(lastChild)
    }

    slider.current.style.transition = 'none';
    const itemsWidth = slider.current.firstChild.getBoundingClientRect().width;
    slider.current.style.transform = `translateX(-${(itemsWidth * amount) + (itemsWidth * 0.25)}px)`;

    setTimeout(() => {
      slider.current.style.transition = 'cubic-bezier(.42,.02,.37,1.06) 1s';
      slider.current.style.transform = `translateX(-${itemWidth * 0.75}%)`;
    }, 30);
  }

  return (
    <SliderStateProvider>
      <div style={style.slider_container} >
        <Header titulo={props.titulo} />
        <ButtonLeft
          height={itemHeight}
          width={btnWidth}
          opacity={btnOpacity} setOpacity={setBtnOpacity}
          retroceder={retroceder}
        />
        <ButtonRight
          height={itemHeight}
          width={btnWidth}
          opacity={btnOpacity} setOpacity={setBtnOpacity}
          avanzar={avanzar}
        />
        <div
          ref={slider}
          style={style.slider}
          onMouseEnter={() => { setBtnOpacity(1) }}
          onMouseLeave={() => { setBtnOpacity(0) }}
        >
          {props.loading && fakeArray.map((data, index) => {
            return (<Card
              data={data} key={index}
              width={itemWidth} height={itemHeight} />)
          })}
          {props.data && props.data.results.map((data, i) => {
            return (<Card
              data={data} key={data.id}
              width={itemWidth} height={itemHeight} />)
          })}
        </div>
      </div>
    </SliderStateProvider>
  )
}
