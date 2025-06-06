import React from "react";
import "./MissionContent.css";

function MissionContent() {
	return (
		<div className="mission-container">
			<div className="mission-hero-container">
				<img
					className="mission-bg"
					src={require("../images/mission-hero-img.png")}
					alt="Mission background"
				/>
				<div className="hero-stat">
					<h1>500K</h1>
					<h2>Number of meals served</h2>
				</div>
				<div className="hero-stat">
					<h1>450K</h1>
					<h2>Number of people fed</h2>
				</div>
			</div>

			<div className="mission-content-container">
				<div className="round-image-wrap">
					<div className="round-image-inner">
						<img
							className="mission-round"
							src={require("../images/round-center.png")}
							alt="Round impact"
						/>
						<div className="round-image-text">
							<p>
								With your support, we've been able to <br />
								rescue and redirect surplus food to <br />
								those in need, reducing food waste <br />
								and ensuring that no one goes
							</p>
							<h3>HUNGRY.</h3>
						</div>
					</div>
				</div>
			</div>

			<div className="impact-container">
				<h2>Our impact</h2>

				<div className="impact1-image-wrap">
					<h2>1.</h2>
					<p>
						Food waste reduced by 5% through DNWF's targeted donation campaigns.
					</p>
					<img
						className="impact1-image"
						src={require("../images/impact-1.png")}
						alt="Impact 1"
					/>
				</div>

				<div className="impact2-image-wrap">
					<img
						className="impact2-image"
						src={require("../images/impact-2.png")}
						alt="Impact 2"
					/>
					<h2>2.</h2>
					<p>
						Improved food security, evidenced by a 15% decrease in hunger in
						active regions.
					</p>
				</div>
			</div>

			<div className="join-content">
				<a href="#">
					<img
						className="join-image"
						src={require("../images/download-rounded.png")}
						alt="Join Now"
					/>
				</a>
			</div>
		</div>
	);
}

export default MissionContent;
