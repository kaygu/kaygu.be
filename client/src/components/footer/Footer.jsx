import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container} from '@material-ui/core'
import Social from './Social';
import Copyright from './Copyright'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.root}>
            <Container maxWidth="sm">
                <Social />
                <Copyright />
            </Container>  
        </footer>
    );
};

export default Footer;