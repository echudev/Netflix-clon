import style from './Menu.module.css'
import { NavLink } from 'react-router-dom'

export const Menu = () => {
  return (
        <div className={style.menu_container}>
            <NavLink to="/" className={({ isActive }) => isActive ? style.navlink_active : style.navlink}>Inicio</NavLink>
            <NavLink to="/series" className={({ isActive }) => isActive ? style.navlink_active : style.navlink}>Series</NavLink>
            <NavLink to="/peliculas" className={({ isActive }) => isActive ? style.navlink_active : style.navlink}>Peliculas</NavLink>
            <NavLink to="/novedades" className={({ isActive }) => isActive ? style.navlink_active : style.navlink}>Novedades populares</NavLink>
            <NavLink to="/milista" className={({ isActive }) => isActive ? style.navlink_active : style.navlink}>Mi lista</NavLink>
        </div>
  )
}
