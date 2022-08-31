import * as React from 'react';
import * as css from './Style';
import { useNavigate } from 'react-router-dom';
import { useUpdatePage } from 'state/page/hooks'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { WalletIcon, NftIcon } from './TabButton';

import CreditCardIcon from '@mui/icons-material/CreditCard';

const Tabs = () => {

  const navigate = useNavigate();
  const updatePage = useUpdatePage()
  const [page, setPage] = React.useState(0);
  return (
    <Box sx={css.boxStyle}>
      <BottomNavigation
        showLabels
        value={page}
        onChange={(event, newValue) => {
          setPage(newValue);

          updatePage(newValue)
          const pages = {  0: 'wallet', 1: 'nft', 2: 'buy'}
          navigate(pages[newValue], { replace: true });
        }}
        sx={css.tabsStyle}
      >
        <BottomNavigationAction label="Wallet" icon={<WalletIcon {...{ active: page }} />} />
        <BottomNavigationAction label="NFT" icon={<NftIcon {...{ active: page }} />} />
        <BottomNavigationAction label="Buy" icon={<CreditCardIcon {...{ active: page }} />} />
      </BottomNavigation>
    </Box>
  );
};

export default Tabs;