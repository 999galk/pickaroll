import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ContactPage from './pages/ContactPage/ContactPage';
import LandingPage from './pages/LandingPage/LandingPage';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';

class App extends React.Component {
  constructor(props){
		super(props);
		this.state = {
			loading : true
		}
	}

	componentDidMount(){
		this.setState({loading:false});
	}

	render(){
		const {loading} = this.state;
		  return (
		  	(
				loading
				?
				<div className="loader">
					<Loader
				     type="BallTriangle"
				     color="#00BFFF"
				     height={500}
				     width={100}
				     timeout={5000} //5 secs
					/>	
				</div>
				: 
				<div className="App">
			      <Switch>	
			          <Route exact path='/' component={LandingPage} />
			          <Route path='/getstarted' component={ContactPage} />
			      </Switch>
			    </div>
			)
		  );
	}
}

export default App;
