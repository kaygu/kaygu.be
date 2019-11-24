import React, {useState, useEffect} from 'react';


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
        <p>Light / dark mode </p>
    );
}

export default Theming;