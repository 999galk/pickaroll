import React from 'react';
import './Message.scss';
import { Link } from 'react-router-dom';
import CustomButton from '../CustomButton/CustomButton';

const Message = () => {
	return(
		<div className='message-container flex-center-column'>
			<span className='title'>Thank You!</span>
			<span className='text'>We'll reach out to you as soon as possible</span>
			<Link to='/'><CustomButton inverted> Go Back</CustomButton></Link>
		</div>
	)
}

export default Message;