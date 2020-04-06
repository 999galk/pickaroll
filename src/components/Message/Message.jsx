import React from 'react';
import './Message.scss';
import CustomButton from '../CustomButton/CustomButton';

const Message = () => {
	return(
		<div className='message-container'>
			<span className='title'>Thank You!</span>
			<span className='text'>We'll reach out to you as soon as possible</span>
		</div>
	)
}

export default Message;