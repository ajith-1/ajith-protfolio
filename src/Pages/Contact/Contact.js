import React from 'react';
import { Container } from '@mui/material';
import {Typography} from '@mui/material';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

function Contact() {
  return (
    <>
      <Container id='contact' sx={{display:'flex',alignItems:'cener',justifyContent:'center',height:'100vh',flexDirection:'column'}}>
        <Typography variant='h2' textAlign={'center'} data-aos="fade-up" data-aos-duration='800'>Contact</Typography> 
       
      </Container>
    </>
  )
}

export default Contact;