import React from "react";
import "./HomeContent.css";

function HomeContent() {
	return (
		<div className="home-container">
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

			<div classNme="content-container">
				<h3>
					DNWF helps redistribute high-quality surplus to people in need. Help
					neighbors all with one simple app.
				</h3>
				<h2>
					Help the planet.<br></br>Foster community.<br></br>Reduce waste.
				</h2>
			</div>

			<div classNme="carousel-container">
				<h3>Our community</h3>
				<p>
					Life-changing app! Streamlined process, connecting donors with those
					in need seamlessly. A game-changer for fostering compassion and
					reducing food waste
				</p>
				<h4>Sarah K.</h4>
				<p>
					"This food donation app exceeded my expectations! A fantastic way to
					make a meaningful difference in the community!"
				</p>
				<h4>David F.</h4>
			</div>
		</div>
	);
}

export default HomeContent;
