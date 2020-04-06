import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import { Link } from 'react-router-dom';
import './EngBar.scss';

const EngBar = () => {
	return(
		<div className='engag-bar'>

			<Link className='' to='/getStarted'><CustomButton inverted> Let's Go </CustomButton></Link>
		</div>
	)
}

export default EngBar;