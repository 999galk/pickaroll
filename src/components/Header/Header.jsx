import React from 'react';
import './Header.scss';
import logo from './assets/logo.png';
import bidud from './assets/bidud.jpg';
import blackWhite from './assets/black-white.jpg';
import red from './assets/red.jpg';
import saveTheDate from './assets/save-the-date.jpg';
import wedding from './assets/wedding-invite.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Header = () => {
	return(
		<div className='header flex-center-column'>
			<div className='header-item flex-center'>
				<div className='logo-centered'>
					<img src={logo} alt='logo'/>
				</div>
			</div>
			<div className='header-item flex-center'>
				<div className='slogen flex-center-column animated fadeInLeft delay-1s'>
					<span className='headline'>Design Your Own Rolling Papers</span>
					<span className='text'>Custom made rolling papers</span>
				</div>
			</div>
			<div className='header-item flex-center'>
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