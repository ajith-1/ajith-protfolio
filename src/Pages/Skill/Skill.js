import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Skill() {
  return (
    <>
     <Container sx={{display:'flex',alignItems:'cener',justifyContent:'center',height:'100vh',flexDirection:'column'}}>
        <Typography variant='h2' textAlign={'center'} data-aos="fade-up" data-aos-duration='800'>Skill</Typography> 
        <Typography variant='h5' textAlign={'center'} mt={6} data-aos="fade-up" data-aos-duration='1000'>An individual eager to learn and explore new fields of life and technology, with good listening skills and fast learning abilities.
        </Typography>
      </Container>
    </>
   
  )
}

export default Skill;