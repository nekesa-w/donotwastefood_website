import React from "react";
import "./InvolvedContent.css";

function InvolvedContent() {
	return (
		<div className="involved-container">
			<div className="involved-hero-container">
				<img
					className="involved-bg"
					src={require("../images/involved-hero-img.png")}
					alt="Involved background"
				/>
				<a href="#">
					<img
						className="apple-link"
						src={require("../images/apple.png")}
						alt="Apple link"
					/>
				</a>
				<a href="#">
					<img
						className="google-link"
						src={require("../images/google.png")}
						alt="Google link"
					/>
				</a>
			</div>

			<div className="involved-content-container">
				<h2>
					How to use <br></br>DNWF app
				</h2>

				<div className="circle1-image-wrap">
					<h2>1.</h2>
					<p>Download app: Visit app store, search for "DNWF ," and install.</p>
					<img
						className="circle1-image"
						src={require("../images/circle-1.png")}
						alt="Circle 1"
					/>
				</div>

				<div className="circle2-image-wrap">
					<img
						className="circle2-image"
						src={require("../images/circle-2.png")}
						alt="Circle 2"
					/>
					<h2>2.</h2>
					<p>Sign up: Create an account, providing necessary details.</p>
				</div>

				<div className="circle3-image-wrap">
					<h2>1.</h2>
					<p>
						Donators: List surplus food. Receivers: Browse available items,
						request donations.
					</p>
					<img
						className="circle3-image"
						src={require("../images/circle-3.png")}
						alt="Circle 3"
					/>
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

export default InvolvedContent;
