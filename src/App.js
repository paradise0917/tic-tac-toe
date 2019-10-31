import React, { Component } from "react";
import AppContextProvider from "./store/globalContext";

import Navbar from "./components/Navbar";
import Mask from "./components/Mask";

import "./css/normalize.scss";
import "./css/common.scss";

class App extends Component {

	render(){
		return (
			<>
				<AppContextProvider>
					<Navbar />
					<Mask />
				</AppContextProvider>
			</>
		);
	}
}

export default App;
