import { useState, useEffect, useRef } from 'react';
import { useModalHandler } from './hooks/useModalHandler';
import { CardButtons } from './CardButtons/CardButtons';
import axios from 'axios';
import style from './Card.module.css';



export const Card = (props) => {
    const card = useRef(null);
    const card_content = useRef(null);
    const modalState = useRef({
        open: false,
        transition: false,
        hover: false,
    });
    const { openModal, closeModal } = useModalHandler(modalState);
    const [cardInfo, setCardInfo] = useState({
        loading: true,
        data: null,
    });

    //monto los eventlisteners para el hover del card
    useEffect(() => {
        card_content.current.addEventListener('mouseenter', handlerShowModal);
        card_content.current.addEventListener('mouseleave', handlerHideModal);
        return () => {
            card_content.current ? card_content.current.removeEventListener('mouseenter', handlerShowModal) : null;
            card_content.current ? card_content.current.removeEventListener('mouseleave', handlerHideModal) : null;
        }
    }, [cardInfo.data])


    //pide informacion extra a la API al hacer hover sobre la card
    const getMoreData = async () => {
        const more_data = await axios.get(props.data.more_data_url);
        setCardInfo({
            loading: false,
            data: more_data.data,
        })
    }

    //muestra modal
    const handlerShowModal = () => {
        modalState.current.hover = true;
        props.setBtnOpacity(1);
        setTimeout(() => {
            if (modalState.current.hover) {
                openModal(card_content.current); //abro modal
                cardInfo.data ? null : getMoreData(); //si no hay datos, los pido
                props.setBtnOpacity(0); //oculto botones slider
            }
        }, 500);//tiempo que debe permanecer mouse sobre card para que abra el modal
    }

    //ocultar modal
    const handlerHideModal = () => {
        closeModal(card_content.current, card.current)
        modalState.current.hover = false;
    }


    return (
        <div
            className={style.card}
            ref={card}
            style={{
                minWidth: props.width + '%',
                height: props.height + 'vw',
            }}
        >
            <div
                className={style.card_content}
                ref={card_content}
                style={{ display: props.i === 0 ? props.firstSlide ? 'none' : 'block' : 'block', }}
            >
                <div
                    id='card_content_img'
                    className={style.card_content_img}
                    style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.data.backdrop_path})`,
                    }}>
                </div>

                <div
                    id='card_content_info'
                    className={style.card_content_info}
                >
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
