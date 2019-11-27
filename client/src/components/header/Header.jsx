import React from 'react';
import {} from '@material-ui/core'
import Menu from './Menu';

function Header({onToggleTheme}) {
    return (
        <header>
                <Menu toggleTheme={onToggleTheme}/>
        </header>
    );
}

export default Header;