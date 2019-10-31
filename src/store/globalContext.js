import React,{ createContext, useState } from "react";


const AppContextProvider = (props) => {
    // background mask
    const [showMask, setMask] = useState(false);
    const setShowMask = (state) => {
        setMask(state);
    };
 

    return (
        <AppContext.Provider value={{ 
            // mask
            showMask, setShowMask
        }}>
        {props.children}
        </AppContext.Provider>);
}

export const AppContext = createContext();
export default AppContextProvider;