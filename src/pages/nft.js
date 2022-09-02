import { useState } from 'react';
import { Box } from '@mui/material';

import { NFTCard } from 'components/NFTCard';
import { SearchSider } from 'components/nft/SearchSider';

import { goods } from '../data/goods';
import { CardList } from 'theme/nft';
import 'style/SearchSider.css'

export default function Home() {
  const [products, setProducts] = useState(goods);
  return (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <SearchSider/>
      <CardList container spacing={0}>
        {products
          ? products.map((item, index) => <NFTCard {...{ item }} key={index} />)
          : '-'}
      </CardList>
    </Box>
  );
}
