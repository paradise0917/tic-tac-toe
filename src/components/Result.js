import React, { Component } from "react";
import { AppContext } from "../store/globalContext";

import Icon from '@mdi/react'
import { mdiCircleOutline, mdiClose } from '@mdi/js'
import "../css/result.scss";

class Result extends Component {

    static contextType = AppContext;
    restartGame = () => {
        this.context.setResultVisibility(false);
        this.context.setInitialVisibility(true);
    };

    render(){

        const resultStyle = this.context.resultBlockVisibility === true ? "result flex flex-ver-center flex-flow-col" : "is-hidden-opacity";
        const winnerMark = this.context.winnerInfo.winnerMark;
        let playerName = "";
        let playerMark = "";
        switch(winnerMark){
            case 0:
                playerName = this.context.firstPlayer;
                playerMark = <Icon path={mdiCircleOutline} title="Player 1" className="icon" color="rgb(46,167,192)" size={1.6}/>;
                break;
            case 1:
                playerName = this.context.secondPlayer;
                playerMark = <Icon path={mdiClose} title="Player 2" className="icon" color="rgb(46,115,202)" size={1.6}/>;
                break;
            default:
                playerName = "Drawn Game";
                break;
        }
        // const playerName = this.context.winnerInfo.winnerMark === 0 ? this.context.firstPlayer : this.context.secondPlayer;
        // const playerMark = this.context.winnerInfo.winnerMark === 0 ? (<Icon path={mdiCircleOutline} title="Player 1" className="icon" color="rgb(46,167,192)" size={1.6}/>):(
        //     <Icon path={mdiClose} title="Player 2" className="icon" color="rgb(46,115,202)" size={1.6}/>
        // );

        return(<div className={resultStyle}>
            <div className="title">YOU WIN</div>
            <img className="winner-img" src="./imgs/win.png" alt="winner"></img>
            <div className="winner">{playerName}</div>
            <div className="winner-mark">{playerMark}</div>
            <button className="btn" onClick={this.restartGame}>Play Again</button>
        </div>);

    }


}
export default Result;