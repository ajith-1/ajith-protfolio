import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './Home.css';


function Home() {

  return (
    <>
     <Container id='home' sx={{display:'flex',alignItems:'cener',justifyContent:'center',height:'100vh'}}>

        {/*--------------------hero section------------------ */}

        <Grid container >
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box maxWidth={'550px'} width={'100%'} height={'auto'}>
              <Typography variant='h5' data-aos="fade-up" data-aos-duration='700' data-aos-anchor-placement="center-bottom">Hello I'm</Typography>
              <Typography variant='h2' my={2} data-aos="fade-up" data-aos-duration='1000' data-aos-anchor-placement="center-bottom">AJITH KUMAR</Typography>
              <Typography variant='h4' my={2} data-aos="fade-up" data-aos-duration='1300' data-aos-anchor-placement="center-bottom">Front End Developer</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box data-aos="fade-left" data-aos-duration='1000'>
              <img src='/images/pic.png' className='heroimg' width='250px' height='250px'/>
            </Box>
          </Grid>
        </Grid>
        </Container>
    </>
  )
}

export default Home