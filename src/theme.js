    import { createTheme } from '@mui/material/styles';

    const createCustomTheme = (darkMode) => createTheme({
    palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: {
        main: darkMode ? '#415a77' : '#5fa8d3', 
        },
        background: {
        default: darkMode ? '#023047' : '#6c757d',  
        paper: darkMode ? '#415a77' : '#e9ecef',
        },
        text: {
        primary: darkMode ? '#ffffff' : 'black',
        secondary: darkMode ? '#bbbbbb' : 'black',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h4: {
        fontWeight: 600,
        color: darkMode ? '#ffffff' : '#f8f9fa',
        },
        body1: {
        fontSize: '1rem',
        color: darkMode ? '#ffffff' : '#333333',
        },
    },
    shadows: ['none', darkMode ? '0px 4px 20px rgba(0, 0, 0, 0.5)' : '0px 4px 20px rgba(0, 0, 0, 0.1)'],
    });

    export default createCustomTheme;
