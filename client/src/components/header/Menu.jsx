import React from 'react';
import {AppBar, Button, Switch, Toolbar, Typography} from '@material-ui/core'

import Theming from './Theme'

function Menu() {
    const menu = [
        {id: 1, name: "Blog", link: "/blog", icon: "edit"},
        {id: 2, name: "CV", link: "/resume", icon: "briefcase"},
        {id: 3, name: "Projects", link: "/projects", icon: "projects"}
    ];
    const content = menu.map((pages) => 
        <Button
            href={pages.link}
            key={pages.id}
            icon={pages.icon}
        >
            {pages.name}
        </Button>
    );
    return (
        <AppBar position="static" color="default">
            <Toolbar >
                <Typography variant="h5" color="inherit">
                    Kaygu.be
                </Typography>
                {content}
                <Button>Login</Button>
            </Toolbar>
        </AppBar>
            
    );
}

export default Menu;