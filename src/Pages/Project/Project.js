import React from 'react';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Project() {
  return (
    <>
      <Container id='project' sx={{ display: 'flex', alignItems: 'cener', justifyContent: 'center', height: '100vh', flexDirection: 'column' }}>
        <Typography variant='h2' textAlign={'center'} data-aos="fade-up" data-aos-duration='800'>Project</Typography>
        <Box>

          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={12} sm={12} md={6} data-aos="fade-up" data-aos-duration='800' data-aos-anchor-placement="center-bottom"> 
              <Item>1</Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6} data-aos="fade-up" data-aos-duration='800' data-aos-anchor-placement="center-bottom"> 
              <Item>2</Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6} data-aos="fade-up" data-aos-duration='800' data-aos-anchor-placement="center-bottom"> 
              <Item>3</Item>
            </Grid>
            <Grid item xs={12} sm={12} md={6} data-aos="fade-up" data-aos-duration='800' data-aos-anchor-placement="center-bottom"> 
              <Item>4</Item>
            </Grid>
          </Grid>

        </Box>
      </Container>
    </>
  )
}

export default Project