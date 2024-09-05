import React from 'react';
import SongList from '../SongList/SongList';
import { Flex } from '../Blocks';
import Filter from '../Filter/Filter';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Button } from '../Blocks';
import { useNavigate } from 'react-router-dom';
import { IManageSongProps } from './types';
import {
  selectIsSongsLoaded,
  selectIsSongsLoading,
} from 'app/pages/ManageSong/slices/selector';
import { useSelector } from 'react-redux';
import SongListSkeleton from '../skeleton/SongListSkeleton';
import CustomePagination from '../Pagination/Pagination';

function ManageSong(props: IManageSongProps) {
  const isSongsLoading = useSelector(selectIsSongsLoading) || true;
  const isSongsLoaded = useSelector(selectIsSongsLoaded);
  const navigate = useNavigate();

  const handleAddSong = () => {
    navigate('/add');
  };

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      gap={'20px'}
      padding="30px 88px 40px"
    >
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
      {isSongsLoading && <SongListSkeleton />}
      {isSongsLoaded && <SongList songs={props.songs} />}
      <CustomePagination count={props.count} />
    </Flex>
  );
}

export default ManageSong;
