import React from 'react';
import {makeStyles} from '@material-ui/core'
import {Container, Typography} from '@material-ui/core'
import Background from './Background'
import SocialSVG from './SocialSVG'

import Clock from '../ClockSeconds'

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }
}));

function Home() {
    const classes = useStyles();

    return (
        <main>
            <Container className={classes.root}>
                <Typography variant='h3'>Camille De Neef<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></Typography>
                <SocialSVG />
                <Clock />
            </Container>
        </main>
    );
}

export default Home;