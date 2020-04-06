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
			email : '',
			name : '',
			customerType: '',
			step : ''
		}
	}

	propChanged = (prop,type) => {
		console.log('ditected type change: ', prop, type);
		if(prop === 'name'){
			this.setState({name : type, step: 2});
		}else if(prop === 'customerType'){
			this.setState({customerType : type, step: 1});
		}else if(prop === 'email'){
			this.setState({email : type, step: 3});
		}else if(prop === 'end'){
			this.setState({step : type});
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
	
	render() {
		console.log('currentState:', this.state);
		const steps = [
              {name: 'StepOne', component: <CustomerType propChanged={this.propChanged}/>},
              {name: 'StepTwo', component: <CustomerName propChanged={this.propChanged}/>},
              {name: 'Submit', component: <CustomerEmail name={this.state.name} propChanged={this.propChanged} sendEmail={this.sendEmail}/>}
            ];
		return(
		<div className='contact-page'>
			{
				this.state.step===4 ? <Message name={this.state.name} /> : <MultiStep showNavigation={true} steps={steps}/>
			}
		</div>
		)
	}
}

export default ContactPage;