import React from 'react';
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-wizard/dist/react-wizard.scss";
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
			submited : false
		}
	}

	sendEmail = () => {
		console.log('got to send mail function');
		const service_id = "default_service";
	  	const template_id = "pickaroll_lead";
	    const templateParams = {
	    name: localStorage.getItem('name'),
	    email: localStorage.getItem('email'),
	    customerType : localStorage.getItem('customerType')
		};

		emailjs.send(service_id,template_id, templateParams, 'user_tczbWovwJF1LXUPJkdNf2')
	    .then((response) => {
	       console.log('SUCCESS!', response.status, response.text);
	    }, (err) => {
	       console.log('FAILED...', err);
	    });

	    this.setState({submited : true});
	    localStorage.clear('name', 'customerType', 'email');
	}
	
	render() {
		const steps = [
		  {
		    stepName: "1/3",
		    stepIcon: "tim-icons icon-single-02",
		    component: CustomerType,
		  },
		  {
		    stepName: "2/3",
		    stepIcon: "tim-icons icon-settings-gear-63",
		    component: CustomerName,
		  },
		  {
		    stepName: "3/3",
		    stepIcon: "tim-icons icon-delivery-fast",
		    component: CustomerEmail,
		  }
		];

		return(
		<div className='contact-page'>
		{
			! this.state.submited ?
			<Container fluid style={{ marginTop: "15px" }}>
		        <Row>
		          <Col xs={12} md={12} sm={12} className="mr-auto ml-auto">
		            <ReactWizard
		              steps={steps}
		              navSteps
		              title="Contact Us"
		              headerTextCenter
		              validate
		              color="primary"
		              finishButtonClick={this.sendEmail}
		            />
		          </Col>
		        </Row>
	      </Container>
	      : <Message />
		}
		
		</div>
		)
	}
}

export default ContactPage;