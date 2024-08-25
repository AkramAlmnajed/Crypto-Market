import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ setSearch, darkMode }) {
    return (
        <TextField
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        sx={{
            backgroundColor: darkMode ? 'background.paper' : '#e9ecef',
            borderRadius: '30px',
            boxShadow: darkMode ? '0px 4px 20px rgba(0, 0, 0, 0.5)' : '0px 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.3s ease',
            '&:hover': {
            boxShadow: darkMode ? '0px 6px 25px rgba(0, 0, 0, 0.7)' : '0px 6px 25px rgba(0, 0, 0, 0.2)',
            },
            '& fieldset': { border: 'none' }, 
            '& .MuiInputLabel-root': { display: 'none' }, 
        }}
        InputProps={{
            startAdornment: (
            <InputAdornment position="start">
                <SearchIcon />
            </InputAdornment>
            ),
        }}
        />
    );
    }

export default SearchBar;
