import React, { createContext, useRef } from "react";

export const SliderContext = createContext();

export const SliderStateProvider = ({ children }) => {

     //estado del modal de cada card
    const state = useRef({
        open: false,
        transition:false,
        hover: false,
    });

    return (
        <SliderContext.Provider value={{state}}>
            {children}
        </SliderContext.Provider>
    )
}
