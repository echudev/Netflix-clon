import { useGetSliderConfig } from '../../hooks/useGetSliderConfig.js'
import style from './Slider.module.css'

const LoadingSlider = () => {
  const fakeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [cardWidth, cardHeight] = useGetSliderConfig()
  const card = {
    position: 'relative',
    display: 'flex',
    minWidth: cardWidth + '%',
    height: cardHeight + 'vw',
    backgroundColor: 'transparent'
  }

  return (
    <div className={style.slider_container} >
      <div
        className={style.slider}
        style={{ transform: `translateX(-${cardWidth * 0.75}%)` }}
      >
    {fakeArray.map((data, i) => {
      return (
      <div key={i} style={card}></div>
      )
    })}
      </div>
    </div>
  )
}

export default LoadingSlider
