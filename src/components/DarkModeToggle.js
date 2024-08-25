import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

    function DarkModeToggle({ darkMode, toggleDarkMode }) {
    return (
        <IconButton
        onClick={toggleDarkMode}
        sx={{
            color: darkMode ? '#ffffff' : '#000000',
            backgroundColor: darkMode ? '#333333' : '#e0e0e0',
            borderRadius: '50%',
            transition: 'all 0.3s ease',
            transform: darkMode ? 'rotate(360deg)' : 'rotate(0deg)',
            '&:hover': {
            backgroundColor: darkMode ? '#555555' : '#cccccc',
            },
        }}
        >
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
    }

    export default DarkModeToggle;
