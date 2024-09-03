

export type initialValuesType = {
  _id: string;
  title: string;
  album: string;
  artist: string;
  genre: string;
};
export type AddNewSongComponentProps = {
  handleSubmit: (values: initialValuesType) => void;
  isAdding: boolean;
  isAdded: boolean;
  errorMessage: string;
};
