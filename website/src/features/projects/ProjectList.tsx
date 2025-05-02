import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'
import ProjectItem from './ProjectItem'

export default function ProjectList() {

  const projects = [
    // { title: 'example project', 
    //   links: ['https://example.com/', 'https://github.com/Jeffery-ChangZe-Yu/Jeffery-ChangZe-Yu.github.io'], //github link or website link here
    //   picUrl: 'assets/exampleProject.png', //store pics in public??? For now not working, not importing with build
    //   description: 'example project to feature heress, lorems ipsum blah blee'
    // },
    { title: 'Spotify Shuffler', 
      links: ['https://github.com/Jeffery-ChangZe-Yu/spotify_shuffle', '',], //github link or website link here
      picUrl: 'assets/exampleProject.png', //store pics in public??? For now not working, not importing with build
      description: 'A command line and local website that randomizes yout Spotify music!'
    },
  ]

  return (
    <Box id='projects' sx={{ minHeight: '100vh', paddingTop: '10vh'}}>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Typography variant='h3'>
            Projects
        </Typography>
      </Box>
      <Grid 
        container 
        spacing={3} 
        justifyContent='space-evenly'
        sx={{margin: '10vh'}}
      >
        {projects.map(({title, links, picUrl, description}) => (
          <Grid key={title} size={6}>
            <ProjectItem title={title} links={links} pictureUrl={picUrl} description={description} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
