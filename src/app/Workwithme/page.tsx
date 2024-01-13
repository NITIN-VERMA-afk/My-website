import React from 'react'
import { Typography,Container,Button } from '@mui/material'

const page = () => {
  return (
    <div className='flex flex-col items-center'>
      <Typography variant='h1'>want to work with me</Typography>
      <Typography>contact me on below details</Typography>
      <div>
      <Container maxWidth="md">
      <Typography variant="h4">
        Work With Me
      </Typography>
      <Typography variant="body1">
        Hello! Im a freelance MERN stack developer, and Id love to collaborate with you on your projects.
        Whether you need a new website, API development, or any other MERN stack-related work, Im here to help.
      </Typography>
      <Typography variant="body1">
        If you have a project in mind, feel free to get in touch with me. Lets discuss your requirements and how I can assist you.
      </Typography>
      <Button variant="contained" color="primary">
        Contact Me
      </Button>
    </Container>
      </div>



    </div>
  )
}

export default page
