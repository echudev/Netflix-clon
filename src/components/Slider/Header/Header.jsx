import style from './Header.module.css';

export const Header = () => {
    return (
        <div className={style.header_container}>
            <p className={style.header_title}>Titulo</p>
            <div className={style.header_pagination}>paginación</div>
        </div>
    )
}
