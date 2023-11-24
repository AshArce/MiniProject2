import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton, Tab, Tabs, TextField, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link, useNavigate } from 'react-router-dom';
import SideNav from './SideNav';

const theme = createTheme();

const Header = () => {
  const [value, setValue] = useState(0);
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');
  const navigate = useNavigate();

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
    // Map the tab index to the corresponding route
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/products');
        break;
      case 2:
        navigate('/Cart');
        break;
      case 3:
        navigate('/login');
        break;
      default:
        break;
    }
  };

  return (
    <>

      <CssBaseline />
      <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent', color: '#24527a', mt: '20px', mb: '20px' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {isMobile && <SideNav open={openDrawer} onClose={handleDrawerClose} />}

          {!isMobile && (
            <>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {/* Shop icon */}
                <StorefrontIcon style={{ fontSize: '24px', marginRight: '10px', color: '#5dacbd' }} />
                {/* Logo name */}
                <Typography style={{ fontSize: '20px', fontWeight: 'bold' }}>kartcheck</Typography>
              </div>

              <Tabs
                sx={{ marginLeft: '0%' }}
                textColor="inherit"
                value={value}
                onChange={handleTabChange}
              >
                <Tab style={{ fontWeight: 'bold' }} label="Home" />
                <Tab style={{ fontWeight: 'bold' }} label="Products" />
                <Tab style={{ fontWeight: 'bold' }} label="Cart" />
                <Tab style={{ fontWeight: 'bold' }} label="Account" />
              </Tabs>
            </>
          )}

          <TextField
            id="search"
            label="Search"
            variant="outlined"
            size="small"
            sx={{
              marginLeft: '16px',
              width: '100%',
              minWidth: '150px',
              '@media (min-width: 900px)': {
                width: '150px',
              },
              '& .MuiOutlinedInput-root': {
                borderRadius: '20px',
                '& fieldset': {
                  borderColor: '#5dacbd',
                },
                '&:hover fieldset': {
                  borderColor: '#5dacbd',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <IconButton aria-label="search" sx={{ color: '#5dacbd' }}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Toolbar>
      </AppBar>

    </>
  );
};

export default Header;
