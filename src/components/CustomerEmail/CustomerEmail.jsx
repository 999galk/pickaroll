import React from 'react';
import './CustomerEmail.scss';
import Message from '../Message/Message';

const CustomerEmail = ({name, propChanged, sendEmail, step}) => {
	const buttonsDiv=document.querySelector('#root > div > div > div > div:nth-child(3) > div');
	if(buttonsDiv){
		buttonsDiv.remove();
	}

	return(
		<div className='customer-email'>
			<span className='title'>Nice to meet you {name}</span>
			<input type='email' placeholder='Insert email address' onChange={event => propChanged('email', event.target.value)}/>
			<button className='submitBtn' type='button' onClick={() =>{propChanged('end', 4);sendEmail();} }>Hit me up!</button>
		</div>
	)
}

export default CustomerEmail;