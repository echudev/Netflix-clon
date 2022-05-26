import { Slider } from '../components/Slider/Slider';
import { Banner } from '../components/Banner/Banner';
import { useGetAPI } from '../hooks/useGetAPI';


export const Inicio = () => {
  
  const q1 = { type: 'movie', collection: 'top_rated', lang: 'es', page: 1 };
  const q2 = { type: 'tv', collection: 'popular', lang: 'es', page: 1 };
  const q3 = { type: 'movie', collection: 'popular', lang: 'es', page: 1 };

  const [s1_loading, s1_data, s1_error] = useGetAPI(q1.type, q1.collection, q1.lang, q1.page);
  const [s2_loading, s2_data, s2_error] = useGetAPI(q2.type, q2.collection, q2.lang, q2.page);
  const [s3_loading, s3_data, s3_error] = useGetAPI(q3.type, q3.collection, q3.lang, q3.page);


  return (
    <div style={style}>
      <Banner data={s3_data} loading={s3_loading}/>
      <Slider titulo={'Películas premiadas'} data={s1_data} loading={s1_loading} error={s1_error} />
      <Slider titulo={'Series populares'} data={s2_data} loading={s2_loading} error={s2_error} />
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

