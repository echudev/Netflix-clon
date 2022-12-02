import style from './Header.module.css'

export const Header = (props) => {
  return (
        <div className={style.header_container} >
            <p className={style.header_title}>{props.titulo}</p>
            <div className={style.show_all}>&gt;</div>
            <div className={style.header_pagination}></div>
        </div >
  )
}
