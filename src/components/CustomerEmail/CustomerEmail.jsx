import React from 'react';
import './CustomerEmail.scss';

class CustomerEmail extends React.Component{
	// if(document.querySelector('#customer-email')){
	// 	const buttonsDiv=document.querySelector('#customer-email').parentElement.parentElement.lastElementChild;
	// 	if(buttonsDiv.children[1]){
	// 		buttonsDiv.children[1].remove();
	// 	}
	// }
	constructor(props){
		super(props);
		this.state = {
			email: localStorage.getItem('email'),
			validated : true
		}
	}

	propChanged = (type) => {
		console.log('ditected email change');
		this.setState({email : type});
		localStorage.setItem('email', type);
		document.getElementById('email-input').classList.remove('animated','bounce');
		this.setState({validated : true})
	}

	isValidated = () => {
		console.log('got to validate function:', localStorage.getItem('email'));
		if(localStorage.getItem('email')){
			return true;
		}else{
			document.getElementById('email-input').classList.add('animated','bounce');
			this.setState({validated : false});
			return false;
		}
	}

	render(){
		return(
			<div className='customer-email animated fadeInRight flex-center-column' id='customer-email'>
				<span className='title'>Nice to meet you { localStorage.getItem('name') ? localStorage.getItem('name') : null}</span>
				<input required type='email' id='email-input' value={localStorage.getItem('email')} placeholder='Insert email address' onChange={event => this.propChanged(event.target.value)}/>
				{
					!this.state.validated ?
					<span className='error-message'>* Required</span>
					: null
				}
			</div>
		)
	}
}

export default CustomerEmail;