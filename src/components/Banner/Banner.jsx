import style from './Banner.module.css';
import { InfoButton } from './InfoButton/InfoButton';
import { PlayButton } from './PlayButton/PlayButton';
import { generateRandom } from '../../../src/utils/generateRandom';


export const Banner = (props) => {
    const i = generateRandom(0, 19);

    // const getBannerData = (id) => {
    //     const url = `https://api.themoviedb.org/3/tv/${id}?api_key=${key}`;
    //     const [loading, data, error] = useGetAxios(url);
    //     return data;
    // }

    return (<>
        {props.loading && <div className={style.banner}></div>}
        {props.data &&
            <div className={style.banner} style={{ backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 40%) 0%, rgb(0 0 0 / 25%) 30%, 70%,rgb(0 0 0 / 70%) 90%), url(https://image.tmdb.org/t/p/original/${props.data.results[i].backdrop_path})` }}>
                <div className={style.content}>
                    <div>
                        <h1 className={style.banner_content_text_h1}>
                            {props.data.results[i].title}
                        </h1>
                        <p className={style.banner_content_text_p}>
                            {props.data.results[i].overview}
                        </p>
                    </div>
                    <div className={style.buttons}>
                        <PlayButton />
                        <InfoButton />
                    </div>
                </div>
            </div >}
    </>)
}

