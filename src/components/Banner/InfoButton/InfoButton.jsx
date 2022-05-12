import InfoIcon from '@mui/icons-material/Info';
import style from './InfoButton.module.css';

export const InfoButton = () => {
    return (
        <div className={style.info_btn_container}  >
            <InfoIcon
                style={{
                    marginRight: '10px',
                    fontSize: '2.2vw',
                }} />
            <div className={style.info_text}>Más Información</div>
        </div >
    )
}