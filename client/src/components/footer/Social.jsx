import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';
import {Link, List, ListItem, ListItemText, Tooltip} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        marginRight: 'auto', //marche po
    }
}));

function Social() {
    const classes = useStyles()

    const social = [
        {id: 1, name: "LinkedIn", link: "https://www.linkedin.com/in/camille-de-neef-60890a2b", icon: "LinkedIn"},
        {id: 2, name: "GitHub", link: "https://github.com/kaygu", icon: "GitHub"},
        {id: 3, name: "Twitter", link: "https://twitter.com/kaaygu", icon: "Twitter"},
        {id: 4, name: "Twitch", link: "https://www.twitch.tv/kaygu", icon: ""}
        //add logo
    ];
    const content = social.map((social) => 
        <ListItem button key={social.id} component="a" href={social.link}>
            <Tooltip title={social.name}>
                <Icon>{social.icon}</Icon>
            </Tooltip>
        </ListItem>
    );
    return (
        <List className={classes.root}>
            {content}
        </List>
    );
}

export default Social;