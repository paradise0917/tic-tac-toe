import React, { Component } from "react";
import AppContextProvider from "../store/globalContext";

import Navbar from "./header/Navbar";
import Player from "./game/Player";
import Result from "./game/Result";
import Mask from "./common/Mask";

import "./common/variable.scss";
import "./common/normalize.scss"
import "./common/common.scss";

class App extends Component {
	render(){
		return (
			<>
				<AppContextProvider>
					<Mask />
					<Navbar />
					<Player />
					<Result />
				</AppContextProvider>
			</>
		);
	}
}

export default App;
