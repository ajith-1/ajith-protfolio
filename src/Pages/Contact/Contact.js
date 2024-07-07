import React from 'react';
import { Container } from '@mui/material';
import {Typography} from '@mui/material';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

function Contact() {
  return (
    <>
     <Container id='contact' sx={{display:'flex',alignItems:'cener',justifyContent:'center',height:'100vh',flexDirection:'row'}}>
        <Box>

        </Box>
        <Box component="form"
      sx={{'& > :not(style)': { m: 1, width: '35ch' },display:'flex',flexDirection:'colomn'}}
      noValidate
      autoComplete="off">
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" /> 
        <TextField id="outlined-basic" label="Message" variant="outlined" multiline rows={6}/>
        </Box>
      </Container>
    </>
  )
}

export default Contact