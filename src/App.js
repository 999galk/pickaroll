import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ContactPage from './pages/ContactPage/ContactPage';
import LandingPage from './pages/LandingPage/LandingPage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/getstarted' component={ContactPage} />
      </Switch>
    </div>
  );
}

export default App;
