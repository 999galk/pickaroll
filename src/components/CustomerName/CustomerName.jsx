import React from 'react';
import './CustomerName.scss';

const CustomerName = ({propChanged, validateField, name}) => {
	return(
		<div className='customer-name animated fadeInRight' id='customer-name'>
			<span className='title'>Let's get to know you</span>
			<input type='text' placeholder='Whats your name?' id='name-input' value={name} onChange={ event => propChanged('name', event.target.value)}/>
		</div>
	)
}

export default CustomerName;