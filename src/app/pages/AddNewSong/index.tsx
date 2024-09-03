import { AddNewSongComponent } from '../../components/AddNewSong';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useAddSongPageSlice } from './Slice';
import {
  selectErrorMessage,
  selectIsAdded,
  selectIsUploaded,
  selectIsUploading,
} from './Slice/selectors';
import { useNavigate } from 'react-router-dom';
import { Flex } from 'app/components/Blocks';
import { initialValuesType } from 'app/components/Form/types';

function AddNewSong() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { actions } = useAddSongPageSlice();
  const isUploading = useSelector(selectIsUploading);
  const isUploaded = useSelector(selectIsUploaded);
  const errorMessage = useSelector(selectErrorMessage);
  const isAddded = useSelector(selectIsAdded);

  const handleSubmit = (values: initialValuesType) => {
    dispatch(
      actions.addSong({
        title: values.title,
        genre: values.genre,
        artist: values.artist,
        album: values.album,
      }),
    );
    if (isAddded) {
      navigate('/');
    }
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
        isUploaded={isUploaded}
        isUploading={isUploading}
      />
    </Flex>
  );
}

export default AddNewSong;
