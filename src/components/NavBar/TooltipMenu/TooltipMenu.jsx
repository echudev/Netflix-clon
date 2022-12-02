import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import style from './TooltipMenu.module.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export const TooltipMenu = () => {
  const [menuClassName, setMenuClassName] = useState(style.tooltip_menu)

  const handlerOpenMenu = () => {
    setMenuClassName(style.tooltip_menu_open)
  }
  const handlerCloseMenu = () => {
    setMenuClassName(style.tooltip_menu)
  }

  return (
        <>
            <div
                className={style.explorar}
                onMouseEnter={() => handlerOpenMenu()}
                onClick={() => handlerOpenMenu()}
            >
                <p>Explorar</p>
                <ArrowDropDownIcon />
            </div>
            <div
                className={menuClassName}
                onMouseLeave={() => handlerCloseMenu()}
            >
                <NavLink to="/" className={({ isActive }) => isActive ? style.navlink_active : style.navlink}>Inicio</NavLink>
                <NavLink to="/series" className={({ isActive }) => isActive ? style.navlink_active : style.navlink}>Series</NavLink>
                <NavLink to="/peliculas" className={({ isActive }) => isActive ? style.navlink_active : style.navlink}>Peliculas</NavLink>
                <NavLink to="/novedades" className={({ isActive }) => isActive ? style.navlink_active : style.navlink}>Novedades populares</NavLink>
                <NavLink to="/milista" className={({ isActive }) => isActive ? style.navlink_active : style.navlink}>Mi lista</NavLink>
            </div>
        </>
  )
}
