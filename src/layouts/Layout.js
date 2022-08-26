import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Bar from 'components/Bar';

export default function LogoOnlyLayout() {
  return (
    <Box>
      <Bar />
      <Box
        sx={{
          flexDirection: 'column',
          display: 'flex',
          overflow: 'auto',
          height: document.documentElement.clientHeight - 48,
          mt: 5,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
