import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export const SearchSider = () => {
  return (
    <div id="sider">
      <Paper
        component="form"
        sx={{
          mt: 2,
          p: '2px 8px',
          display: 'flex',
          alignItems: 'center',
          width: 250,
          borderRadius: '10px',
          backgroundColor: '#FFFFFF1F'
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Address.."
          inputProps={{ 'aria-label': 'Search Address' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};
