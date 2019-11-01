import React, { Component } from "react";

import "../css/navbar.scss";

class Navbar extends Component {

	render(){
        return (
            <div className="navbar flex flex-hor-center">
                <div className="wrapper">
                    <ul className="flex flex-ver-center">
                        <li><a><span className="title">Tic Tac Toe</span></a></li>
                        <li><a>Game</a></li>
                        <li><a>Rank</a></li>
                    </ul>
                </div>
            </div>
        );
	}
}

export default Navbar;