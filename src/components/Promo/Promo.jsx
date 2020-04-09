import React from 'react';
import './Promo.scss';

const Promo = ({children, ...otherProps}) => {
	return(
		<div className='promo flex-center-column'>
			{children}
		</div>
	)
}

export default Promo;