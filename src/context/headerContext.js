"use client";

import { createContext, useContext, useState } from "react";

const HeaderContext = createContext({})

export const HeaderContextProvider= ({ children }) => {

    const [headerText, setHeaderText] = useState('Blog Posts');

    return (
        <HeaderContext.Provider value={{ headerText, setHeaderText }}>
            {children}
        </HeaderContext.Provider>
    )
};

export const useHeaderContext = () => useContext(HeaderContext);