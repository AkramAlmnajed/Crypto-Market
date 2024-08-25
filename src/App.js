import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import DarkModeToggle from './components/DarkModeToggle';
import SearchBar from './components/SearchBar';
import CryptoTable from './components/CryptoTable';
import createCustomTheme from './theme';

function App() {
  const [search, setSearch] = useState("");
  const [currency, setCurrency] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios.get('https://openapiv1.coinstats.app/coins?', {
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'Cpxfw3V3m5AArGR+onnMw4gdkDA/lhWTkmAqwK3xgIA=',
      },
    })
    .then(response => setCurrency(response.data.result))
    .catch(error => console.log(error));
  }, []);

  const theme = createCustomTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', padding: '20px 0', transition: 'background-color 0.5s ease' }}>
        <Container maxWidth="lg">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4" gutterBottom>
              Cryptocurrency Market
            </Typography>
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
          </Box>
          <SearchBar setSearch={setSearch} darkMode={darkMode} />
          <CryptoTable currency={currency} search={search} darkMode={darkMode} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
