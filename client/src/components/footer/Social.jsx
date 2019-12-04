import React from 'react';
import {Link, List, ListItem, ListItemText, Tooltip} from '@material-ui/core'

function Social() {
    const social = [
        {id: 1, name: "LinkedIn", link: "https://www.linkedin.com/in/camille-de-neef-60890a2b"},
        {id: 2, name: "GitHub", link: "https://github.com/kaygu"},
        {id: 3, name: "Twitter", link: "https://twitter.com/kaaygu"},
        {id: 4, name: "Twitch", link: "https://www.twitch.tv/kaygu"}
        //add logo
    ];
    const content = social.map((social) => 
        <ListItem button key={social.id} component="a" href={social.link}>
            <Tooltip title={social.name}>
                <ListItemText primary='test' />
            </Tooltip>
        </ListItem>
    );
    return (
        <List>
            {content}
        </List>
    );
}

export default Social;