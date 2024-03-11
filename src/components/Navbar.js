import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-mobile-icon">
					<Link to="/">
						<img className="navbar-logo" src="/images/logo.png" />
					</Link>
					<div class className="menu-icon" onClick={handleClick}>
						<i className={click ? "fa-solid fa-times" : "fa-solid fa-bars"} />
					</div>
				</div>
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/mission" className="nav-links" onClick={closeMobileMenu}>
							Our Mission
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/learn-more"
							className="nav-links"
							onClick={closeMobileMenu}
						>
							Learn More
						</Link>
					</li>
					<li className="nav-item">
						<Link
							to="/get-involved"
							className="nav-links-last"
							onClick={closeMobileMenu}
						>
							Get Involved
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
