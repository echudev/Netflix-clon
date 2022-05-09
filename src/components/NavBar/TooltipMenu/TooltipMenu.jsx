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
                onClick={() => handlerOpenMenu()}
            >
                <p>Explorar</p>
                <ArrowDropDownIcon />
            </div>
            <div
                className={menuClassName}
                onMouseLeave={() => handlerCloseMenu()}
            >
                <NavLink to="/" className={({ isActive }) => isActive ? 'navlink-t active' : 'navlink-t'}>Inicio</NavLink>
                <NavLink to="/series" className={({ isActive }) => isActive ? 'navlink-t active' : 'navlink-t'}>Series</NavLink>
                <NavLink to="/peliculas" className={({ isActive }) => isActive ? 'navlink-t active' : 'navlink-t'}>Peliculas</NavLink>
                <p className="navlink-t">Novedades populares</p>
                <p className="navlink-t">Mi lista</p>
            </div>
        </>
    )
}
