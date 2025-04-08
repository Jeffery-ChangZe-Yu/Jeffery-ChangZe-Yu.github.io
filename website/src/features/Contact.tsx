import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Container, Icon, Link, responsiveFontSizes, Typography } from '@mui/material';

const links = [
    "https://github.com/Jeffery-ChangZe-Yu", //github
    "", //email
    "https://www.linkedin.com/in/jeffery-cz-yu/"  //linkedin
]

const linkIconSize = 40;

const linkToIcon = (link: string) => {
    switch (link) {
        case links[0]:
            return(<GitHubIcon sx={{fontSize: linkIconSize}} />);
        case links[1]:
            return(<EmailIcon sx={{fontSize: linkIconSize}} />);
        case links[2]:
            return(<LinkedInIcon sx={{fontSize: linkIconSize}} />);
        default:
            break;
    }
}


export default function Contact() {
  return (
    <Box id='contact' sx={{display: 'flex', flexDirection: 'column',justifyContent: 'center', minHeight: '50vh'}}>
        <Typography variant='body1' sx={{display: 'flex', justifyContent: 'center', margin: '2vh'}}>
            I'm always open to new opportunities!
        </Typography>
        <Container sx={{display: 'flex', justifyContent: 'center', columnGap: '40px'}}>
            {links.map((link) => (
                <Icon component={Link} href={link} sx={{fontSize: linkIconSize}}>
                    {linkToIcon(link)}
                </Icon>
            ))}
        </Container>
    </Box>

  )
}
