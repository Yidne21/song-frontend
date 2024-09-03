import React from 'react';
import SongList from '../SongList/SongList';
import { Flex } from '../Blocks';
import Filter from '../Filter/Filter';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Button } from '../Blocks';

function ManageSong() {
  return (
    <Flex alignItems="center" flexDirection="column" padding="30px 88px 40px">
      <Flex
        alignItems={'center'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        width={'100%'}
      >
        <Filter />
        <Button bg={'blue'} color={'#fff'} padding={'14px'}>
          <AddOutlinedIcon
            onClick={() => console.log('add song')}
            sx={{ fontSize: '20px', color: 'white' }}
          />
          Add New Song
        </Button>
      </Flex>
      <SongList />
    </Flex>
  );
}

export default ManageSong;
