import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme({
  palette: {
    primary: {
      main: '#008080', // Sea green color for the app bar
    },
    text: {
      primary: '#008080', // Sea green color for text
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" 
      sx={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.2)', 
        mt: '15px',
        margin: '30px', 
        height: '70px',
        width: 'auto' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#008080' }}> {/* Set text color to sea green */}
            Your Logo Name
          </Typography>
          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, color: '#008080' }}> {/* Set text color to sea green */}
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, color: '#008080' }}> {/* Set text color to sea green */}
            About
          </Typography>
          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, color: '#008080' }}> {/* Set text color to sea green */}
            Services
          </Typography>
          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'block' }, color: '#008080' }}> {/* Set text color to sea green */}
            Contact
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
