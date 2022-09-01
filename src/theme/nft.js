import styled from 'styled-components';
import { Button, Grid } from '@mui/material';

export const Btn = styled(Button)(({ theme }) => ({
  width: '20vw',
  marginTop: '10px',
}));

export const CardList = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '45px',
  marginRight: '45px',
  alignItems: 'center',
  justifyContent: 'center',
  width: ' 80vw',
  marginBottom: '100px',
}));
