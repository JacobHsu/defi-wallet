import logo from '../logo.svg';
import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

const Btn = styled(Button)(({ theme }) => ({
  width: '20vw',
  marginTop: '10px'
}));

export default function Home() {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <Btn variant="outlined">Login</Btn>
      <Btn variant="outlined">Register</Btn>
    </Box>
  );
}
