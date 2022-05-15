import { Slider } from '../components/Slider/Slider';
import { Banner } from '../components/Banner/Banner';


export const Inicio = () => {
  return (
    <div style={style}>
      <Banner />
      <Slider />
    </div>
  )
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '#121212',
}

