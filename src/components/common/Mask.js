import React, { Component } from "react";
import { AppContext } from "../../store/globalContext";

import "./mask.scss";

class Mask extends Component {

    static contextType = AppContext;

    render(){
        return (
            <div className={this.context.maskVisibility === true ? "mask" : "is-hidden-opacity"}></div>
        );
    }
}

export default Mask;