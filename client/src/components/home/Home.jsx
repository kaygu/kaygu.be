import React from 'react';
import {Container, Typography} from '@material-ui/core'
import Background from './Background'
import SocialSVG from './SocialSVG'

import Clock from '../ClockSeconds'

function Home() {
    return (
        <main>
            <Container>
                <Typography variant='h3'>Camille De Neef</Typography>
                <SocialSVG />
                <Clock />
            </Container>
        </main>
    );
}

export default Home;