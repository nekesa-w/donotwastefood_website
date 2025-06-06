import React from "react";
import "./LearnContent.css";

function LearnContent() {
	return (
		<div className="learn-container">
			<div className="learn-hero-container">
				<div className="hero-learn">
					<h1>What is DNWF?</h1>
					<img
						className="learn-bg"
						src={require("../images/learn-hero-img.png")}
					/>
				</div>
			</div>
			<div className="learn-content-container">
				<div className="learn-image-text">
					<p>
						DNWF is a purpose-driven mobile application designed to facilitate
						and streamline the process of food donation, fostering a sense of
						community and contributing to social welfare. DNWF acts as a
						centralized platform connecting food donors with organizations and
						individuals in need, creating an efficient and transparent channel
						for redistributing surplus food resources.
					</p>
				</div>
				<img
					className="learn-rect"
					src={require("../images/rect-center.png")}
				/>
			</div>
			<div className="learn-more-container">
				<p>
					DNWF App stands as a beacon of compassion and practicality, addressing
					the critical issues of food waste and hunger with efficiency and
					heart. DNWF acts as a bridge, connecting generous donors with surplus
					food to those in need, fostering a community-driven approach to
					combating food insecurity. DNWF not only alleviates the burden of food
					insecurity for vulnerable populations but also fosters empathy and
					solidarity within society. It creates a space where individuals and
					businesses can actively contribute to social welfare, aligning with
					the growing consciousness about the importance of social
					responsibility. In essence, the DNWF food donation app plays a pivotal
					role in promoting social equity, forging connections, and empowering
					communities to collaboratively address one of humanity's most
					fundamental needs.
				</p>
			</div>
		</div>
	);
}

export default LearnContent;
