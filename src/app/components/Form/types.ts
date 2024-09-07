import * as Yup from 'yup';

export enum GenreEnum {
  pop = 'pop',
  rock = 'rock',
  jazz = 'jazz',
  hipHop = 'hipHop',
  reggae = 'raggae',
  country = 'country',
  funk = 'funk',
  disco = 'disco',
  classical = 'classical',
}

export type GenersType = {
  value: GenreEnum;
  label: string;
};

export const genres = [
  { value: GenreEnum.classical, label: 'classical' },
  { value: GenreEnum.country, label: 'country' },
  { value: GenreEnum.disco, label: 'disco' },
  { value: GenreEnum.funk, label: 'funk' },
  { value: GenreEnum.hipHop, label: 'hipHop' },
  { value: GenreEnum.jazz, label: 'jazz' },
  { value: GenreEnum.pop, label: 'pop' },
  { value: GenreEnum.reggae, label: 'raggae' },
  { value: GenreEnum.rock, label: 'rock' },
];

export type initialValuesType = {
  _id?: string;
  title?: string;
  album?: string;
  artist?: string;
  genre?: string;
};

export type initialValues = {
  _id: string;
  title: string;
  album: string;
  artist: string;
  genre: string;
};
export type FormComponentProps = {
  initialValues: initialValues;

  validationSchema: Yup.ObjectSchema<
    {
      title: string;
      album: string;
      artist: string;
    },
    Yup.AnyObject,
    {
      title: undefined;
      album: undefined;
      artist: undefined;
    },
    ''
  >;
  handleSubmit: (values: initialValues) => void;
  isLoading: boolean;
  isLoaded: boolean;
  errorMessage: string;
  isEdit: boolean;
};
