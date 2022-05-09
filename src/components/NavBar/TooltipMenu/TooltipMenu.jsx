import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './TooltipMenu.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const TooltipMenu = () => {
    const [menuClassName, setMenuClassName] = useState('tooltip-menu');

    const handlerOpenMenu = () => {
        setMenuClassName('tooltip-menu open');
    }
    const handlerCloseMenu = () => {
        setMenuClassName('tooltip-menu');
    }

    return (
        <>
            <div
                className="explorar"
                onMouseEnter={() => handlerOpenMenu()}
            >
                <p>Explorar</p>
                <ArrowDropDownIcon />
            </div>
            <div
                className={menuClassName}
                onMouseLeave={() => handlerCloseMenu()}
            >
                <NavLink to="/" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>Inicio</NavLink>
                <NavLink to="/series" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>Series</NavLink>
                <NavLink to="/peliculas" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>Peliculas</NavLink>
                <p className="navlink">Novedades populares</p>
                <p className="navlink">Mi lista</p>
            </div>
        </>
    )
}
