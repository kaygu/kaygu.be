import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

import Clock from './components/ClockSeconds';

class App extends React.Component {
    render() {
    return (
        <React.Fragment>
            <Header />
            <Home />
            <Clock />
            <Footer />
        </React.Fragment>
    );
  }
}

export default App;