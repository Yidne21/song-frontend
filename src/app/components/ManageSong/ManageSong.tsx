import React, { useEffect, useState } from 'react';
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
  selectSongs,
} from 'app/pages/ManageSong/slices/selector';
import { useSelector } from 'react-redux';
import SongListSkeleton from '../skeleton/SongListSkeleton';
import CustomePagination from '../Pagination/Pagination';
import { Text } from '../Blocks/Text/Text';
import { ISong } from 'app/pages/AddNewSong/Slice/types';

function ManageSong(props: IManageSongProps) {
  const isSongsLoading = useSelector(selectIsSongsLoading);
  const isSongsLoaded = useSelector(selectIsSongsLoaded);
  const currentSong = useSelector(selectSongs);
  const [songs, setSongs] = useState<ISong[]>([]);

  useEffect(() => {
    if (currentSong) {
      setSongs(currentSong);
    }
  }, [currentSong]);

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
      {songs && <SongList songs={songs} />}
      {isSongsLoaded && songs?.length === 0 && (
        <Flex
          alignItems="center"
          flexDirection="column"
          gap="10px"
          justifyContent="center"
          width="100%"
        >
          <Text
            color="black.5"
            fontSize="20px"
            fontWeight="bold"
            lineHeight="30px"
          >
            No songs found
          </Text>
        </Flex>
      )}
      {songs && songs.length > 0 && (
        <CustomePagination
          count={props.count}
          handleChange={props.handleChange}
          page={props.page}
        />
      )}
    </Flex>
  );
}

export default ManageSong;
