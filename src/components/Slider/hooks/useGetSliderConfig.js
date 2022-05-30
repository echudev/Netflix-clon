import { useGetWindowWidth } from "./useGetWindowWidth";
import { useState, useEffect } from "react";

export const useGetSliderConfig = () => {
const windowWidth = useGetWindowWidth();

const [sizes, setSizes] = useState({ 
    cardsToShow: 5.5, //cantidad de Cards visibles por defecto
    cardWidth: 100 / 5.5, //ancho de cada Card
    cardHeight: (100 / 5.5) / 1.8, //alto de cada Card
    btnWidth: (100 / 5.5) * 0.25 //ancho de los botones = (1/4 de un Card)
  });

useEffect(() => {
    if (windowWidth > 1050) {
      return setSizes({
        cardsToShow: 5.5,
        cardWidth: 100 / 5.5, 
        cardHeight: (100 / 5.5) / 1.8, 
        btnWidth: (100 / 5.5) * 0.25 
      })
    } else if (windowWidth < 1050 && windowWidth >= 800) {
      return setSizes({
        cardsToShow: 4.5,
        cardWidth: 100 / 4.5,
        cardHeight: (100 / 4.5) / 1.8,
        btnWidth: (100 / 4.5) * 0.25
      })
    } else if (windowWidth < 800) {
      return setSizes({
        cardsToShow: 3.5,
        cardWidth: 100 / 3.5,
        cardHeight: (100 / 3.5) / 1.8,
        btnWidth: (100 / 3.5) * 0.25
      })
    }
  }, [windowWidth])

  return [sizes.cardsToShow, sizes.cardWidth, sizes.cardHeight, sizes.btnWidth];
}