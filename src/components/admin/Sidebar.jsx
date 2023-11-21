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
import { AppBar, Typography, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import Dashboard from '../../features/adminpage/Dashboard';
import ProductList from '../../features/adminpage/ProductsList';


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
      <Toolbar />
      <Divider />
      <List>

        <ListItem disablePadding>
          <ListItemButton component={Link} to={'/admin/dashboard'}>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to={'/admin/products'}>
            <ListItemText primary={"Products"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to={'/admin/categories'}>
            <ListItemText primary={"Categories"} />
          </ListItemButton>
        </ListItem>

      </List>

      <Divider />
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
          width: { xs: '100%', sm: drawerWidth - 80 },
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
              width: drawerWidth
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
              backgroundColor: '#44C9F2'
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
