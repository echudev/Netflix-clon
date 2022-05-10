import { useGetAxios } from '../../.././src/hooks/useGetAxios';
import './Banner.css';
import { InfoButton } from './InfoButton/InfoButton';
import { PlayButton } from './PlayButton/PlayButton';


export const Banner = () => {

    const key = '5bb03364720dd995704773221faeb9ba';
    const url = `https://api.themoviedb.org/3/trending/tv/week?api_key=${key}`;
    const [loading, data, error] = useGetAxios(url);
    

    console.log(data)

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
        const style = {
            banner: {
                position: 'relative',
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backdropFilter: 'brightness(0.2)',
            },
            content: {
                position: 'absolute',
                top: '45%',
                left: '5%',
                height: 'auto',
                width: '40%',
                display: 'flex',
                flexDirection: 'column',
            },
            buttons: {
                position: 'relative',
                display:'flex',
                zIndex: '2',
            }
        }
        return (
            <div className="banner" style={style.banner} >
                <div className="banner-content" style={style.content}>
                    <div className="banner-content-text" >
                        <h1>{data.results[0].name}</h1>
                        <p>{data.results[0].overview}</p>
                    </div>
                    <div style={style.buttons}>
                        <PlayButton />
                        <InfoButton />
                    </div>
                </div>
            </div >
        )
    }
}

