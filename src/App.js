import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Mission from "./components/pages/Mission";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact component={Home} />
					<Route path="/our-mission" component={Mission} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
