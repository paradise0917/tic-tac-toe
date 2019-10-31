import React, { Component } from "react";
import { AppContext } from "../store/globalContext";

import "../css/mask.scss";

class Mask extends Component {

    static contextType = AppContext;
    constructor(props) {
        super(props);
    };

	render(){
        return (
            <div className={this.context.showMask === true ? "mask" : "is-hidden-opacity"}>
            
            </div>
        );
	}
}

export default Mask;