import { useState } from 'react';

export const useModalHandler = () => {
    const [cardSize, setCardSize] = useState({
        left: null,
        top: null,
        width: null,
        height: null,
    });


    const openModal = (element) => {

        //tomo las medidas estáticas del div (card_content) antes de modificarlo
        const width = element.getBoundingClientRect().width;
        const height = element.getBoundingClientRect().height;
        const topDistance = element.getBoundingClientRect().top + window.scrollY;
        const leftDistance = element.getBoundingClientRect().left;
        setCardSize({
            width: width,
            left: leftDistance,
            top: topDistance,
            height: height,
        });
        element.style.width = width + 'px'; //le aplico su width original en px
        element.style.height = height + 'px'; //le aplico su width original en px
        element.style.position = 'absolute'; //aplico posición absoluta 
        document.body.appendChild(element); //lo saco del CardContainer y lon meto en el body
        element.style.top = topDistance + 'px'; //le agrego distancia top que tenía cuando estaba en la card
        element.style.left = leftDistance + 'px';  //le agrego la misma distancia left que tenía cuando estaba en la card
        element.style.transition = '.3s'; //le agrego una transición

        setTimeout(() => { //pongo setTimeOut para asegurarme que primero aplique el css y luego el css de la transición
            if ((leftDistance - (width * 1.5 - width)) < width / 4) {
                element.style.left = ((width / 4)) + 3 + 'px';
            } else if (window.innerWidth - (leftDistance + width * 1.5) < (width / 4)) {
                element.style.left = (leftDistance - (width / 2)) + 'px';
            } else {
                element.style.left = (leftDistance - (width / 4)) + 'px';
            }
            element.style.width = width * 1.5 + 'px';
            element.style.top = (topDistance - height) + 'px';
            element.style.height = height * 1.5 + 'px';
            element.querySelector('#card_content_info').style.transform = 'scale(1)';
            element.querySelector('#card_content_img').style.borderBottomLeftRadius = '0px';
            element.querySelector('#card_content_img').style.borderBottomRightRadius = '0px';
        }, 1);
        const transitionOpen = () => {
            element.style.transition = 'none';
            element.removeEventListener('transitionend', transitionOpen);
        }
        element.addEventListener('transitionend', transitionOpen);
    };



    const closeModal = (element, element2) => {

        element.style.transition = '.2s';
        element.style.left = cardSize.left + 'px';
        element.style.width = cardSize.width + 'px';
        element.style.top = cardSize.top + 'px';
        element.style.height = cardSize.height + 'px';

        element.querySelector('#card_content_info').style.transform = 'scale(0)';
        element.querySelector('#card_content_img').style.height = '100%';
        element.querySelector('#card_content_img').style.borderBottomLeftRadius = '7px';
        element.querySelector('#card_content_img').style.borderBottomRightRadius = '7px';

        // cuando termina la animación vuelvo a meter el elemento en el contenedor
        const transitionClose = () => {
            element2.appendChild(element)
            element.style.transition = 'none';
            element.style.position = 'relative';
            element.style.top = '0';
            element.style.left = '0'
            element.style.width = '98%';
            element.style.height = '98%';
            element.removeEventListener('transitionend', transitionClose);
        }
        element.addEventListener('transitionend', transitionClose);
    }


    return { openModal, closeModal }
}


