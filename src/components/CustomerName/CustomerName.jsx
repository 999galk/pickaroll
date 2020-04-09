import React from 'react';
import './CustomerName.scss';

class CustomerName extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name : localStorage.getItem('name')
		}
	}

	propChanged = (type) => {
		console.log('ditected name change');
		this.setState({name : type});
		localStorage.setItem('name', type);
	}

	render(){
		return(
			<div className='customer-name animated fadeInRight' id='customer-name'>
				<span className='title'>Let's get to know you!</span>
				<input type='text' placeholder='Whats your name?' id='name-input' value={localStorage.getItem('name')} onChange={ event => this.propChanged(event.target.value)}/>
			</div>
		)
	}
}

export default CustomerName;