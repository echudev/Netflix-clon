import style from './Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'

export const Footer = () => {
  return (
        <div className={style.footer_content}>
            <div className={style.footer_social_links}>
                <FacebookIcon className={style.icons}/>
                <InstagramIcon className={style.icons}/>
                <TwitterIcon className={style.icons}/>
                <YouTubeIcon className={style.icons} />
            </div>
            <ul className={style.footer_member_links}>
                <li>Audio y subtitulos</li>
                <li>Centro de ayuda</li>
                <li>Prensa</li>
                <li>Empleo</li>
                <li>Privacidad</li>
                <li>Preferencias de cookies</li>
                <li>Contáctanos</li>
                <li>Audio descriptivo</li>
                <li>Tarjetas de regalo</li>
                <li>Relaciones con inversionistas</li>
                <li>Términos de uso</li>
                <li>Avisos legales</li>
                <li>Información corporativa</li>
            </ul>
            <div className={style.button} variant="outlined">Código de Servicio</div>
            <div className={style.footer_copyright}>© 1997-2022 Netflix, Inc.</div>
        </div>
  )
}
