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
              color: 'seagreen',
              mt: '20px',
              mb: '20px'
           }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
          {isMobile && (
          <SideNav open={openDrawer} onClose={handleDrawerClose}/>
          )}

            {!isMobile && (
            <>
              <Typography >
                KARTCHECK
              </Typography>

              <Tabs 
              sx={{marginLeft: '0%',}} 
              textColor='inherit' 
              value={value} 
              onChange={(e, value) => setValue(value)}>
                <Tab label ="Home"/>
                <Tab label ="Products"/>
                <Tab label ="Categories"/>
                <Tab label ="Account"/>
                <Tab label ="Cart"/>
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
                  borderColor: 'seagreen',
                },
                '&:hover fieldset': {
                  borderColor: 'seagreen',
                },
              },
            }}
            InputProps={{
              endAdornment: (
                <IconButton
                  aria-label="search"
                  sx={{ color: 'seagreen' }}
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
