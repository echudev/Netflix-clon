import style from './Banner.module.css'
import { useGetBanner } from '../../hooks/useGetBanner'
import { InfoButton } from './InfoButton/InfoButton'
import { PlayButton } from './PlayButton/PlayButton'

export const Banner = () => {
  const query = { type: 'movie', collection: 'popular', lang: 'en', page: 1 }
  const [loading, data, logo] = useGetBanner(query)

  return (<div style={{ height: '100vh' }}>
        {loading && <div className={style.banner_loading}></div>}
        {data &&
            <div
                className={style.banner}
                style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,  rgb(0 0 0 / 35%) 10%, rgb(0 0 0 / 35%) 80%,#121212 100%), url(https://image.tmdb.org/t/p/original/${data.backdrop_path})` }}>
                <div className={style.content}>
                    <div>
                        {logo
                          ? <img className={style.logo} src={`https://image.tmdb.org/t/p/original/${logo}`} alt="logo" />
                          : <h1 className={style.banner_content_text_h1}>{data.title}</h1>}
                        <p className={style.banner_content_text_p}>{data.overview}</p>
                    </div>
                    <div className={style.buttons}>
                        <PlayButton />
                        <InfoButton />
                    </div>
                </div>
            </div >}
    </div>)
}
