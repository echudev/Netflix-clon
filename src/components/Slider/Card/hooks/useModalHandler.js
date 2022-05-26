import { useContext } from "react";
import { SliderContext } from "../../context/SliderContext";

export const useModalHandler = () => {

    const { state } = useContext(SliderContext);

    //Este hook solo toma el box del card y lo pasa al body, 
    //permitiendo que se vea el zoom sobre la card sin que el overflow del slider lo oculte.


    const openModal = (element) => {
        state.current.hover = !state.current.hover;
        if (state.current.hover) {
            if (!state.current.open && !state.current.transition) {
                state.current = { ...state.current, open: true, transition: true }

                //tomo las medidas estáticas del div (card_content) antes de modificarlo
                const width = element.getBoundingClientRect().width;
                const height = element.getBoundingClientRect().height;
                const topDistance = element.getBoundingClientRect().top + window.scrollY;
                const leftDistance = element.getBoundingClientRect().left;


                element.style.width = width + 'px'; //le aplico su width original en px
                element.style.height = height + 'px'; //le aplico su width original en px
                element.style.position = 'absolute'; //aplico posición absoluta 
                document.body.appendChild(element); //lo saco del CardContainer y lon meto en el body
                element.style.top = topDistance + 'px'; //le agrego distancia top que tenía cuando estaba en la card
                element.style.left = leftDistance + 'px';  //le agrego la misma distancia left que tenía cuando estaba en la card
                element.style.transition = '.2s'; //le agrego una transición
                setTimeout(() => {
                    element.style.top = (topDistance - height) + 'px';
                    element.style.left = (leftDistance - (width / 4)) + 'px';
                    element.style.width = width * 1.5 + 'px';
                    element.style.height = height * 2.5 + 'px';
                }, 10);

                const transitionOpen = () => {
                    element.style.transition = 'none';
                    element.removeEventListener('transitionend', transitionOpen);
                    state.current = { ...state.current, open: true, transition: false }
                }
                element.addEventListener('transitionend', transitionOpen);
            }
        }
    };



    const closeModal = (element, element2) => {
        state.current.hover = !state.current.hover;
        if (!state.current.hover) {
            if (state.current.open && !state.current.stransition) {
                state.current = { ...state.current, open: false, transition: true }

                //tomo las medidas estáticas del div (card_content) 
                const width = element.getBoundingClientRect().width;
                const height = element.getBoundingClientRect().height;
                const topDistance = element.getBoundingClientRect().top + window.scrollY;
                const leftDistance = element.getBoundingClientRect().left;

                //le aplico su width original en px (animación)
                element.style.transition = '.2s';
                element.style.top = topDistance + (height / 2.5) + 'px';
                element.style.left = (leftDistance + (width / 6)) + 'px';
                element.style.width = width / 1.5 + 'px';
                element.style.height = height / 2.5 + 'px';

                // cuando termina la animación vuelvo a meter el elemento en el contenedor
                const transitionClose = () => {
                    state.current = { ...state.current, open: false, transition: false }
                    element.style.transition = 'none';
                    element.style.position = 'relative';
                    element2.appendChild(element)
                    element.style.top = '0';
                    element.style.left = '0'
                    element.style.width = '98%';
                    element.style.height = '98%';
                    element.removeEventListener('transitionend', transitionClose);
                }
                element.addEventListener('transitionend', transitionClose);
            }
        }
    }


    return { openModal, closeModal }
}


