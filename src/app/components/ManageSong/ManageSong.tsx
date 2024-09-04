import React from 'react';
import SongList from '../SongList/SongList';
import { Flex } from '../Blocks';
import Filter from '../Filter/Filter';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Button } from '../Blocks';
import { useNavigate } from 'react-router-dom';
import { IManageSongProps } from './types';

function ManageSong(props: IManageSongProps) {
  const navigate = useNavigate();

  const handleAddSong = () => {
    navigate('/add');
  };

  return (
    <Flex alignItems="center" flexDirection="column" padding="30px 88px 40px">
      <Flex
        alignItems={'center'}
        flexDirection={'row'}
        justifyContent={'space-between'}
        width={'100%'}
      >
        <Filter setFilter={props.setFilter} setSearch={props.setSearch} />
        <Button
          bg={'blue'}
          color={'#fff'}
          onClick={handleAddSong}
          padding={'14px'}
        >
          <AddOutlinedIcon
            onClick={() => console.log('add song')}
            sx={{ fontSize: '20px', color: 'white' }}
          />
          Add New Song
        </Button>
      </Flex>
      <SongList songs={props.songs} />
    </Flex>
  );
}

export default ManageSong;
