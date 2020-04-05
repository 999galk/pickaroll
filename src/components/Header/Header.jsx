import React from 'react';
import ReactPlayer from 'react-player';
import './Header.scss';
import logo from './logo_transparent.png';

const divStyle = {
  'borderRadius' :'20px'
};

const Header = () => {
	return(
		<div className='header'>
			<div className='header-item'>
				<div className='logo-centered'>
					<img src={logo} alt='logo'/>
				</div>
			</div>
			<div className='header-item'>
				<div className='slogen'>
					Custom made & Designed Rolling Papers
				</div>
			</div>
			<div className='header-item'>
				<div className='video-centered'>
					<ReactPlayer style={divStyle} url='https://www.youtube.com/watch?v=ay1_6sfxl7c' playing/>
				</div>
			</div>
		</div>
	)
}

export default Header;