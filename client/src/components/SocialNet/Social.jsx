import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {List, ListItemIcon, Tooltip} from '@material-ui/core'
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "flex-end",
    },
    icon: {
        
        fontSize: 50,
        margin: 'auto',
        //padding: theme.spacing(1),
        fill: theme.palette.type === 'dark' ? theme.palette.grey[400] : theme.palette.grey[600],
    }
}));

function Social() {
    const classes = useStyles()

    const social = [
        {id: 1, name: "LinkedIn", link: "https://www.linkedin.com/in/camille-de-neef-60890a2b", viewbox: "0 0 512 512", svgIcon: "m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-256 406h-60v-210h60zm0-240h-60v-60h60zm210 240h-60v-120c0-16.539062-13.460938-30-30-30s-30 13.460938-30 30v120h-60v-210h60v11.308594c15.71875-4.886719 25.929688-11.308594 45-11.308594 40.691406.042969 75 36.546875 75 79.6875zm0 0"},
        {id: 2, name: "GitHub", link: "https://github.com/kaygu", viewbox: "0 0 24 24", svgIcon: "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"},
        {id: 3, name: "Twitter", link: "https://twitter.com/kaaygu", viewbox: "2 4 20 15", svgIcon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"},
        {id: 4, name: "Twitch", link: "https://www.twitch.tv/kaygu", viewbox: "0 0 24 24", svgIcon: "M.975 4.175v16.694h5.749v3.131h3.139l3.134-3.132h4.705l6.274-6.258v-14.61h-21.434zm3.658-2.09h17.252v11.479l-3.66 3.652h-5.751l-3.134 3.127v-3.127h-4.707z M10.385 6.262h2.09v6.26h-2.09z M16.134 6.262h2.091v6.26h-2.091z"},
    ];
    const content = social.map((social) => 
        <li key={social.id}>
            
                <a href={social.link}>
                <Tooltip title={social.name}>
                    <ListItemIcon>
                        <SvgIcon className={classes.icon} viewBox={social.viewbox}>
                            <path d={social.svgIcon} />
                        </SvgIcon>
                    </ListItemIcon>
                    </Tooltip>
                </a>
            
        </li>
    );
    return (
        <List className={classes.root}>
            {content}
        </List>
    );
}

export default Social;