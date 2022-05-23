export const Header = (props) => {

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
            fontSize: '1.1em',
            fontWeight: 'bold',
            color: '#e5e5e5',
            marginLeft: '5vw',
        },
        header_pagination: {
            marginLeft: 'auto',
            marginRight: '4vw',
            color: '#e5e5e5',
        }
    }

    return (
        <div style={style.header_container} >
            <p style={style.header_title}>{props.titulo}</p>
            <div style={style.header_pagination}></div>
        </div >
    )
}
