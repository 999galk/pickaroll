import React from 'react';
import './CustomerName.scss';

const CustomerName = ({propChanged}) => {
	return(
		<div className='customer-name'>
			<span className='title'>Let's get to know you</span>
			<input type='text' placeholder='Whats your name?' onChange={event => propChanged('name', event.target.value)}/>
		</div>
	)
}

export default CustomerName;