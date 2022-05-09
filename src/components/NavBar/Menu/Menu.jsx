import './Menu.css';
import { NavLink } from 'react-router-dom'

export const Menu = () => {
    return (
        <ul>
            <NavLink to="/" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>Inicio</NavLink>
            <NavLink to="/series" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>Series</NavLink>
            <NavLink to="/peliculas" className={({ isActive }) => isActive ? 'navlink active' : 'navlink'}>Peliculas</NavLink>
            <p className="navlink">Novedades populares</p>
            <p className="navlink">Mi lista</p>
        </ul>
    )
}
