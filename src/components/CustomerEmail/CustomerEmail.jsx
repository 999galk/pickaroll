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
			email: localStorage.getItem('email')
		}
	}

	propChanged = (type) => {
		console.log('ditected email change');
		this.setState({email : type});
		localStorage.setItem('email', type);
	}

	render(){
		return(
			<div className='customer-email animated fadeInRight flex-center-column' id='customer-email'>
				<span className='title'>Nice to meet you { localStorage.getItem('name') ? localStorage.getItem('name') : null}</span>
				<input required type='email' value={localStorage.getItem('email')} placeholder='Insert email address' onChange={event => this.propChanged(event.target.value)}/>
			</div>
		)
	}
}

export default CustomerEmail;