import React from 'react';
import Menu from './Menu';

function Header({onToggleTheme}) {
    return (
        <header>
            <Menu toggleTheme={onToggleTheme}/>
        </header>
    );
}

export default Header;