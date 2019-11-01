import React,{ createContext, useState } from "react";


const AppContextProvider = (props) => {

    // background mask
    const [maskVisibility, setMask] = useState(false);
    const setMaskVisibility = (state) => {
        setMask(state);
    };

    // initial block
    const [initialBlockVisibility, setInitialBlockVisibility] = useState(false);
    const setInitialVisibility = (state) => {
        setInitialBlockVisibility(state);
    };

    // player information
    const [firstPlayer, setFirstPlayerName] = useState("Player 1");
    const setFirstPlayer = (name) => {
        setFirstPlayerName(name);
    };
    const [secondPlayer, setSecondPlayerName] = useState("Player 2");
    const setSecondPlayer = (name) => {
        setSecondPlayerName(name);
    };

    // game information
    const [gameInfo, setGameInfo] = useState({
        round: 0, 
        marks: [-1, -1, -1, -1, -1, -1, -1, -1, -1], // -1: Empty, 0: Circle, 1: Fork
        winner: null 
    });

    // winner inforamtion
    const [winnerInfo, setWinnerInfo] = useState({winnerMark: ""});

    // result block
    const [resultBlockVisibility, setresultBlockVisibility] = useState(false);
    const setResultVisibility = (state) => {
        setresultBlockVisibility(state);
    };

    return (
        <AppContext.Provider value={{ 
            // Mask
            maskVisibility, setMaskVisibility,
            // Player
            initialBlockVisibility, setInitialVisibility,
            firstPlayer, setFirstPlayer,
            secondPlayer, setSecondPlayer,
            // Game
            gameInfo, setGameInfo,
            // Winner
            winnerInfo, setWinnerInfo,
            // Result
            resultBlockVisibility, setResultVisibility,
        }}>
        {props.children}
        </AppContext.Provider>);
}

export const AppContext = createContext();
export default AppContextProvider;