import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default function Carousel() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			<div className="carousel-card">
				<p>
					Life-changing app! Streamlined process, connecting donors with those
					in need seamlessly. A game-changer for fostering compassion and
					reducing food waste.
				</p>
				<h4>Sarah K.</h4>
			</div>
			<div className="carousel-card">
				<p>
					This food donation app exceeded my expectations! A fantastic way to
					make a meaningful difference in the community!
				</p>
				<h4>David F.</h4>
			</div>
			<div className="carousel-card">
				<p>
					I am truly grateful for the food donation I received through this app.
					The variety of food provided was amazing, and the quality was
					top-notch. It's heartwarming to see how a simple act of kindness can
					make such a significant impact.
				</p>
				<h4>Joseph K.</h4>
			</div>
			<div className="carousel-card">
				<p>
					The food donation app is a fantastic initiative, and I appreciate the
					effort to connect surplus food with those who can benefit from it. The
					food I received was in good condition, and the variety was decent.
				</p>
				<h4>Mary W.</h4>
			</div>
		</Slider>
	);
}
