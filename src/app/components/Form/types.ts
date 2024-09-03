import * as Yup from 'yup';

export enum GenreEnum {
  pop = 'pop',
  rock = 'rock',
  jazz = 'jazz',
  hipHop = 'hipHop',
  reggae = 'reggae',
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
  { value: GenreEnum.reggae, label: 'reggae' },
  { value: GenreEnum.rock, label: 'rock' },
];

export type initialValuesType = {
  _id: string;
  title: string;
  album: string;
  artist: string;
  genre: string;
};
export type FormComponentProps = {
  initialValues: initialValuesType;

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
  handleSubmit: (values: initialValuesType) => void;
  isLoading: boolean;
  isLoaded: boolean;
  errorMessage: string;
  isEdit: boolean;
};
