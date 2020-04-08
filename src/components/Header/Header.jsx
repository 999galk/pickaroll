import React from 'react';
import ReactPlayer from 'react-player';
import './Header.scss';
import logo from './logo.png';
import bidud from './bidud.jpg';
import blackWhite from './black-white.jpg';
import red from './red.jpg';
import saveTheDate from './save-the-date.jpg';
import wedding from './wedding-invite.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const divStyle = {
  'borderRadius' :'20px'
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Header = () => {
	return(
		<div className='header'>
			<div className='header-item'>
				<div className='logo-centered'>
					<img src={logo} alt='logo'/>
				</div>
			</div>
			<div className='header-item'>
				<div className='slogen animated fadeInLeft delay-1s'>
					<span>Custom made & Designed Rolling Papers</span>
				</div>
			</div>
			<div className='header-item'>
			<div className='carousel-container animated fadeInRight delay-2s'>
				<Carousel autoPlay={true} showStatus={false} showThumbs={false} showIndicators={false} infiniteLoop={true}>
				<div className='image-container'>
					<img src={blackWhite} alt='blackWhite'/>
				</div>
				<div className='image-container'>	
					<img src={red} alt='red'/>
				</div>
				<div className='image-container'>	
					<img src={saveTheDate} alt='saveTheDate'/>
				</div>
				<div className='image-container'>
					<img src={wedding} alt='wedding'/>
				</div>
				<div className='image-container'>
					<img src={bidud} alt='bidud'/>
				</div>
				</Carousel>
			</div>
			</div>
		</div>
	)
}

export default Header;