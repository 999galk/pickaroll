import React from 'react';
import './CustomerEmail.scss';
import Message from '../Message/Message';

const CustomerEmail = ({name, propChanged, sendEmail, email}) => {
	if(document.querySelector('#customer-email')){
		const buttonsDiv=document.querySelector('#customer-email').parentElement.parentElement.lastElementChild;
		if(buttonsDiv.children[1]){
			buttonsDiv.children[1].remove();
		}
	}

	return(
		<div className='customer-email animated fadeInRight' id='customer-email'>
			<span className='title'>Nice to meet you {name}</span>
			<input required type='email' value={email} placeholder='Insert email address' onChange={event => propChanged('email', event.target.value)}/>
			<button className='submitBtn' type='button' onClick={() =>{propChanged('end', 4);sendEmail();} }>Hit me up!</button>
		</div>
	)
}

export default CustomerEmail;