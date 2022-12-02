import logo from './netflix.png'
import style from './Logo.module.css'

export const Logo = () => {
  return (
        <div className={style.navbar_logo}>
            <img className={style.img} src={logo} alt="nav-logo" />
        </div>
  )
}
