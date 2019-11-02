import React, { Component } from "react";
import AppContextProvider from "./store/globalContext";

import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Result from "./components/Result";
import Mask from "./components/Mask";

import "./css/normalize.scss";
import "./css/common.scss";

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
