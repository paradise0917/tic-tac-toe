import React, { Component } from "react";

/*
 * Base on startIndex and endIndex draw the winner line
 */
class Line extends Component{

    render(){

        const startX = this.props.startIndex % 3;
        const endX = this.props.endIndex % 3;
        const startY = Math.floor(this.props.startIndex / 3);
        const endY = Math.floor(this.props.endIndex / 3);

        return (<svg className="win-line">
                    <line x1={startX * 100 + 50} 
                        y1={startY * 100 + 50} 
                        x2={endX * 100 + 50} 
                        y2={endY * 100 + 50} />
                </svg>);
    }

}
export default Line;