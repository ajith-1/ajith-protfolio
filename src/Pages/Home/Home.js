import React,{useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import lottie from "lottie-web";
import profile from "../profile-logo.json";

function Home() {

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#profile-logo"),
    });
  }, []);

  return (
    <>
     <Container sx={{display:'flex',alignItems:'cener',justifyContent:'center',height:'100vh'}}>

        {/*--------------------hero section------------------ */}

        <Grid container >
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box maxWidth={'550px'} width={'100%'} height={'auto'}>
              <Typography variant='h5' data-aos="fade-up" data-aos-duration='700'>Hello I'm</Typography>
              <Typography variant='h2' my={2} data-aos="fade-up" data-aos-duration='1000'>AJITH KUMAR</Typography>
              <Typography variant='h4' my={2} data-aos="fade-up" data-aos-duration='1300'>Front End Developer</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box data-aos="fade-left" data-aos-duration='1000'>
              <Box id='profile-logo'/>
            </Box>
          </Grid>
        </Grid>
        </Container>
    </>
  )
}

export default Home