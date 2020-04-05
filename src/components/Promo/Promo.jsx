import React from 'react';
import './Promo.scss';

const Promo = ({headline, desc}) => {
	return(
		<div className='promo'>
			<span className='promo-healine'>{headline}</span>
			<span className='promo-description'>{desc}</span>
		</div>
	)
}

export default Promo;