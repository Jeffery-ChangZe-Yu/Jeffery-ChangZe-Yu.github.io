import { Box, Container, Typography } from '@mui/material'
import React from 'react'

export default function AboutMe() {
  return (
      <Box sx={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <Container sx={{display: 'flex', justifyContent: 'center', marginTop: '40vh'}}>
            <Typography variant='h1'>Jeffery Yu</Typography>
        </Container>
        <Container sx={{display: 'flex', justifyContent: 'center', marginTop: '1vh', wordWrap: 'break-word'}}>
          <Typography variant='body1'>Welcome! I'm a developer building web tools for niche problems!</Typography>
        </Container>
      </Box>
    
  )
}
