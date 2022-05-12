import style from './PlayButton.module.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


export const PlayButton = () => {
    return(
        <div className={style.play_btn_container}  >
            <PlayArrowIcon  className={style.play_btn}/>
            <div>Reproducir</div>
        </div >
    )
}
