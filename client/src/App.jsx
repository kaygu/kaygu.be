import React, { Component } from 'react';
import './App.css';
import TestComponent from './components/testComponent';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'

class App extends React.Component {
    render() {
    return (
        <React.Fragment>
            <Header />
            <TestComponent />
            <Footer />
        </React.Fragment>
    );
  }
}

export default App;