import React from 'react';
import {Navbar, Button, Classes, Alignment} from '@blueprintjs/core'

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
            className={Classes.MINIMAL}
            icon={pages.icon}
        >
            {pages.name}
        </Button>
    );
    return (
        <Navbar>
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>
                    <Button
                        href="/"
                        key={0}
                        className={Classes.MINIMAL}
                    >
                        Kaygu
                        {/* Todo : replace website name by logo */}
                    </Button>
                </Navbar.Heading>
                <Navbar.Divider />
                {content}
            </Navbar.Group>
            <Navbar.Group align={Alignment.RIGHT}>
                <Button
                        href="/login"
                        key={4}
                        className={Classes.MINIMAL}
                        icon="user"
                >
                    Login
                </Button>
            </Navbar.Group>
        </Navbar>
            
    );
}

export default Menu;