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
        fontSize: 25,
        fill: theme.palette.type === 'dark' ? theme.palette.grey[400] : theme.palette.grey[600],
    }
}));

function Social() {
    const classes = useStyles()

    const social = [
        {id: 1, name: "LinkedIn", link: "https://www.linkedin.com/in/camille-de-neef-60890a2b", SvgIcon: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"},
        {id: 2, name: "GitHub", link: "https://github.com/kaygu", SvgIcon: "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"},
        {id: 3, name: "Twitter", link: "https://twitter.com/kaaygu", SvgIcon: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"},
        {id: 4, name: "Twitch", link: "https://www.twitch.tv/kaygu", SvgIcon: "M117.605,0 L117.605,68.605 L73.503,112.704 L53.904,112.704 L29.401,137.207 L29.401,112.704 L8.52651283e-14,112.704 L8.52651283e-14,24.502 L24.5,0 L117.605,0 Z M107.805,9.801 L29.401,9.801 L29.401,83.304 L51.452,83.304 L51.452,100.454 L68.605,83.304 L88.206,83.304 L107.805,63.703 L107.805,9.801 Z M93.1042,26.9518 L93.1042,56.3518 L83.3042,56.3518 L83.3042,26.9518 L93.1042,26.9518 Z M66.1532,26.9518 L66.1532,56.3518 L56.3532,56.3518 L56.3532,26.9518 L66.1532,26.9518 Z"}
        //add logo
    ];
    const content = social.map((social) => 
        <li key={social.id}>
            <Tooltip title={social.name}>
                <a href={social.link}>
                    <ListItemIcon>
                        <SvgIcon className={classes.icon} viewBox="0 0 24 24">
                            <path d={social.SvgIcon} />
                        </SvgIcon>
                    </ListItemIcon>
                </a>
            </Tooltip>
        </li>
    );
    return (
        <List className={classes.root}>
            {content}
        </List>
    );
}

export default Social;