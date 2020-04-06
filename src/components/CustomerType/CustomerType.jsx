import React from 'react';
import './CustomerType.scss';
import selfRoll from './selfRoll1.png';

const changeButtonPressed = (type) => {
	const option = document.getElementById(type);
	if(option.classList.contains("active")){
		option.classList.remove("active");
	}else {
		option.classList.add("active");
	}
}

const CustomerType = ({propChanged}) => {
	return(
		<div className='customer-type'>
			<span className='question'>Who is it for?</span>
			<div className='options'>
				<div className='option' id='Private' onClick={() => {changeButtonPressed('Private');propChanged('customerType','Private');}}>
					<div className='option-image'>
						<img src={selfRoll} alt='option1img'/>
					</div>
					<div className='titleContainer'>
						<span className='title'>Private Use</span>
					</div>
					<span className='text'>Im styling for myself</span>
				</div>
				<div className='option' id='Business/Event' onClick={() => {changeButtonPressed('Business/Event');propChanged('customerType','Business/Event');}}>
					<div className='option-image'>
						<img src={selfRoll} alt='option2img'/>
					</div>
					<div className='titleContainer'>
						<span className='title'>Business/Event</span>
					</div>
					<span className='text'>Im styling for an event </span>
				</div>
			</div>
		</div>
	)
}

export default CustomerType;