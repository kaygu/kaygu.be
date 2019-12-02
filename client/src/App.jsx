import React, {useState} from 'react';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

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
            <Header onToggleTheme={toggleTheme}/>
            <Home />
            <Footer />
        </ThemeProvider>
    );
}

export default App;