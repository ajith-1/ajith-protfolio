import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

function Project() {
  return (
    <>
     <Container id='project' sx={{display:'flex',alignItems:'cener',justifyContent:'center',height:'100vh',flexDirection:'column'}}>
        <Typography variant='h2' textAlign={'center'} data-aos="fade-up" data-aos-duration='800'>Project</Typography> 
        <Typography variant='h5' textAlign={'center'} mt={6} data-aos="fade-up" data-aos-duration='1000'>Hi, I'm Ajith Kumar, a passionate front-end developer based in Bangalore.
        Here is a showcase of some of my best projects that I made. They can be found on my GitHub !
        </Typography>
      </Container>
    </>
  )
}

export default Project