import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Bar from 'components/Bar';
import { useLocation } from 'react-router-dom'

export default function LogoOnlyLayout() {

  const location = useLocation();

  return (
    <Box>
      {location.pathname !=='/' && <Bar />} 
      <Box
        sx={{
          flexDirection: 'column',
          display: 'flex',
          overflow: 'auto',
          height: document.documentElement.clientHeight - 48,
          mt: 7,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
