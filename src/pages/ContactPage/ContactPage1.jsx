import React from 'react';
import MultiStep from 'react-multistep';
import CustomerType from '../../components/CustomerType/CustomerType';
import CustomerName from '../../components/CustomerName/CustomerName';
import CustomerEmail from '../../components/CustomerEmail/CustomerEmail';
import Message from '../../components/Message/Message';
import emailjs from 'emailjs-com';
import './ContactPage.scss';

class ContactPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email : localStorage.getItem('email'),
			name : localStorage.getItem('name'),
			customerType: localStorage.getItem('customerType'),
			step : ''
		}
	}

	// addBtnClasses = () => {
	// 	const pageButtons = document.getElementsByTagName('button');
	// 	for(let i=0;i<pageButtons.length; i++){
	// 		if(pageButtons[i].innerText === ('NEXT' || 'Next')){
	// 			pageButtons[i].classList.add('next-button','animated','fadeInRight');
	// 		}
	// 		if (pageButtons[i].innerText === 'Prev'){
	// 			pageButtons[i].classList.add('prev-button','animated','fadeInLeft');
	// 		}
	// 	}
			
	// }
		
	// 	// const nextBtn= document.getElementsByClassName('next-button')[0];
	// 	// nextBtn.addEventListener("click", (event) => {
	// 	// 	if(document.getElementsByTagName('input')[0]){
	// 	// 		if( !document.getElementsByTagName('input')[0].value ){
	// 	// 			event.preventDefault();
	// 	// 			window.alert('found no value');
	// 	// 			document.getElementsByTagName('input')[0].classList.add('animated', 'shake');
	// 	// 		}
	// 	// 	}
	// 	// })
	// // }

	propChanged = (prop,type) => {
		console.log('ditected type change: ', prop, type);
		if(prop === 'name'){
			this.setState({name : type, step: 2});
			localStorage.setItem('name', type);
		}else if(prop === 'customerType'){
			this.setState({customerType : type, step: 1});
			localStorage.setItem('customerType', type);
		}else if(prop === 'email'){
			this.setState({email : type, step: 3});
			localStorage.setItem('email', type);
		}else if(prop === 'end'){
			this.setState({step : type});
			localStorage.clear('name', 'customerType', 'email');
		}
		
	}

	sendEmail = () => {
		console.log('got to send mail function');
		const service_id = "default_service";
	  	const template_id = "pickaroll_lead";
	    const templateParams = {
	    name: this.state.name,
	    email: this.state.email,
	    customerType : this.state.customerType
		};

		emailjs.send(service_id,template_id, templateParams, 'user_tczbWovwJF1LXUPJkdNf2')
	    .then((response) => {
	       console.log('SUCCESS!', response.status, response.text);
	    }, (err) => {
	       console.log('FAILED...', err);
	    });
	}

	componentDidMount() {
    	// this.addBtnClasses();
    }
	
	render() {
		console.log('currentState:', this.state);
		const {name,email,customerType,step} = this.state;
		const steps = [
              {name: 'StepOne', component: <CustomerType propChanged={this.propChanged}/>},
              {name: 'StepTwo', component: <CustomerName name={name} propChanged={this.propChanged}/>},
              {name: 'Submit', component: <CustomerEmail name={name} email={email} propChanged={this.propChanged} sendEmail={this.sendEmail}/>}
            ];
		return(
		<div className='contact-page'>
			{
				step===4 ? <Message name={name} /> : <MultiStep showNavigation={true} steps={steps}/>
			}
		</div>
		)
	}
}

export default ContactPage;