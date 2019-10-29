import React, {Component} from 'react';

function Navbar() {
    return (
        <nav>
            <a href="/home">Kaygu.be</a>
            <a href="/blog">Blog</a>
            <a href="/resume">CV</a>
            <a href="https://github.com/kaygu">GitHub</a>
        </nav>
    );
}

export default Navbar;