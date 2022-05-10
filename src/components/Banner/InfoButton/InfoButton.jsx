import InfoIcon from '@mui/icons-material/Info';
import './InfoButton.css';

export const InfoButton = () => {
    return(
        <div className="info-btn-container"  >
            <InfoIcon  
            style={ { marginRight:'10px', fontSize:'2vw' } }
            />
            <div className="info-text">Más Información</div>
        </div >
    )
}