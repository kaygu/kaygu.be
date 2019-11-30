import React from 'react';
import {Container} from '@material-ui/core'
import Social from './Social';
import Copyright from './Copyright'

function Footer() {
    return (
        <footer>
            <Container maxWidth="sm">
                <Social />
                <Copyright />
            </Container>  
        </footer>
    );
};

export default Footer;