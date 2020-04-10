import React from 'react';
import './CustomerType.scss';
import selfRoll from './selfRoll1.png';


class CustomerType extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			customerType : localStorage.getItem('customerType')
		}
	}

	changeButtonPressed = (type) => {
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

	propChanged = (type) => {
		console.log('ditected type change');
		this.setState({customerType : type});
		localStorage.setItem('customerType', type);
	}
	
	render(){
		const {propChanged, changeButtonPressed} = this;
		return(
			<div className='customer-type animated fadeInRight delay-1s flex-center-column'>
				<span className='question'>Who is it for?</span>
				<div className='options flex-center'>
					<div className='option flex-center-column' id='Private' onClick={() => {changeButtonPressed('Private');propChanged('Private');}}>
						<div className='option-image'>
							<img src={selfRoll} alt='option1img'/>
						</div>
						<div className='titleContainer'>
							<span className='title'>Private Use</span>
							<span className='text'>Im styling for myself</span>
						</div>
					</div>
					<div className='option flex-center-column' id='Business/Event' onClick={() => {changeButtonPressed('Business/Event');propChanged('Business/Event');}}>
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
	
}

export default CustomerType;