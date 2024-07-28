import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, animateScroll as scroll, spy } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

function Navbar() {

  const isMobile = useMediaQuery('(max-width:1155px)');
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };


  const menuItems = [
    { text: 'Home', path: 'home' },
    { text: 'About', path: 'about' },
    { text: 'Skill', path: 'skill' },
    { text: 'Project', path: 'project' },
    { text: 'Contact', path: 'contact' },
  ];

  return (
    <>
      <AppBar position="fixed" width='100%' sx={{ bgColor: 'transparent' }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Typography fontSize={'18px'} fontWeight={600}>Ajith Kumar</Typography>
          <Box>

            {isMobile ? (
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{ mr: 2 }}
                className='menuIcon'
              >
                <MenuIcon sx={{ fontSize: '30px', color: 'inherit' }} />
              </IconButton>
            ) : (<>
              {menuItems.map((item) => {

                return (
                  <Link
                    to={item.path}
                    duration={1300}
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
            </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose} >
        <Box sx={{width:'100%'}}>
        <DrawerHeader>
          <IconButton color="inherit"
            aria-label="close drawer"
            onClick={handleDrawerClose}>
            <CloseIcon sx={{ fontSize: '30px',}} />
          </IconButton>
        </DrawerHeader>
        {menuItems.map((item) => {

          return (
            <Link
              to={item.path}
              duration={1500}
              className='drawerList'
              activeClass="activeList"
              spy={true}
              smooth={true}
              offset={50}
              onClick={() => { setOpenDrawer(false); }}
            >
              {item.text}

            </Link>
          )
        })}
        </Box>
      </Drawer>

    </>
  )
}

export default Navbar;