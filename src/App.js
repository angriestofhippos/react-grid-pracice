import React from "react";
import Header from "./components/Header/Header.js";
import Menu from "./components/Menu/Menu.js";
import Body from "./components/Body/Body.js";
import Footer from "./components/Footer/Footer.js";

import styles from "./App.module.css";

class App extends React.Component {
	state = {};
	render() {
		return (
			<div className={styles.App}>
				<Header />
				<Menu />
				<Body />
				<Footer />
			</div>
		);
	}
}

export default App;
