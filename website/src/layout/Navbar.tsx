import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, List, ListItem } from '@mui/material';

const rightLinks = [
    {title: 'projects', link: '#projects'},
    {title: 'contact', link: '#contact'}
]

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', width: '100%', background: 'rgba(217, 214, 214, 0.9)'}}>
      <AppBar position='static' style={{backgroundColor: 'transparent'}}>
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box display='flex' alignContent='center'>
                <Typography 
                    variant="h6" 
                    sx={{ flexGrow: 1 }}
                    component={Link}
                    underline='none'
                    href='#'
                >
                    Jeffery Yu
                </Typography>
            </Box>
            <List sx={{display: 'flex'}}>
                {rightLinks.map(({title, link}) => (
                    <ListItem
                        component={Link}
                        underline='none'
                        href={link}
                        key={title}
                    >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
            </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
}