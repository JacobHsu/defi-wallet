import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

import {
  Box,
  Button,
  InputAdornment,
  Link,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

import LockOpenIcon from '@mui/icons-material/LockOpen';
import InputPhone from 'components/InputPhone';
import { useNavigate } from 'react-router-dom';

import { PaperField } from 'theme/mui'



const ToggleButtonS = styled(ToggleButton)(({ theme }) => ({
  width: '160px',
  marginTop: '10px',
}));

export default function Login() {

  const [alignment, setAlignment] = React.useState('phone');
  const navigate = useNavigate();
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [pwd, setPwd] = useState('');
  const [number, setNumber] = useState('');

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
        <InputPhone { ...{number, setNumber}  } />

        <PaperField>
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
        </PaperField>
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
          onClick={() => {
            navigate('/2fa');
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
}
