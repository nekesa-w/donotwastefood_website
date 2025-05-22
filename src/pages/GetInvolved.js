import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import InvolvedContent from "../components/InvolvedContent";
import Footer from "../components/Footer";

function GetInvolved() {
	return (
		<>
			<Navbar />
			<InvolvedContent />
			<Footer />
		</>
	);
}

export default GetInvolved;
