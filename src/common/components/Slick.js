import React, { Component } from 'react';
import '../../App.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class Slick extends Component {
	render(){
		const settings = {
			dots: true,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true
		}
		return(
			<div>
				<Slider {...settings}>
					<div className='slick-image'><img src='/images/ferrari.jpg' alt='' /></div>
					<div className='slick-image'><img src='/images/train1.jpg' alt=''/></div>
					<div className='slick-image'><img src='/images/lamb.jpg' alt='' /></div>
					<div className='slick-image'><img src='/images/schooner.jpg' alt='' /></div>
				</Slider>
			</div>
		)
	}
}

export { Slick };