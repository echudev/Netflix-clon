import { useEffect } from 'react';
import { Slider } from '../components/Slider/Slider';
import { Banner } from '../components/Banner/Banner';
import { useGetApiData } from '../hooks/useGetApiData';
import { useGetBanner } from '../hooks/useGetBanner';
import { useGetApiDiscover } from '../hooks/useGetApiDiscover';

export const Inicio = () => {

  const q1 = { type: 'movie', collection: 'top_rated', lang: 'en', page: 1 };
  const q2 = { type: 'tv', with_genres: '16',sort_by: 'vote_average.desc', lang: 'en' , page: 1 };
  const q3 = { type: 'movie', collection: 'popular', lang: 'en', page: 1 };
  const q4 = { type: 'tv', with_genres: '99',sort_by: 'vote_average.desc', lang: 'en' , page: 1 };
  const q5 = { type: 'movie', with_genres: '27',sort_by: '', lang: 'en' , page: 1 };
  const q6 = { type: 'movie', with_genres: '10749',sort_by: 'vote_average.desc', lang: 'en' , page: 1 };

  const slider1_data = useGetApiData(q1.type, q1.collection, q1.lang, q1.page);
  const slider2_data = useGetApiDiscover(q2.type, q2.sort_by, q2.with_genres, q2.lang, q2.page);
  const slider3_data = useGetApiData(q3.type, q3.collection, q3.lang, q3.page);
  const slider4_data = useGetApiDiscover(q4.type, q4.sort_by, q4.with_genres, q4.lang, q4.page);
  const slider5_data = useGetApiDiscover(q5.type, q5.sort_by, q5.with_genres, q5.lang, q5.page);
  const slider6_data = useGetApiDiscover(q6.type, q6.sort_by, q6.with_genres, q6.lang, q6.page);
  const [b_loading, b_data, b_logo] = useGetBanner(q3.type, q3.collection, q3.lang, q3.page);

  useEffect(() => {
    document.title = `Página de inicio — Netflix`;
  }, [])

  return (
    <div style={style}>
      <Banner
        data={b_data}
        loading={b_loading}
        logo={b_logo} />
      <Slider
        titulo={'Películas premiadas'}
        data={slider1_data}
      />
      <Slider
        titulo={'Series animadas'}
        data={slider2_data}
      />
      <Slider
        titulo={'Estrenos'}
        data={slider3_data}
      />
      <Slider
        titulo={'Documentales'}
        data={slider4_data}
      />
      <Slider
        titulo={'Pelis de Terror'}
        data={slider5_data}
      />
      <Slider
        titulo={'Románticas'}
        data={slider6_data}
      />
    </div>
  )
}

const style = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '#121212',
}

