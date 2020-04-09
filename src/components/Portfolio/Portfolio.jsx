import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import './Portfolio.scss';

const Portfolio = ({deviceType}) => {
	return(
		<div className='portfolio flex-center-column'>
			<span className='title'>Pick A Roll Products on social media</span>
			<span className='text'>Our friends sharing</span>
			<div className='portfolio-items flex-evenly'>
				<PortfolioItem imageUrl='https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5559850833281024.jpg'/>
				<PortfolioItem imageUrl='https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/6566050639118336%20(1).jpeg'/>
				<PortfolioItem imageUrl='https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/4577586477531136.png'/>
			</div>
		</div>
	)
}

export default Portfolio;