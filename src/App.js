import React from 'react';
import Header from './components/Header/Header';
import Promo from './components/Promo/Promo';
import EngBar from './components/EngBar/EngBar';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Promo headline='Only ₪xx each' text='Shipping is always free'/>
      <Portfolio />
      <Promo headline='Another promo headline' text='promo text'/>
      <Footer/>
      <EngBar />
    </div>
  );
}

export default App;
