import { AddNewSongComponent } from '../../components/AddNewSong';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useAddSongPageSlice } from './Slice';
import {
  selectErrorMessage,
  selectIsAdded,
  selectIsAdding,
} from './Slice/selectors';
import { useNavigate } from 'react-router-dom';
import { Flex } from 'app/components/Blocks';
import { initialValues } from 'app/components/Form/types';
import showToast from 'app/components/Toast/ShowToast';

function AddNewSong() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { actions } = useAddSongPageSlice();
  const errorMessage = useSelector(selectErrorMessage);
  const isAddded = useSelector(selectIsAdded);
  const isAdding = useSelector(selectIsAdding);

  if (errorMessage) {
    showToast(errorMessage, 'error');
    dispatch(actions.resetState());
  }

  if (isAddded) {
    showToast('Song added successfully', 'success');
    navigate('/manage');
    dispatch(actions.resetState());
  }

  const handleSubmit = (values: initialValues) => {
    dispatch(
      actions.addSong({
        title: values.title,
        genre: values.genre,
        artist: values.artist,
        album: values.album,
      }),
    );
  };
  return (
    <Flex
      alignItems={'center'}
      backgroundColor={'white'}
      justifyContent={'center'}
    >
      <AddNewSongComponent
        errorMessage={errorMessage}
        handleSubmit={handleSubmit}
        isAdded={isAddded}
        isAdding={isAdding}
      />
    </Flex>
  );
}

export default AddNewSong;
