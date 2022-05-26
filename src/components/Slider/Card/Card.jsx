import { useState, useEffect, useRef, useContext } from 'react';
import { useModalHandler } from './hooks/useModalHandler';
import { SliderContext } from '../context/SliderContext';
import { CardButtons } from './CardButtons/CardButtons';
import { CardTags } from './CardTags/CardTags';



export const Card = (props) => {
    const card = useRef(null);
    const card_content = useRef(null);
    const { openModal, closeModal } = useModalHandler();
    const [hoverStyle, setHoverStyle] = useState({
        card_img_height: '100%',
        card_info_scale: 'scale(0)',
        borderBottomLeftRadius: '7px',
        borderBottomRightRadius: '7px',
    });
    const { state } = useContext(SliderContext);
    var openTimer;


    //monto los eventlisteners  para el hover del card
    useEffect(() => {
        card_content.current.addEventListener('mouseenter', handlerShowModal);
        card_content.current.addEventListener('mouseleave', handlerHideModal);
        return () => {
            card_content.current ? card_content.current.removeEventListener('mouseenter', handlerShowModal) : null;
            card_content.current ? card_content.current.removeEventListener('mouseleave', handlerHideModal) : null;
        }
    }, [])


    //funcion para mostrar modal
    const handlerShowModal = () => {
        card_content.current.removeEventListener('mouseenter', handlerShowModal) //remuevo el eventlistener para que no se repita en firefox (al sacar el div card y ponerlo en el body, firefox vuelve a detectar que el mouse entra al div y genera errores)
        openTimer = setTimeout(() => {
            openModal(card_content.current);
            setHoverStyle({
                card_img_height: '60%',
                card_info_scale: 'scale(1)',
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0px',
            });
        }, 500);
    }

    //funcion para ocultar modal
    const handlerHideModal = () => {
        card_content.current.addEventListener('mouseenter', handlerShowModal); //vuelvo a cargar el eventlistener
        if (!state.current.open) {
            //si el modal está cerrado y el mouse entra y sale del card antes que se abra, cancela la apertura del modal
            clearTimeout(openTimer);
        } else if (state.current.open) {
            closeModal(card_content.current, card.current);
            setHoverStyle({
                card_img_height: '100%',
                card_info_scale: 'scale(0)',
                borderBottomLeftRadius: '7px',
                borderBottomRightRadius: '7px',
            });
        }
    }

    const style = {
        card: {
            position: 'relative',
            minWidth: props.width + '%',
            height: props.height + 'vw',
            color: 'rgb(209, 209, 209)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        card_content: {
            userSelect: 'none',
            position: 'relative',
            cursor: 'pointer',
            width: '98%',
            height: '98%',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
        },
        card_img: {
            backgroundColor: '#171717',
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.data.backdrop_path})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            transition: '.15s',
            borderTopLeftRadius: '7px',
            borderTopRightRadius: '7px',
            borderBottomLeftRadius: hoverStyle.borderBottomLeftRadius,
            borderBottomRightRadius: hoverStyle.borderBottomRightRadius,
            height: hoverStyle.card_img_height,
        },
        card_info: {
            transform: hoverStyle.card_info_scale,
            position: 'relative',
            top: '0',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
            backgroundColor: '#171717',
            color: '#fff',
            borderBottomLeftRadius: '7px',
            borderBottomRightRadius: '7px',
            height: '40%',
        }

    }



    return (
        <div
            ref={card}
            style={style.card}>
            <div
                ref={card_content}
                style={style.card_content}>
                <div style={style.card_img}></div>
                <div style={style.card_info}>
                    <CardButtons />
                    <CardTags />
                </div>
            </div>
        </div >
    )
}
