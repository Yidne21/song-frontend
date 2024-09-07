import React from 'react';
import { Flex } from '../Blocks';
import SongCard from '../Card/SongCard';
import { ISongListProps } from './types';
import {
  selectIsDeleted,
  selectIsDeleting,
  selectErrorMessage,
} from 'app/pages/ManageSong/slices/selector';
import { useSelector } from 'react-redux';
import { useManageSongPageSlice } from 'app/pages/ManageSong/slices';
import showToast from '../Toast/ShowToast';
import { useDispatch } from 'react-redux';

function SongList(props: ISongListProps) {
  const { actions } = useManageSongPageSlice();
  const dispatch = useDispatch();
  const isDeleted = useSelector(selectIsDeleted);
  const isDeleting = useSelector(selectIsDeleting);
  const errorMessage = useSelector(selectErrorMessage);

  if (isDeleted && !isDeleting) {
    showToast('Song deleted successfully', 'success');
    dispatch(actions.resetState());
  }

  if (errorMessage) {
    showToast(errorMessage, 'error');
    dispatch(actions.resetState());
  }

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      gap="20px"
      justifyContent="center"
      mt={5}
      width="100%"
    >
      {props.songs.map(item => (
        <SongCard key={item._id} song={item} />
      ))}
    </Flex>
  );
}

export default SongList;
