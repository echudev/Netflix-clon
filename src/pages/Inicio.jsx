import { Slider } from '../components/Slider/Slider';
import { Banner } from '../components/Banner/Banner';
import { useGetAPI } from '../hooks/useGetAPI';


export const Inicio = () => {

const [s1_loading, s1_data, s1_error] = useGetAPI('movie','top_rated','es','1');
const [s2_loading, s2_data, s2_error] = useGetAPI('tv','popular','es','1');
const [s3_loading, s3_data, s3_error] = useGetAPI('movie','popular','es','1');

  return (
    <div style={style}>
      <Banner />
      <Slider titulo={'Películas premiadas'} data={s1_data} loading={s1_loading} error={s1_error}/>
      <Slider titulo={'Series populares'} data={s2_data} loading={s2_loading} error={s2_error}/>
      <Slider titulo={'Peliculas más vistas'} data={s3_data} loading={s3_loading} error={s3_error}/>
    </div>
  )
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '#121212',
}

