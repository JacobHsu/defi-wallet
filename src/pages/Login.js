import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

import {
  Box,
  Button,
  InputAdornment,
  Link,
  Grid,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import InputPhone from 'components/InputPhone';

const ToggleButtonS = styled(ToggleButton)(({ theme }) => ({
  width: '160px',
  marginTop: '10px',
}));

export default function Login() {
  const [alignment, setAlignment] = React.useState('phone');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [pwd, setPwd] = useState('');

  return (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        size="small"
      >
        <ToggleButtonS value="phone">Phone Number</ToggleButtonS>
        <ToggleButtonS value="email">Email</ToggleButtonS>
      </ToggleButtonGroup>

      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 3,
        }}
      >
        <InputPhone />
        <Paper
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '2px 4px',
            alignItems: 'center',
            height: 44,
            width: 395,
            mt: 1,
            border: '1px solid #cacaca',
            boxShadow: 'none',
            '&:hover': {
              borderColor: '#000',
            },
          }}
        >
          <TextField
            margin="dense"
            variant="standard"
            value={pwd}
            style={{
              marginLeft: 8,
            }}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenIcon />
                </InputAdornment>
              ),
            }}
            placeholder="password"
            onChange={(e) => setPwd(e.target.value)}
          />
        </Paper>
        <Grid container>
          <Grid item xs></Grid>
          <Grid item>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={(e) => {
            // verifyOtp(e);
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
