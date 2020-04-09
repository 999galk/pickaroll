import React from 'react';
import './PortfolioItem.scss';

const PortfolioItem = ({imageUrl}) => {
	return(
		<div className='portfolio-item flex-center-column'>
			<div className='image'>
				<img src={imageUrl} alt='item'/>
			</div>
			<div className='instagram-logo'>
				<img src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png' alt='insta'/>
			</div>
			<div className='instagram-link'>
				<a className='tag' href='https://www.instagram.com/pick_a_roll/' target='_blank'>@NameToTag</a>
			</div>
		</div>
	)
}

export default PortfolioItem;