import React ,{useState} from 'react';

// import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
 

export default function NavBar(){

  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const list = (open) => (
    <Box
    sx={{ width: open === 'top' || open === 'bottom' ? 'auto' : 200 }}
    role="presentation"
    
    
  >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
             
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> 
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['HeadLines', 'Category', 'Location'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const setDateTime = new Date();
  const dateTime = setDateTime.getHours() + ":" + setDateTime.getMinutes() + " | " +
    setDateTime.getDate() + " / " + setDateTime.getMonth() + " / " + setDateTime.getFullYear();


  return (
    <Box sx={{ display: 'flex' }}>
     <CssBaseline /> 
      <AppBar position='fixed'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer()}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }} >
            <Typography variant="h6" noWrap component="div">
              News
            </Typography>
            <Box>
              <Typography variant='subtitle2'>
                {
                  dateTime
                }
              </Typography>
              <Typography variant="caption" noWrap component="div">
                <Button size='small' variant='contained' color='secondary'>Login</Button>
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
            anchor="left"
            open={open}
            onClick={handleClose}
      >
            {list()}
          </Drawer>
      </Box>
  );
}
