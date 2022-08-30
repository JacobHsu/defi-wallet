import styled from 'styled-components';
import { Paper } from '@mui/material';

export const PaperField = styled(Paper)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2px 4px',
    alignItems: 'center',
    height: 44,
    width: 395,
    marginTop: '10px',
    border: '1px solid #cacaca',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#000',
    },
  }));