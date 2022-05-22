import { useRef, useEffect, useContext } from 'react';
import { useModalHandler } from './hooks/useModalHandler';
import { SliderContext } from '../SliderContext';



export const Card = (props) => {
    const card = useRef(null);
    const card_content = useRef(null);
    const { openModal, closeModal } = useModalHandler();
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
            console.log('se ejecuta el opentimer')
            openModal(card_content.current);
        }, 500);
    }

    const handlerHideModal = () => {
        if (!state.current.open) {
            clearTimeout(openTimer);
            console.log('se cancela el opentimer')
        } else if (state.current.open) {
            closeModal(card_content.current, card.current);
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
            position: 'relative',
            cursor: 'pointer',
            width: '98%',
            height: '98%',
            borderRadius: '5px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgb(65, 91, 25)',
        }
    }



    return (
        <div
            ref={card}
            style={style.card}
            key={props.data}
        >
            <div
                ref={card_content}
                style={style.card_content}
            >
                <div>{props.data}</div>
            </div>
        </div >
    )
}
