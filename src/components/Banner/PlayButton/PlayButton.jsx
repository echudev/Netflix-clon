import style from './PlayButton.module.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


export const PlayButton = () => {
    return (
        <div className={style.play_btn_container}  >
            <PlayArrowIcon
                style={{ fontSize: '3vw' }} />
            <div>Reproducir</div>
        </div >
    )
}
