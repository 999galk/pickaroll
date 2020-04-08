import React from 'react';
import './CustomerType.scss';
import selfRoll from './selfRoll1.png';

const changeButtonPressed = (type) => {
	const option = document.getElementById(type);
	const personal = document.getElementById('Private');
	const business = document.getElementById('Business/Event');
	if(type==='Business/Event' && personal.classList.contains("active")){
		personal.classList.remove("active");
	}
	if(type==='Private' && business.classList.contains("active")){
		business.classList.remove("active");
	}
	
	if(option.classList.contains("active")){
		option.classList.remove("active");
	}else {
		option.classList.add("active");
	}
} 

const CustomerType = ({propChanged}) => {
	return(
		<div className='customer-type animated fadeInRight delay-1s'>
			<span className='question'>Who is it for?</span>
			<div className='options'>
				<div className='option' id='Private' onClick={() => {changeButtonPressed('Private');propChanged('customerType','Private');}}>
					<div className='option-image'>
						<img src={selfRoll} alt='option1img'/>
					</div>
					<div className='titleContainer'>
						<span className='title'>Private Use</span>
						<span className='text'>Im styling for myself</span>
					</div>
				</div>
				<div className='option' id='Business/Event' onClick={() => {changeButtonPressed('Business/Event');propChanged('customerType','Business/Event');}}>
					<div className='option-image'>
						<img src={selfRoll} alt='option2img'/>
					</div>
					<div className='titleContainer'>
						<span className='title'>Business/Event</span>
						<span className='text'>Im styling for an event </span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CustomerType;