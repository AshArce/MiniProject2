import React, {useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton, Tab, Tabs, TextField, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SideNav from './SideNav';

const theme = createTheme();

const Header = () => {
  const [value, setValue] = useState();
  const [openDrawer, setOpenDrawer] = useState(false);
  const isMobile = useMediaQuery('(max-width:900px)');

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" elevation={0}
        sx={{ backgroundColor: 'transparent', 
              color: '#24527a',
              mt: '20px',
              mb: '20px'
           }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {isMobile && (
          <SideNav open={openDrawer} onClose={handleDrawerClose}/>
          )}

            {!isMobile && (
            <>
              <Typography style={{fontSize: '20px', fontWeight:'bold'}}>
                kartcheck
              </Typography>

              <Tabs 
              sx={{marginLeft: '0%',}} 
              textColor='inherit' 
              value={value} 
              onChange={(e, value) => setValue(value)}>
                <Tab style={{fontWeight:'bold'}} label ="Home"/>
                <Tab style={{fontWeight:'bold'}} label ="Products"/>
                <Tab style={{fontWeight:'bold'}} label ="Account"/>
                <Tab style={{fontWeight:'bold'}} label ="Cart"/>
              </Tabs>
            </>
            )}

            <TextField
              id="search"
              label="Search"
              variant="outlined"
              size="small"
              sx={{ marginLeft: '16px' ,
              width: '100%', // Set width to 100% when the screen is less than 1000px
              minWidth: '150px', // Set a maximum width for the search bar
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
                <IconButton
                  aria-label="search"
                  sx={{ color: '#5dacbd' }}
                >
                  <SearchIcon />
                </IconButton>
              ),
             }} // Adjust the margin as needed
            />
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;
