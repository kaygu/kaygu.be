import React, {useState, useEffect} from 'react';
import {Classes, Switch} from '@blueprintjs/core';


function Theming() {
    const [darkTheme, setDarkTheme] = useState(false) //true = dark theme / false = light theme

    //On mount, check local storage
    useEffect(() => {
        if (localStorage.getItem('dark-theme') === 'true') {
            setDarkTheme(true)
        }
    }, [darkTheme]);

    function toggle() {
        setDarkTheme(!darkTheme)
        localStorage.setItem('dark-theme', JSON.stringify(!darkTheme))
        console.log(darkTheme)
    };

    return (
        <Switch
            onChange={toggle}
            className={Classes.LARGE + ' theme-switch'}
        />
    );
}

export default Theming;