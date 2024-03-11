import React from "react";
import "./MissionContent.css";

function MissionContent() {
	return (
		<div class="mission-container">
			<div className="hero-container">
				<h1>500K</h1>
				<h2>Number of meals served</h2>

				<h1>450k</h1>
				<h2>Number of people fed</h2>
			</div>
			<div className="content-container">
				<p>
					With your support, we've been able to rescue and redirect surplus food
					to those in need, reducing food waste and ensuring that no one goes
				</p>
				<h3>HUNGRY.</h3>
			</div>
			<div className="impact-container">
				<h1>Our impact</h1>
				<h2>1.</h2>
				<p>
					Food waste reduced by 5% through DNWF's targeted donation campaigns.
				</p>
				<h2>2.</h2>
				<p>
					Improved food security, evidenced by a 15% decrease in hunger in
					active regions.
				</p>
			</div>
		</div>
	);
}

export default MissionContent;
