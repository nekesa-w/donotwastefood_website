import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
	return (
		<nav className="footer">
			<img
				className="footer-bg"
				src={require("../images/footer-rounded.png")}
			/>
			<div className="footer-container">
				<div className="top-row">
					<ul className="footer-menu">
						<li className="footer-item">
							<Link to="/get-app" className="footer-links-first">
								Get The App
							</Link>
						</li>
						<li className="footer-item">
							<Link to="/terms" className="footer-links">
								Terms And Conditions
							</Link>
						</li>
						<li className="footer-item">
							<Link to="/terms" className="footer-links">
								Privacy Policy
							</Link>
						</li>
						<li className="footer-item">
							<Link to="/terms" className="footer-links">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
				<div className="bottom-row">
					<p>DNWF © 2024</p>
				</div>
			</div>
		</nav>
	);
}

export default Footer;
