import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
	return (
		<nav className="footer">
			<div
				className="footer-container"
				style={{
					backgroundImage: `url("/images/footer-rounded.png")`,
				}}
			>
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
				<p>DNWF © 2024</p>
			</div>
		</nav>
	);
}

export default Footer;
