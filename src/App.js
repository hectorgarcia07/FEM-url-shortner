import './App.css'
import Container from './component/Container'
import Navbar from './component/Navbar/Navbar'
import { ThemeProvider } from '@mui/material/styles';
import { custom_theme } from './theme/custom_theme';

function App() {
  return (
    <ThemeProvider theme={custom_theme}>
      <Container>
        <Navbar />
      </Container>
    </ThemeProvider>
  )
}

export default App