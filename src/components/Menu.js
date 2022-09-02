import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AssignmentIcon from '@mui/icons-material/Assignment';
import CampaignIcon from '@mui/icons-material/Campaign';
import TranslateIcon from '@mui/icons-material/Translate';
import LogoutIcon from '@mui/icons-material/Logout';

import { IoWalletOutline } from 'react-icons/io5';

import { useSetMenuDialog } from 'state/menu/hooks';
// import { useSetContractAddress } from 'state/wallet/hooks';
// import { useAuth } from 'hooks/useAuth';

export default function Menu() {
  const contractAddress = ''; //useSelector((state) => state.wallet.contractAddress);
  const isMenuDialog = useSelector((state) => state.menu.isMenuDialog);
  // const [setContractAddress] = useSetContractAddress();
  const setMenuDialog = useSetMenuDialog();
  //  const { checkLogin } = useAuth();

  const { t, i18n } = useTranslation();
  const icons = {
    news: <CampaignIcon />,
    about: <AssignmentIcon />,
    language: <TranslateIcon />,
  };
  const list = () => (
    <Box sx={{ width: 130 }} role="presentation">
      <ListItem button>
        <ListItemIcon
          sx={{
            minWidth: 130,
            color: 'background.paper',
            marginTop: 1,
            marginBottom: 1,
          }}
        >
          <IoWalletOutline />
        </ListItemIcon>
      </ListItem>
      <Divider />
      <List>
        {['news', 'about', 'language'].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              if (text === 'language') {
                const changeLang = i18n.language === 'en' ? 'tw' : 'en';
                i18n.changeLanguage(changeLang);
                window.localStorage.setItem('language', i18n.language);
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: 30, color: 'background.paper' }}>
              {icons[text]}
            </ListItemIcon>
            <ListItemText primary={t(text)} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {contractAddress === null ? (
        <List>
          <ListItem
            button
            key={'login'}
            onClick={() => {
              setMenuDialog(false);
              //checkLogin();
            }}
          >
            <ListItemIcon sx={{ minWidth: 30, color: 'background.paper' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={t('login')} />
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem
            button
            key={'logout'}
            onClick={() => {
              // setContractAddress(null);
              window.localStorage.removeItem('poaAddress');
              window.location.reload();
            }}
          >
            <ListItemIcon sx={{ minWidth: 30, color: 'background.paper' }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={t('logout')} />
          </ListItem>
        </List>
      )}
    </Box>
  );

  return (
    <>
      <Drawer
        anchor={'right'}
        open={isMenuDialog}
        PaperProps={{
          sx: {
            bgcolor: 'background.primary',
            color: 'background.paper',
          },
        }}
        onClose={() => {
          setMenuDialog(false);
        }}
      >
        {list()}
      </Drawer>
    </>
  );
}
