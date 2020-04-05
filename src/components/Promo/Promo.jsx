import React from 'react';
import './Promo.scss';

const Promo = ({headline, desc}) => {
	return(
		<div className='promo'>
			<span className='promo-healine'>Only ₪xx each</span>
			<span className='promo-description'>Shipping is always free</span>
		</div>
	)
}

export default Promo;