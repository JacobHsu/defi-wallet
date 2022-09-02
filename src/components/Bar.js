import * as React from 'react';
import { styled } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as LogoSvg } from 'logo.svg';
import { useSetMenuDialog } from 'state/menu/hooks';

const Navbar = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  // backgroundColor: theme.palette.background.primary,
}));

const Bar = () => {
  const setMenuDialog = useSetMenuDialog();
  const handleOpenMenu = (event) => {
    setMenuDialog(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar position="fixed">
        <Container maxWidth="xl">
          <Toolbar variant="dense" disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SvgIcon
                sx={{
                  display: { xs: 'flex', md: 'flex' },
                  width: '100%',
                  mr: 4,
                }}
              >
                <LogoSvg />
              </SvgIcon>
            </Box>

            <IconButton onClick={handleOpenMenu} sx={{ p: 0 }}>
              <MenuIcon style={{ color: '#ffffff' }} />
            </IconButton>
          </Toolbar>
        </Container>
      </Navbar>
    </Box>
  );
};
export default Bar;
