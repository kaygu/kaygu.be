import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {AppBar, Button, IconButton, Link, Menu, MenuItem, Switch, Toolbar} from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 0,
    },
    user: {
        marginLeft: 'auto',
    }
}));

const menu = [
    {id: 1, name: "Blog", link: "/blog", icon: "edit"},
    {id: 2, name: "CV", link: "/resume", icon: "briefcase"},
    {id: 3, name: "Projects", link: "/projects", icon: "projects"}
];

function ResponsiveMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = event => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const content = menu.map((pages) => 
        <MenuItem
            onClick={handleClose}
            primaryText={pages.name}
            key={pages.id}
            icon={pages.icon}
        >
            <Link href={pages.link} color="inherit" underline="none">{pages.name}</Link>
        </MenuItem>
);

    return (
        <div>
            <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                {content}
            </Menu> 
        </div>
    );
}

function NavBar({toggleTheme}) {
    const classes= useStyles()
    const matches = useMediaQuery(theme => theme.breakpoints.up('sm'));
    
    const content = menu.map((pages) => 
        <Button
            color="secondary"
            href={pages.link}
            key={pages.id}
            icon={pages.icon}
            className={classes.title}
        >
            {pages.name}
        </Button>
    );
    
    return (
        <nav className={classes.root}>
            <AppBar position="fixed" color="default">
                <Toolbar >
                    {matches ? (
                        <div>
                            <Button edge="start" color="primary" className={classes.title} href=".">
                                Kaygu.be
                            </Button>
                            {content}
                        </div>
                    ) : (
                    <ResponsiveMenu />
                    )}
                    <div className={classes.user}>
                        <Switch onChange={toggleTheme} />
                        <Button edge="end">Login</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </nav>
        );
    }
    
    export default NavBar;