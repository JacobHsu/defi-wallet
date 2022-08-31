import React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import SettingsIcon from '@mui/icons-material/Settings';
import CollectionsIcon from '@mui/icons-material/Collections';

import { ReactComponent as WalletSvg } from 'images/tabs/wallet_icon.svg';
import { ReactComponent as WalletSvgLight } from 'images/tabs/wallet_light.svg';

export function WalletIcon(props) {
  return (
    <SvgIcon {...props}>
      {props.active === 0 ? <WalletSvgLight /> : <WalletSvg />}
    </SvgIcon>
  );
}

export function NftIcon(props) {
  return (
    <SvgIcon {...props}>
      <CollectionsIcon />
    </SvgIcon>
  );
}

export function SettingIcon(props) {
  return (
    <SvgIcon {...props} htmlColor={props.htmlColor}>
      <SettingsIcon />
    </SvgIcon>
  );
}
