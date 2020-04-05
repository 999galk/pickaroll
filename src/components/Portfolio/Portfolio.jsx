import React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import './Portfolio.scss';

const Portfolio = () => {
	return(
		<div className='portfolio'>
			<span className='title'>Millions Of Tiles Sold</span>
			<span className='text'>GRACING WALLS OF ALL KINDS</span>
			<div className='portfolio-items'>
				<PortfolioItem imageUrl='https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5559850833281024.jpg'/>
				<PortfolioItem imageUrl='https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5559850833281024.jpg'/>
				<PortfolioItem imageUrl='https://mixtiles-json.s3.amazonaws.com/testimonials/en/framed/5559850833281024.jpg'/>
			</div>
		</div>
	)
}

export default Portfolio;