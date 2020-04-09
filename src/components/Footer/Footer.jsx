import React from 'react';
import './Footer.scss';
import facebookIcon from './facebook-icon.png';

const Footer = () => {
	return (
		<div className='footer'>
			<span className='text'>Follow us on social media</span>
			<div className="contact">
		        <div className="social-links flex-center">
		          <a href="https://www.facebook.com/pick_a_roll-104657234374362/" target="_blank">
		            <img src={facebookIcon} alt='facebook'/>
		          </a>
		          <a href="https://www.instagram.com/pick_a_roll/" target="_blank" className='flex-center-column'>
		            <img src='https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c521.png' alt='insta'/>
		          </a>
		    	</div>
		    </div>
		</div>
	)
}

export default Footer;