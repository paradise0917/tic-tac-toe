import React, { Component } from "react";

import Icon from "@mdi/react";
import { mdiCircleOutline, mdiClose } from "@mdi/js";

class Cell extends Component{

    click = () => {
        this.props.update(this.props.index);
    }

    render(){
    	let icon = 0;
    	// -1: empty, 0: circle, 1: fork
    	switch(this.props.mark){
    	case 0:
    		icon = <Icon path={mdiCircleOutline}
    			title="circle"
    			className="icon"
    			color="rgb(46,167,192)"
    			size={2.0}/>;
    		break;
    	case 1:
    		icon = <Icon path={mdiClose}
    			title="fork"
    			className="icon"
    			color="rgb(46,115,202)"
    			size={2.5}/>;
    		break;
    	default:
    		icon = "";
    		break;
    	}
    	return (<div className="cell" onClick={this.click}>
    		<div className="flex flex-ver-center flex-hor-center">{icon}</div>
    	</div>);
    }
}


export default Cell;