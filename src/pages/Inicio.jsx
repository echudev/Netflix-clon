import { Slider } from '../components/Slider/Slider';
import { Banner } from '../components/Banner/Banner';


export const Inicio = () => {
  
  // const key = '5bb03364720dd995704773221faeb9ba';
  // const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}`;
  // const [loading, data, error] = useGetAxios(url);

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

