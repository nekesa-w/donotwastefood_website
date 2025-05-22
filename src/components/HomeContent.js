import React from "react";
import { Link } from "react-router-dom";
import "./HomeContent.css";
import Carousel from "./Carousel";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";

function HomeContent() {
	return (
		<div className="home-container">
			<img className="hero-bg" src={require("../images/hero-rounded.png")} />
			<div className="hero-container">
				<div className="left-column">
					<h2>
						Nourishing Lives, <br />
						Sharing <br />
						Hope
					</h2>
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
					<motion.img
						initial={{
							x: 50,
						}}
						animate={{
							x: 0,
						}}
						className="hero-image"
						src={require("../images/hero-img.png")}
					/>
				</div>
			</div>

			<div className="content-container">
				<div className="green-image-wrap">
					<img
						className="green-image"
						src={require("../images/green-rounded.png")}
					/>
					<p className="green-image-text">
						Revolutionize giving, connect surplus to need, and unite
						communities.
						<br />
						<br />
						Erase waste, hunger, and build solidarity.
					</p>
				</div>
				<div className="blue-image-wrap">
					<img
						className="blue-image"
						src={require("../images/blue-rounded.png")}
					/>
					<p className="blue-image-text">
						Your impact, their smiles: a shared responsibility.
						<br />
						<br />
						Help your
						<br />
						<ReactTyped
							strings={["neighbours.", "city.", "planet."]}
							typeSpeed={150}
							backSpeed={100}
							loop
						/>
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
