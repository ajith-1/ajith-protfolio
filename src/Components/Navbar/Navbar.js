import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {NavLink} from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { GitHub } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled} from '@mui/material/styles';



// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-start',
// }));

function Navbar() {

  const isMobile = useMediaQuery('(max-width:1155px)');
//  const [openDrawer, setOpenDrawer] = React.useState(false);


  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Skill', path: '/skill' },
    { text: 'Project', path: '/project' },
    { text: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <AppBar position="fixed" width='100%' sx={{bgColor:'transparent'}}>
        <Toolbar sx={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
          <Box>
          {menuItems.map((item)=>{
   
   return(
    <NavLink
    to={item.path}
    className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
    >
{item.text}

    </NavLink>
   )
   })}
          </Box>
         
        </Toolbar>
      </AppBar>

    
    </>
  )
}

export default Navbar;