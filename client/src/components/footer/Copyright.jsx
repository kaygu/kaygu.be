import React from 'react';
import {Link, Typography} from '@material-ui/core'

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © '}
            <Link color="inherit" href=".">
                {window.location.hostname}
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

export default Copyright;