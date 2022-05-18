export const Header = () => {

    const style = {
        header_container: {
            position: 'absolute',
            padding: '6px',
            top: '0',
            left: '0',
            width: '100%',
            display: 'flex',
        },
        header_title: {
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: '#e5e5e5',
            marginLeft: '4vw',
        },
        header_pagination: {
            marginLeft: 'auto',
            marginRight: '4vw',
            color: '#e5e5e5',
        }
    }

    return (
        <div style={style.header_container} >
            <p style={style.header_title}>Titulo</p>
            <div style={style.header_pagination}>paginación</div>
        </div >
    )
}
