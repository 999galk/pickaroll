import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import EngBar from './components/EngBar/EngBar';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={LandingPage} />
      </Switch>
      <Footer/>
      <EngBar />
    </div>
  );
}

export default App;
