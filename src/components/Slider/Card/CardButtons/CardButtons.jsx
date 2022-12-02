import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import CheckIcon from '@mui/icons-material/Check'
import AddIcon from '@mui/icons-material/Add'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ClearIcon from '@mui/icons-material/Clear'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import styles from './CardButtons.module.css'
import { style } from '@mui/system'

export const CardButtons = () => {
  return (
        <div className={styles.container}>
            <div className={styles.button}>
                <PlayArrowIcon className={`${styles.icons} ${styles.play}`} />
                {/* <p className={styles.tooltip}>play</p> */}
            </div>
            <div className={styles.button}>
                <AddIcon className={`${styles.icons} ${styles.add}`} />
                <p className={styles.tooltip1}>Agregar a mi lista</p>
            </div>
            <div className={styles.button}>
                <ThumbUpIcon className={`${styles.icons} ${styles.thumb}`} />
                <p className={styles.tooltip2}>Me gusta</p>
            </div>
            <div className={`${styles.button} ${styles.keydownbtn}`}>
                <KeyboardArrowDownIcon className={`${styles.icons} ${styles.keydown}`} />
                <p className={styles.tooltip3}>Más información</p>
            </div>
        </div>
  )
}
