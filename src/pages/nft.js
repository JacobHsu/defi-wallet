import { useState } from 'react';
import { Box } from '@mui/material';

import { NFTCard } from 'components/NFTCard';
import { SearchSider } from 'components/nft/SearchSider';
import { Dropdown } from 'react-bootstrap';
import { goods } from '../data/goods';
import { CardList } from 'theme/nft';
import {
  BiSortDown,
  BiFilterAlt,
  BiDownArrowAlt,
  BiUpArrowAlt,
  BiSortUp,
} from 'react-icons/bi';
import 'style/SearchSider.css';

export default function Home() {
  const [products, setProducts] = useState(goods);
  const [sort, setSort] = useState('oldest');
  return (
    <Box
      sx={{
        flexDirection: 'column',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <SearchSider />
      <Dropdown id="dropdown-sort" style={{ width: '68%', textAlign: 'right' }}>
        <Dropdown.Toggle variant="light" id="dropdown-basic">
          <BiFilterAlt /> Filiter 
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              setSort('oldest');
            }}
          >
            Oldest <BiDownArrowAlt />
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSort('newest');
            }}
          >
            Newest <BiUpArrowAlt />
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSort('lowerPrice');
            }}
          >
            Price <BiSortDown />
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSort('biggerPrice');
            }}
          >
            Price <BiSortUp />{' '}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <CardList container spacing={0}>
        {products
          ? products.map((item, index) => <NFTCard {...{ item }} key={index} />)
          : '-'}
      </CardList>
    </Box>
  );
}
