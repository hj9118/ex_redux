import { Routes, Route } from 'react-router-dom';
import FinalScreen from './pages/FinalScreen';
import Questions from './pages/Questions';
import Settings from './pages/Settings';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
    <Container maxWidth='sm'>
      <Box textAlign='center' mt={5}>
        <Typography variant='h2' fontWeight='bold'>
          Quiz App
        </Typography>
        <Routes>
          <Route path='/' element={<Settings />}></Route>
          <Route path='/questions' element={<Questions />} />
          <Route path='/score' element={<FinalScreen />} />
        </Routes>
      </Box>
    </Container>
  );
}

export default App;
