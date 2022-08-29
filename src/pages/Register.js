import logo from '../logo.svg';

import { Box } from '@mui/material';

export default function Register() {
  return (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img src={logo} className="App-logo" alt="logo" />
      Register
    </Box>
  );
}
