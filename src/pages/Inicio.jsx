import { useEffect } from 'react'
import { Banner } from '../components/Banner/Banner'
import Slider1 from '../components/Slider/LazySlider1'
import Slider2 from '../components/Slider/LazySlider2'
import Slider3 from '../components/Slider/LazySlider3'
import Slider4 from '../components/Slider/LazySlider4'
import Slider5 from '../components/Slider/LazySlider5'
import Slider6 from '../components/Slider/LazySlider6'

export const Inicio = () => {
  useEffect(() => {
    document.title = 'Página de inicio — Netflix'
  }, [])

  return (
    <div style={style}>
      <Banner />
      <Slider1 />
      <Slider2 />
      <Slider3 />
      <Slider4 />
      <Slider5 />
      <Slider6 />
    </div>
  )
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  height: 'auto',
  width: '100%',
  backgroundColor: '#121212'
}
