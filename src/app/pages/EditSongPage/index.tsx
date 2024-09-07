import { EditSongPageComponents } from '../../components/EditSong';
import { useSelector } from 'react-redux';
import { useEditSongPageSlice } from './slice';
import { useDispatch } from 'react-redux';
import { initialValuesType } from './constants';
import {
  selectErrorMessage,
  selectIsUpdated,
  selectIsUpdating,
} from './slice/selector';
import { selectSongs } from '../ManageSong/slices/selector';
import { Flex } from 'app/components/Blocks';
import { useParams } from 'react-router-dom';
import showToast from '../../components/Toast/ShowToast';
import { useNavigate } from 'react-router-dom';

export const EditSongPage = () => {
  const { actions } = useEditSongPageSlice();
  const params = useParams();

  const { songId } = params;

  const dispatch = useDispatch();
  const isUpdating = useSelector(selectIsUpdating);
  const isUpdated = useSelector(selectIsUpdated);
  const errorMessage = useSelector(selectErrorMessage);
  const songs = useSelector(selectSongs);
  const song = songs?.find(song => song._id === songId);
  const navigate = useNavigate();

  if (errorMessage) {
    showToast(errorMessage, 'error');
  }

  if (isUpdated) {
    showToast('Song updated successfully', 'success');
    navigate('/manage');
    dispatch(actions.resetState());
  }

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
      {song && (
        <EditSongPageComponents
          errorMessage={errorMessage}
          handleSubmit={handleSubmit}
          isUpdated={isUpdated}
          isUpdating={isUpdating}
          song={song}
        />
      )}
    </Flex>
  );
};
