import logo from '../../.././img/netflix.png';

export const Logo = () => {

    const logoStyle = {
        navbarLogo : {
            width: '8%',
            minWidth: '50px',
            height: 'auto',
            margin:'0 40px'
        },
        img: {
            width: '100%',
            height: '100%',
        }
    }

    return (
        <div style={logoStyle.navbarLogo}>
            <img src={logo} alt="nav-logo" style={logoStyle.img} />
        </div>
    )
}
