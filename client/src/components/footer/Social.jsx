import React, {Component} from 'react';

function Social() {
    const social = [
        {id: 1, name: "LinkedIn", link: "https://www.linkedin.com/in/camille-de-neef-60890a2b"},
        {id: 2, name: "GitHub", link: "https://github.com/kaygu"},
        {id: 3, name: "Twitter", link: "https://twitter.com/kaaygu"},
        {id: 4, name: "Twitch", link: "https://www.twitch.tv/kaygu"}
        //add logo
    ];
    const content = social.map((social) => 
        <li key={social.id}><a href={social.link}>{social.name}</a></li>
    );
    return (
        <ul>
            {content}
        </ul>
    );
}

export default Social;