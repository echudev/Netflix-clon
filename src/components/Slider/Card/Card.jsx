import { useState, useEffect, useRef, useContext } from 'react';
import { useModalHandler } from './hooks/useModalHandler';
import { SliderContext } from '../context/SliderContext';
import { CardButtons } from './CardButtons/CardButtons';
import axios from 'axios';
import style from './Card.module.css';



export const Card = (props) => {
    const card = useRef(null);
    const card_content = useRef(null);
    const [cardInfo, setCardInfo] = useState({
        loading: true,
        data: null,
    });
    const { openModal, closeModal } = useModalHandler();
    const [hoverStyle, setHoverStyle] = useState({
        card_img_height: '100%',
        card_info_scale: 'scale(0)',
        borderBottomLeftRadius: '7px',
        borderBottomRightRadius: '7px',
    });
    const { state } = useContext(SliderContext);
    var openTimer;


    //monto los eventlisteners para el hover del card
    useEffect(() => {
        card_content.current.addEventListener('mouseenter', handlerShowModal);
        card_content.current.addEventListener('mouseleave', handlerHideModal);
        return () => {
            card_content.current ? card_content.current.removeEventListener('mouseenter', handlerShowModal) : null;
            card_content.current ? card_content.current.removeEventListener('mouseleave', handlerHideModal) : null;
        }
    }, [cardInfo.data])


    const getMoreData = async () => {
        const more_data = await axios.get(props.data.more_data_url);
        setCardInfo({
            loading: false,
            data: more_data.data,
        })
    }

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
            cardInfo.data ? null : getMoreData();
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


    return (
        <div className={style.card}
            ref={card}
            style={{ minWidth: props.width + '%', height: props.height + 'vw' }}>
            <div className={style.card_content}
                ref={card_content}>
                <div className={style.card_img}
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.data.backdrop_path})`,
                        borderBottomLeftRadius: hoverStyle.borderBottomLeftRadius,
                        borderBottomRightRadius: hoverStyle.borderBottomRightRadius,
                        height: hoverStyle.card_img_height,
                    }}>
                </div>
                <div className={style.card_info}
                    style={{ transform: hoverStyle.card_info_scale }}>
                    <CardButtons />
                    {cardInfo.loading ? null
                        : <>
                            <div className={style.card_info_header}>
                                <div className={style.card_info_title}>
                                    {cardInfo.data.title || cardInfo.data.name}
                                </div>
                                <div className={style.card_info_score}>
                                    {cardInfo.data.vote_average}
                                </div>
                            </div>
                            <ul className={style.card_info_tags}>
                                {cardInfo.data.genres.map((genre, i) => <li key={i}>{genre.name}</li>)}
                            </ul>
                        </>}
                </div>
            </div>
        </div >
    )
}
