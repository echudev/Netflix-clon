import './PlayButton.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';


export const PlayButton = () => {
    return(
        <div className="play-btn-container"  >
            <PlayArrowIcon  
            style={ { fontSize: '3vw' } }
            />
            <div>Reproducir</div>
        </div >
    )
}
