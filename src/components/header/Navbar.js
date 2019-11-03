import React, { Component } from "react";

import "./navbar.scss";

class Navbar extends Component {

    render(){
        return (
            <div className="navbar flex flex-hor-center">
                <div className="wrapper">
                    <ul className="flex flex-ver-center">
                        <li><span className="title">Tic Tac Toe</span></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;