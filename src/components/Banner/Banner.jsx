import { useGetAxios } from '../../.././src/hooks/useGetAxios';
import style from './Banner.module.css';
import { InfoButton } from './InfoButton/InfoButton';
import { PlayButton } from './PlayButton/PlayButton';
import { generateRandom } from '../../../src/utils/generateRandom';
import { useRef } from 'react';


export const Banner = () => {

    const key = '5bb03364720dd995704773221faeb9ba';
    const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}`;
    const [loading, data, error] = useGetAxios(url);
    const i = useRef(generateRandom(0, 19));



    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error...</div>
    }
    if (!data) {
        return <div>No data...</div>
    }
    if (data) {
        const embStyle = {
            banner: {
                position: 'relative',
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.results[i.current].backdrop_path})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backdropFilter: 'brightness(0.2)',
            }
        }

        return (
            <div style={embStyle.banner} >
                <div className={style.content}>
                    <div>
                        <h1 className={style.banner_content_text_h1}>
                            {data.results[i.current].name}
                        </h1>
                        <p className={style.banner_content_text_p}>
                            {data.results[i.current].overview}
                        </p>
                    </div>
                    <div className={style.buttons}>
                        <PlayButton />
                        <InfoButton />
                    </div>
                </div>
            </div >
        )
    }
}

