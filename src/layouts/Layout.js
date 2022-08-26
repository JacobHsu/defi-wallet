import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Bar from 'components/Bar';

export default function LogoOnlyLayout() {
  return (
    <Box>
      <Bar />
      <Outlet />
    </Box>
  );
}
