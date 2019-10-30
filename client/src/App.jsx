import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Clock from './components/ClockSeconds';
import Toggle from './components/Toggle';
import Home from './components/home/Home';

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