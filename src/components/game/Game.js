import React, { Component } from "react";
import { AppContext } from "../../store/globalContext";

import Cell from "./Cell";
import Line from "./Line";

import "./game.scss";

class Game extends Component {

    static contextType = AppContext;
    state = {
        round: 0, 
        marks: [-1, -1, -1, -1, -1, -1, -1, -1, -1],
        winner: null 
    }

    /* Update content mark based on index
     * Step1. check mark and prestate have no winner
     * Step2. end the game if there is a winner after updating the mark
     * Step3. end the game if there is round game
     */
    updateMark = (index) => {

        let currentMark = this.state.marks[index];
        if(currentMark === -1 && this.state.winner === null) {

            this.setState(preState => {
                const mark = preState.round % 2; // base on round to check mark content
                preState.marks[index] = mark;
                const winner = this.checkWinner(preState.marks); 

                if( winner !== null){
                    setTimeout(() => {
                        this.context.setWinnerInfo({winnerMark: winner.winnerMark});
                        this.context.setMaskVisibility(true);
                        this.context.setResultVisibility(true);
                    },500);
                }

                if(preState.round >= 8 && winner === null){
                    setTimeout(() => {
                        this.context.setWinnerInfo({winnerMark: -1});
                        this.context.setMaskVisibility(true);
                        this.context.setResultVisibility(true);
                    },500);   
                }

                return {
                    round: preState.round + 1,
                    marks: preState.marks,
                    winner: winner
                };
            });
        }
    }

    /* Check have winner
     * Have winner: return {winnerMark, startIndex, endIndex}
     * Have no winner: return null
     */
    checkWinner = (marks) => {
    
        // check three row have same mark
        for(let y = 0 ; y < 3 ; y++) {
            if(marks[y*3] !== -1 && marks[y*3] === marks[y*3+1] && marks[y*3+1] === marks[y*3+2]){
                return {winnerMark: marks[y*3], startIndex: y*3, endIndex: y*3+2};
            }
        }

        // check three column have same mark
        for(let x = 0 ; x < 3 ; x++) {
            if(marks[x] !== -1 && marks[x] === marks[3+x] && marks[3+x] === marks[2*3+x]){
                return {winnerMark: marks[x], startIndex:x, endIndex:2*3+x};
            }
        }

        // check slash have same mark
        if(marks[0] !== -1 && marks[0] === marks[4] && marks[4] === marks[8]) {
            return {winnerMark: marks[0], startIndex:0, endIndex: 8};
        }else if( marks[2]!==-1 && marks[2] === marks[4] && marks[4] === marks[6]) {
            return {winnerMark: marks[2], startIndex:2, endIndex: 6};
        }
        
        return null;
    }

    restartGame = () => {
        this.context.setMaskVisibility(true);
        this.context.setInitialVisibility(true);
    }

    render(){

        let cells = [];
        cells = this.state.marks.map((item, index) => {
            return (<Cell key={index} index={index} mark={item} update={this.updateMark} />);
        }
        );

        if(this.state.winner !== null){
            cells.push(<Line key="line" 
                startIndex={this.state.winner.startIndex}
                endIndex={this.state.winner.endIndex} />);
        }
        return (
            <div className="game flex flex-hor-center flex-ver-center">
                <div className="wrapper flex flex-hor-center flex-ver-center">
                    <div className="line row row-first"></div>
                    <div className="line row row-second"></div>
                    <div className="line col col-first"></div>
                    <div className="line col col-second"></div>
                    <div className="board">{cells}</div>
                    <button className="btn-restart" onClick={this.restartGame}>RESTART</button>
                </div>
            </div>);
    }
}
export default Game;