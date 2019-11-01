import React, { Component } from "react";
import { AppContext } from "../store/globalContext";

import Icon from '@mdi/react'
import { mdiCircleOutline, mdiClose } from '@mdi/js'
import "../css/player.scss";

class Player extends Component {

    static contextType = AppContext;

    /*
     * START GAME
     * Step1. Clear old result
     * Stpe2. Close the initial block
     * Step3. Show the game content
     */
    startGame = () => {
        // 2.
        this.context.setMaskVisibility(false);
        this.context.setInitialVisibility(false);
        
    };

	render(){
        const showPlayer = this.context.initialBlockVisibility === true ? "player flex flex-ver-center flex-flow-col" : "is-hidden-opacity";
        return (
            <div className={showPlayer}>
                <div className="title"> Tic Tac Toe</div>
                <div className="player-name flex">
                    <Icon path={mdiCircleOutline}
                        title="Player 1"
                        className="icon icon-first"
                        color="rgb(46,167,192)"
                        size={0.8}/>
                    <input type="textbox" 
                        placeholder="First Player Name"
                        value={this.context.firstPlayer} 
                        onChange={(e) => {this.context.setFirstPlayer(e.target.value)}}></input>
                </div>
                <div className="player-name flex">
                    <Icon path={mdiClose}
                        title="Player 2"
                        className="icon"
                        color="rgb(46,115,202)"
                        size={1}/>
                    <input type="textbox" 
                        placeholder="Second Player Name"
                        value={this.context.secondPlayer} 
                        onChange={(e) => {this.context.setSecondPlayer(e.target.value)}}></input>
                </div>
                <button className="btn-start" onClick={this.startGame}>START</button>
            </div>
        );
	}
}

export default Player;