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
        card_info_height: '0%',
        card_info_display: 'none',
        borderBottomLeftRadius: '7px',
        borderBottomRightRadius: '7px',
    });
    const { state } = useContext(SliderContext);
    var openTimer;

    useEffect(() => {
        card_content.current.addEventListener('mouseenter', handlerShowModal);
        card_content.current.addEventListener('mouseleave', handlerHideModal);
        return () => {
            card_content.current ? card_content.current.removeEventListener('mouseenter', handlerShowModal) : null;
            card_content.current ? card_content.current.removeEventListener('mouseleave', handlerHideModal) : null;
        }
    }, [])



    const handlerShowModal = () => {
        openTimer = setTimeout(() => {
            openModal(card_content.current);
            setHoverStyle({
                card_img_height: '60%',
                card_info_height: '40%',
                card_info_display: 'flex',
                borderBottomLeftRadius: '0px',
                borderBottomRightRadius: '0px',
            });
        }, 500);
    }

    const handlerHideModal = () => {
        if (!state.current.open) {
            //si el modal está cerrado y el mouse sale del card antes que se abra, cancela la apertura del modal
            clearTimeout(openTimer);
        } else if (state.current.open) {
            closeModal(card_content.current, card.current);
            setHoverStyle({
                card_img_height: '100%',
                card_info_height: '0%',
                card_info_display: 'none',
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
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.data.backdrop_path})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            // backdropFilter: 'brightness(20%)',

            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            transition: '.25s',
            borderTopLeftRadius: '7px',
            borderTopRightRadius: '7px',
            borderBottomLeftRadius: hoverStyle.borderBottomLeftRadius,
            borderBottomRightRadius: hoverStyle.borderBottomRightRadius,
            height: hoverStyle.card_img_height,
        },
        card_info: {
            position: 'relative',
            display: hoverStyle.card_info_display,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
            backgroundColor: '#171717',
            color: '#fff',
            transition: '.25s',
            borderBottomLeftRadius: '7px',
            borderBottomRightRadius: '7px',
            height: hoverStyle.card_info_height,
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
