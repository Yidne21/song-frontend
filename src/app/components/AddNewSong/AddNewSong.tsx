import { AddNewSongComponentProps } from './types';
import FormComponent from '../Form';
import * as Yup from 'yup';

function AddNewSongComponent(props: AddNewSongComponentProps) {
  const initialValues = {
    _id: '',
    title: '',
    album: '',
    artist: '',
    genre: '',
  };
  const validationSchema = Yup.object({
    title: Yup.string().required('Song title is required'),
    album: Yup.string().required('Song album name is required'),
    artist: Yup.string().required('Artist name is required'),
    genre: Yup.string().required('Genre is required'),
  });

  return (
    <FormComponent
      errorMessage={props.errorMessage}
      handleSubmit={props.handleSubmit}
      initialValues={initialValues}
      isEdit={false}
      isLoaded={props.isAdded}
      isLoading={props.isAdding}
      validationSchema={validationSchema}
    />
  );
}

export default AddNewSongComponent;
