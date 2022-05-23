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
        opacity: '0',
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
                opacity: '1',
            });
        }, 500);
    }

    const handlerHideModal = () => {
        if (!state.current.open) {
            clearTimeout(openTimer);
        } else if (state.current.open) {
            closeModal(card_content.current, card.current);
            setHoverStyle({
                card_img_height: '100%',
                card_info_height: '0%',
                card_info_display: 'none',
                borderBottomLeftRadius: '7px',
                borderBottomRightRadius: '7px',
                opacity: '0',
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
        },
        card_img: {
            border: ' solid yellow 1px',
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
            display: hoverStyle.card_info_display,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
            backgroundColor: '#171717',
            color: '#fff',
            borderBottomLeftRadius: '7px',
            borderBottomRightRadius: '7px',
            height: hoverStyle.card_info_height,
        }

    }



    return (
        <div
            ref={card}
            style={style.card}
            key={props.data}>
            <div
                ref={card_content}
                style={style.card_content}>
                <div style={style.card_img}>{props.data}</div>
                <div style={style.card_info}>
                    <CardButtons />
                    <CardTags />
                </div>
            </div>
        </div >
    )
}
