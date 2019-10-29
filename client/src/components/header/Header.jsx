import React, {Component} from 'react';
import Background from './Background';
import Navbar from './Navbar';

function Header() {
    return (
        <header>
            <Background />
            <Navbar />
        </header>
    );
}

export default Header;