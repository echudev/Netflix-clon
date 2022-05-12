import InfoIcon from '@mui/icons-material/Info';
import style from './InfoButton.module.css';

export const InfoButton = () => {
    return(
        <div className={style.info_btn_container}  >
            <InfoIcon className={style.btn}/>
            <div className={style.info_text}>Más Información</div>
        </div >
    )
}