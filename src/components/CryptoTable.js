    import { Table, TableBody, TableCell, TableHead, TableRow, Paper, Box, TableSortLabel, Fade } from '@mui/material';
    import { useState } from 'react';

    function CryptoTable({ currency, search, darkMode }) {
    const [order, setOrder] = useState('asc'); 
    const [orderBy, setOrderBy] = useState('rank');

    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const stableSort = (array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    };

    const getComparator = (order, orderBy) => {
        return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    };

    const descendingComparator = (a, b, orderBy) => {
        if (b[orderBy] < a[orderBy]) {
        return -1;
        }
        if (b[orderBy] > a[orderBy]) {
        return 1;
        }
        return 0;
    };

    const filteredCurrency = stableSort(
        currency.filter((value) => value.name.toLowerCase().includes(search.toLowerCase())),
        getComparator(order, orderBy)
    );

    return (
        <Fade in={currency.length > 0} timeout={1000}>
        <Paper elevation={1} sx={{ padding: '20px', borderRadius: '10px', mt: 3 }}>
            <Table>
            <TableHead>
                <TableRow>
                <TableCell>
                    <TableSortLabel
                    active={orderBy === 'rank'}
                    direction={orderBy === 'rank' ? order : 'asc'}
                    onClick={() => handleRequestSort('rank')}
                    >
                    Rank
                    </TableSortLabel>
                </TableCell>
                <TableCell>
                    <TableSortLabel
                    active={orderBy === 'name'}
                    direction={orderBy === 'name' ? order : 'asc'}
                    onClick={() => handleRequestSort('name')}
                    >
                    Name
                    </TableSortLabel>
                </TableCell>
                <TableCell>
                    <TableSortLabel
                    active={orderBy === 'symbol'}
                    direction={orderBy === 'symbol' ? order : 'asc'}
                    onClick={() => handleRequestSort('symbol')}
                    >
                    Symbol
                    </TableSortLabel>
                </TableCell>
                <TableCell>
                    <TableSortLabel
                    active={orderBy === 'marketCap'}
                    direction={orderBy === 'marketCap' ? order : 'asc'}
                    onClick={() => handleRequestSort('marketCap')}
                    >
                    Market Cap
                    </TableSortLabel>
                </TableCell>
                <TableCell>
                    <TableSortLabel
                    active={orderBy === 'price'}
                    direction={orderBy === 'price' ? order : 'asc'}
                    onClick={() => handleRequestSort('price')}
                    >
                    Price
                    </TableSortLabel>
                </TableCell>
                <TableCell>
                    <TableSortLabel
                    active={orderBy === 'availableSupply'}
                    direction={orderBy === 'availableSupply' ? order : 'asc'}
                    onClick={() => handleRequestSort('availableSupply')}
                    >
                    Available Supply
                    </TableSortLabel>
                </TableCell>
                <TableCell>
                    <TableSortLabel
                    active={orderBy === 'volume'}
                    direction={orderBy === 'volume' ? order : 'asc'}
                    onClick={() => handleRequestSort('volume')}
                    >
                    Volume (24hr)
                    </TableSortLabel>
                </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {filteredCurrency.map((value) => (
                <TableRow
                    key={value.id}
                    hover
                    sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.02)',
                        backgroundColor: darkMode ? '#2c3e50' : '#f0f8ff',
                    },
                    }}
                >
                    <TableCell>{value.rank}</TableCell>
                    <TableCell>
                    <a href={value.WebsiteUrl} style={{ textDecoration: 'none', color: darkMode ? '#ffffff' : '#000000' }}>
                        <Box display="flex" alignItems="center">
                        <img src={value.icon} alt="" style={{ width: '20px', marginRight: '10px' }} />
                        {value.name}
                        </Box>
                    </a>
                    </TableCell>
                    <TableCell>{value.symbol}</TableCell>
                    <TableCell>${value.marketCap}</TableCell>
                    <TableCell>${value.price.toFixed(2)}</TableCell>
                    <TableCell>{value.availableSupply}</TableCell>
                    <TableCell>{value.volume.toFixed(0)}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </Paper>
        </Fade>
    );
    }

    export default CryptoTable;
