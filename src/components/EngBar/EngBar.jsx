import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { Link } from 'react-router-dom';
import './EngBar.scss';

const EngBar = () => {
	return(
		<div className='engag-bar animated fadeInUp delay-3s'>
			<Link to='/getStarted'><CustomButton inverted><span className='btn-text'>Pick your own roll</span></CustomButton></Link>
		</div>
	)
}

export default EngBar;