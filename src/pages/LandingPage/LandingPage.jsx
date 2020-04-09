import React from 'react';
import Header from '../../components/Header/Header';
import Promo from '../../components/Promo/Promo';
import EngBar from '../../components/EngBar/EngBar';
import Footer from '../../components/Footer/Footer';
import Portfolio from '../../components/Portfolio/Portfolio';
import MaterialPromo from '../../components/MaterialPromo/MaterialPromo';



const LandingPage = () => {
	return(
			<div className='landing-page'>
				<Header />
			    <Promo><MaterialPromo/></Promo>
			    <Portfolio deviceType='desktop'/>
			    <Promo headline='Another promo headline' desc='promo text'><div>Pick Your Photos -> Add Text -> Start Rolling</div></Promo>
			    <Footer/>
	      		<EngBar/>
			</div> 
		)
	
}

export default LandingPage;