import React, { createContext, useRef } from "react";

export const SliderContext = createContext();

export const SliderStateProvider = ({ children }) => {

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
