import React, {Component} from 'react';

function Navbar() {
    const menu = [
        {id: 1, name: "Kaygu.be", link: "/home"},
        {id: 2, name: "Blog", link: "/blog"},
        {id: 3, name: "CV", link: "/resume"}
    ];
    const content = menu.map((pages) => 
        <a href={pages.link} key={pages.id}>{pages.name}</a>
    );
    return (
        <nav>
            {content}
        </nav>
    );
}

export default Navbar;