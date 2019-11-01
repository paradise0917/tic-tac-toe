import React,{ createContext, useState } from "react";


const AppContextProvider = (props) => {

    // background mask
    const [maskVisibility, setMask] = useState(false);
    const setMaskVisibility = (state) => {
        setMask(state);
    };

    // show initial block
    const [initialBlockVisibility, setInitialBlockVisibility] = useState(false);
    const setInitialVisibility = (state) => {
        setInitialBlockVisibility(state);
    };

    //player information
    const [firstPlayer, setFirstPlayerName] = useState("Player 1");
    const setFirstPlayer = (name) => {
        setFirstPlayerName(name);
    };

    const [secondPlayer, setSecondPlayerName] = useState("Player 2");
    const setSecondPlayer = (name) => {
        setSecondPlayerName(name);
    };

    return (
        <AppContext.Provider value={{ 
            // mask
            maskVisibility, setMaskVisibility,
            // player
            initialBlockVisibility, setInitialVisibility,
            firstPlayer, setFirstPlayer,
            secondPlayer, setSecondPlayer,
        }}>
        {props.children}
        </AppContext.Provider>);
}

export const AppContext = createContext();
export default AppContextProvider;