import logo from '../logo.svg';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

const Btn = styled(Button)(({ theme }) => ({
  width: '20vw',
  marginTop: '10px',
}));

export default function Home() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img src={logo} className="App-logo" alt="logo" />
      <Btn
        variant="outlined"
        onClick={() => {
          navigate('login', { replace: true });
        }}
      >
        Login
      </Btn>
      <Btn
        variant="outlined"
        onClick={() => {
          navigate('register', { replace: true });
        }}
      >
        Register
      </Btn>
    </Box>
  );
}
