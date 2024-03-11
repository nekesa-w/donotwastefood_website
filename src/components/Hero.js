import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
	return (
		<div className="hero-container">
			<img className="hero-rounded" src="/images/hero-rounded.png" />
			<h2>Nourishing Lives, Sharing Hope</h2>
			<p>
				Join our mission to end hunger and food waste. Every meal matters, and
				with our app, you can make a real impact.
			</p>
			<Link>Get The App</Link>
			<img className="hero-image" src="/images/hero-img.png" />
		</div>
	);
}

export default Hero;
