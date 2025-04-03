import './App.css';
import { Box, Container, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import Navbar from './layout/Navbar';


const theme = createTheme({
  //To-Do, Theme this up!!
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        background: 'linear-gradient(60deg, purple, yellow)',
        minHeight: '100vh'
      }}>
        <Navbar />
        <Container maxWidth='xl'>
          <Typography variant='h1'>Jeffery Yu</Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
