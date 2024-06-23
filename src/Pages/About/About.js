import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


function About() {
  return (
    <>
      <Container sx={{display:'flex',alignItems:'cener',justifyContent:'center',height:'100vh',flexDirection:'column'}}>
        <Typography variant='h2' textAlign={'center'} data-aos="fade-up" data-aos-duration='800'>About Me</Typography> 
        <Typography variant='h5' textAlign={'center'} mt={6} data-aos="fade-up" data-aos-duration='1000'>Hi, I'm Ajith Kumar, a passionate front-end developer based in Bangalore.
          I enjoy creating responsive and user-friendly web applications.
          I have developed a strong proficiency in various front-end technologies such as HTML, CSS, JavaScript, and React.js.
          My goal is to leverage my skills and creativity to deliver innovative solutions that meet the needs of clients and users. I am enthusiastic about learning new technologies and staying updated with the latest trends in web development.
        </Typography>

      </Container>
    </>
  )
}

export default About