import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import { AppBar, Avatar, ListItemIcon, Typography, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system'; 
import StorefrontIcon from '@mui/icons-material/Storefront';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



const drawerWidth = 200;
const StyledAppBar = styled('div')`
  display: block;
`;

function Sidebar(props) {
  const { window } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [mobileOpen, setMobileOpen] = React.useState(isMobile)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ backgroundColor: '#24527a', fontSize:'16px' }}>
      <StorefrontIcon sx={{ fontSize: 32, mr: 2, color: 'white' }} />
    </Toolbar>
      <Divider />
      <List sx={{fontFamily:'poppins', color:'white', fontSize:'16px'}}>

        <ListItem disablePadding>
          <ListItemButton component={Link} to={'/adminpage/dashboard'}>
            <ListItemIcon>
              <DashboardIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to={'/adminpage/productlist'}>
          <ListItemIcon>
            <StoreIcon sx={{ color: 'white' }} />
          </ListItemIcon>
            <ListItemText primary={"Products"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to={'/adminpage/categories'}>
          <ListItemIcon>
            <CategoryIcon sx={{ color: 'white' }} />
          </ListItemIcon>
            <ListItemText primary={"Categories"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to={'/adminpage/categories'}>
          <ListItemIcon>
            <AccountCircleIcon sx={{ color: 'white' }} />
          </ListItemIcon>
            <ListItemText primary={"Account"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      

    <List sx={{ fontFamily: 'poppins', color: 'white', marginTop: '340px' }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to={'/'}>
          <ListItemIcon>
            <ExitToAppIcon sx={{ color: 'white' }} />
          </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>

      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{
      display: 'flex',
      margin: 0,
    }}>
      <StyledAppBar
        position="fixed"
        sx={{
          backgroundColor: 'transparent',
          color: 'black',
          width: mobileOpen ? `calc(100% - ${drawerWidth}px)` : '100%', // Adjust width
          ml: mobileOpen ? `${drawerWidth}px` : 0, // Adjust margin-left
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </StyledAppBar>

      <Box
        component="nav"
        sx={{
          width: { xs: '100%', sm: drawerWidth - 60 },
          flexShrink: { sm: 0 }
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#24527a',
              // Add the following styles to ensure the color remains the same
              color: 'white',
              '& .MuiListItemIcon-root': {
                color: 'white', // Adjust icon color if needed
              },
              '& .MuiTypography-root': {
                color: 'white', // Adjust text color if needed
              },
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#24527a'
            },

          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: isMobile && !mobileOpen ? 1 : 3, // Adjust padding
          width: mobileOpen ? `calc(100% - ${drawerWidth}px)` : '100%', // Adjust width
          transition: 'padding 0.2s',
        }}
      >
        {/* Your main content */}
      </Box>
    </Box>
  );
}

export default Sidebar;
