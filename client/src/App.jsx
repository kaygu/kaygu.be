import React, {useState} from 'react';
import './App.css'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/pages/Home';

function App() {
    const [theme, setTheme] = useState({
        palette: {
            type: "dark"
        }
    });

    const toggleTheme = () => {
        let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
        setTheme({
            palette: {
                type: newPaletteType
            }
        });
    };
    const muiTheme = createMuiTheme(theme);

    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            <Header onToggleTheme={toggleTheme}/>
            <Home />
            <Footer />
        </ThemeProvider>
    );
}

export default App;