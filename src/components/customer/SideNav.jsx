import React, { useState } from 'react';
import { 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["Home", "Products", "Categories", "Account", "Cart"];

const SideNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
    <IconButton
       sx={{color:"seagreen",}}
       onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color = "black"/>
      </IconButton>

      <Drawer 
      anchor='left' 
      open={openDrawer} 
      onClose={()=>setOpenDrawer(false)}>
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>
                  {page}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      
    </>
  )
}

export default SideNav;