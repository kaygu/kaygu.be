import React, {useState, useEffect} from 'react';
import {Classes, Button, Switch} from '@blueprintjs/core';

document.body.classList.add('bp3-dark')

function Theming() {
    const [theme, Settheme] = useState('dark')
    return (
        <Switch
            onChange={Settheme}
            className={Classes.LARGE + ' theme-switch'}
        />
    );
}

export default Theming;