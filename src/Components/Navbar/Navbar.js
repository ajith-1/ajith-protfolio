import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link,animateScroll as scroll, scrollSpy  } from 'react-scroll';




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
    { text: 'Home', path: 'home' },
    { text: 'About', path: 'about' },
    { text: 'Skill', path: 'skill' },
    { text: 'Project', path: 'project' },
    { text: 'Contact', path: 'contact' },
  ];

  return (
    <>
      <AppBar position="fixed" width='100%' sx={{bgColor:'transparent'}}>
        <Toolbar sx={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
          <Typography fontSize={'18px'} fontWeight={600}>Ajith Kumar</Typography>
          <Box>
          {menuItems.map((item)=>{
   
   return(
    <Link
    to={item.path}
    duration={500}
    className='listName'
    activeClass="active"
    spy={true}
    smooth={true} 
    offset={50}
    >
{item.text}

    </Link>
   )
   })}
          </Box>
         
        </Toolbar>
      </AppBar>

    
    </>
  )
}

export default Navbar;