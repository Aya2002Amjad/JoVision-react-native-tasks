import React, { createContext, useState } from "react";

export const TextContext=createContext();

export const TextContextProvid=({children})=>{

    const [text,setText]=useState('');

    return(
        <TextContext.Provider value={{text,setText}}>
            {children}
        </TextContext.Provider>
    );
};