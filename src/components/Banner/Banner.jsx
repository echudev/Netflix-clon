import style from './Banner.module.css';
import { InfoButton } from './InfoButton/InfoButton';
import { PlayButton } from './PlayButton/PlayButton';

export const Banner = (props) => {
 
    return (<>
        {props.loading && <div className={style.banner}></div>}
        {props.data &&
            <div
                className={style.banner}
                style={{ backgroundImage: `linear-gradient(to bottom, rgb(0 0 0 / 80%) 0%, rgb(0 0 0 / 35%) 10%, 70%,rgb(0 0 0 / 70%) 90%), url(https://image.tmdb.org/t/p/original/${props.data.backdrop_path})` }}>
                {/* <div className={style.video_container} >
                    <div className={style.video_filter}></div>
                    <iframe className={style.video}
                        src="https://www.youtube.com/embed/qehG9dKVDG4?&autoplay=1&loop=1&rel=0&showinfo=0&mute=1&controls=0&playlist=qehG9dKVDG4"
                        frameborder="0"
                        allow="autoplay; loop; modestbranding; clipboard-write; encrypted-media;"
                        allowfullscreen>
                    </iframe>
                </div> */}
                <div className={style.content}>
                    <div>
                        {props.logo ? <img className={style.logo} src={`https://image.tmdb.org/t/p/original/${props.logo}`} alt="logo" />
                            : <h1 className={style.banner_content_text_h1}>{props.data.title}</h1>}
                        <p className={style.banner_content_text_p}>{props.data.overview}</p>
                    </div>
                    <div className={style.buttons}>
                        <PlayButton />
                        <InfoButton />
                    </div>
                </div>
            </div >}
    </>)
}