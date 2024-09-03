import { EditSongPageComponents } from '../../components/EditSong';
// import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEditSongPageSlice } from './slice';
import { useDispatch } from 'react-redux';
import { initialValuesType } from './constants';
import {
  selectErrorMessage,
  selectIsUpdated,
  selectIsUpdating,
} from './slice/selector';
import { Flex } from 'app/components/Blocks';

export const EditSongPage = () => {
  const { actions } = useEditSongPageSlice();
  // const params = useParams();

  // const { id } = params;

  const song = {
    _id: 'hfdfh789346579745',
    title: 'New song',
    album: 'test',
    artist: 'Yidne',
    genre: 'classical',
  };
  const dispatch = useDispatch();
  const isUpdating = useSelector(selectIsUpdating);
  const isUpdated = useSelector(selectIsUpdated);
  const errorMessage = useSelector(selectErrorMessage);

  const handleSubmit = (values: initialValuesType) => {
    dispatch(
      actions.updateSong({
        _id: values._id,
        title: values.title,
        album: values.album,
        genre: values.genre,
        artist: values.artist,
      }),
    );
  };

  return (
    <Flex
      alignItems={'center'}
      backgroundColor={'white'}
      justifyContent={'center'}
    >
      <EditSongPageComponents
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
        isUpdated={isUpdated}
        isUpdating={isUpdating}
        song={song}
      />
    </Flex>
  );
};
