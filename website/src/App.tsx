import './App.css';
import { Box, createTheme, CssBaseline, responsiveFontSizes, ThemeProvider, } from '@mui/material';
import Navbar from './layout/Navbar';
import ProjectList from './features/projects/ProjectList';
import AboutMe from './features/AboutMe';
import Contact from './features/Contact';


let theme = createTheme({
  //To-Do, Theme this up!!
  typography: {
    fontFamily: 'Montserrat Variable',
    body1: {
      fontSize: 20
    }
  },
  palette: {
    primary: {
      main: '#2937d6'
    },
    secondary: {
      main: '#d32f2f'
    },
    text: {
      primary: '#2937d6'
    }
  }
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        background: 'linear-gradient(60deg, purple, yellow)',
        minHeight: '100vh'
      }}>
        <Navbar />
        <AboutMe />
        <ProjectList />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
