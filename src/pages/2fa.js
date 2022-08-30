import React, { useState } from 'react';

import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';

import { useUserAuth } from '../context/UserAuthContext';
import CountDownButton from 'components/button/CountDownButton';

import { PaperField } from 'theme/mui';

import { mask } from 'Utils';
import { useSelector } from 'react-redux';

export default function Twofa() {
  const [error, setError] = useState('');
  const [flag, setFlag] = useState(false);
  const [result, setResult] = useState('');

  const [otp, setOtp] = useState('');
  const phone = useSelector((state) => state.app.currentPhone);

  const { setUpRecaptha } = useUserAuth();
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    setError('');
    if (phone === '' || phone === undefined)
      return setError('Please enter a valid phone number!');
    try {
      const response = await setUpRecaptha(`+${phone}`);
      setResult(response);
      setFlag(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setError('');
    if (otp === '' || otp === null) return;
    try {
      await result.confirm(otp);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 3,
        }}
      >
        <PaperField>
          <TextField
            margin="dense"
            variant="standard"
            value={otp}
            style={{
              width: '75%',
              marginLeft: 4,
            }}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <LockOpenIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Enter the 6-digit CAPTCHA"
            onChange={(e) => setOtp(e.target.value)}
          />
          <CountDownButton getOtp={getOtp} title="Get OTP" />
        </PaperField>

        {error && <Typography color="error">{error}</Typography>}
        {flag && (
          <Typography color="info">
            Enter the 6-digit code sent to {mask(phone, 3, 3)}
          </Typography>
        )}
        {!flag && <div id="recaptcha-container"></div>}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={(e) => {
            verifyOtp(e);
          }}
        >
          Publish
        </Button>
      </Box>
    </Box>
  );
}
