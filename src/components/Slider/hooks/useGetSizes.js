import { useGetWindowWidth } from "./useGetWindowWidth";
import { useState, useEffect } from "react";

export const useGetSizes = () => {

const windowWidth = useGetWindowWidth();
const [sizes, setSizes] = useState({ 
    amount: 5.5, //cantidad de Cards visibles
    itemWidth: 100 / 5.5, //ancho de cada Card
    itemHeight: (100 / 5.5) / 1.8, //alto de cada Card
    btnWidth: (100 / 5.5) * 0.25 //ancho de los botones
  });

useEffect(() => {
    if (windowWidth > 1050) {
      return setSizes({
        amount: 5.5,
        itemWidth: 100 / 5.5, 
        itemHeight: (100 / 5.5) / 1.8, 
        btnWidth: (100 / 5.5) * 0.25 
      })
    } else if (windowWidth < 1050 && windowWidth >= 800) {
      return setSizes({
        amount: 4.5,
        itemWidth: 100 / 4.5,
        itemHeight: (100 / 4.5) / 1.8,
        btnWidth: (100 / 4.5) * 0.25
      })
    } else if (windowWidth < 800) {
      return setSizes({
        amount: 3.5,
        itemWidth: 100 / 3.5,
        itemHeight: (100 / 3.5) / 1.8,
        btnWidth: (100 / 3.5) * 0.25
      })
    }
  }, [windowWidth])

  return [sizes.amount, sizes.itemWidth, sizes.itemHeight, sizes.btnWidth];
}