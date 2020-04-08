import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { Link } from 'react-router-dom';
import './EngBar.scss';

const EngBar = () => {
	return(
		<div className='engag-bar animated fadeInUp delay-3s'>
			<Link to='/getStarted'><CustomButton inverted> Let's Go </CustomButton></Link>
		</div>
	)
}

export default EngBar;