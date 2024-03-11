import React from "react";
import { Link } from "react-router-dom";
import "./HomeContent.css";
import Carousel from "./Carousel";

function HomeContent() {
	return (
		<div className="home-container">
			<img className="hero-bg" src={require("../images/hero-rounded.png")} />
			<div className="hero-container">
				<div className="left-column">
					<h2>Nourishing Lives, Sharing Hope</h2>
					<p>
						Join our mission to end hunger and food waste. Every meal matters,
						and with our app, you can make a real impact.
					</p>
					<h3>
						<Link to="/home" className="hero-link">
							Get The App
						</Link>
					</h3>
				</div>
				<div className="right-column">
					<img className="hero-image" src={require("../images/hero-img.png")} />
				</div>
			</div>

			<div className="content-container">
				<div className="green-image-wrap">
					<img
						className="green-image"
						src={require("../images/green-rounded.png")}
					/>
					<p className="green-image-text">
						DNWF helps redistribute quality food surplus to people in need.
						<br /> Help your neighbors with a simple click in our app.
					</p>
				</div>
				<div className="blue-image-wrap">
					<img
						className="blue-image"
						src={require("../images/blue-rounded.png")}
					/>
					<p className="blue-image-text">
						Help the planet.
						<br />
						Foster community.
						<br />
						Reduce waste.
					</p>
				</div>
			</div>

			<div className="carousel-container">
				<h2>Our Community</h2>
				<Carousel />
			</div>
		</div>
	);
}

export default HomeContent;
