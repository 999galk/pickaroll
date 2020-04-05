import React from 'react';
import Header from '../../components/Header/Header';
import Promo from '../../components/Promo/Promo';
import EngBar from '../../components/EngBar/EngBar';
import Portfolio from '../../components/Portfolio/Portfolio';

const LandingPage = () => {
	return(
		<div className='landing-page'>
			<Header />
		    <Promo headline='Only ₪xx each' desc='Shipping is always free'/>
		    <Portfolio deviceType='desktop'/>
		    <Promo headline='Another promo headline' desc='promo text'/>
		</div>
	)
}

export default LandingPage;