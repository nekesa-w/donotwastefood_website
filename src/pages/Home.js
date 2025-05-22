import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";

function Home() {
	return (
		<>
			<Navbar />
			<HomeContent />
			<Footer />
		</>
	);
}

export default Home;
