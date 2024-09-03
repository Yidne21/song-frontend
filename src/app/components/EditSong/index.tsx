import { IEditSongComponentProps } from './types';
import FormComponent from '../Form';
import * as Yup from 'yup';

export const EditSongPageComponents = (props: IEditSongComponentProps) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Song title is required'),
    album: Yup.string().required('Song album name is required'),
    artist: Yup.string().required('Artist name is required'),
    genre: Yup.string().required('Genre is required'),
  });

  const initialValues = {
    ...props.song,
  };
  return (
    <FormComponent
      errorMessage={props.errorMessage}
      handleSubmit={props.handleSubmit}
      initialValues={initialValues}
      isEdit={true}
      isLoaded={false}
      isLoading={false}
      validationSchema={validationSchema}
    />
  );
};
