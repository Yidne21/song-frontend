export type initialValuesType = {
  _id: string;
  title: string;
  album: string;
  artist: string;
  genre: string;
};

export interface IEditSongComponentProps {
  song: {
    _id: string;
    title: string;
    album: string;
    genre: string;
    artist: string;
  };
  isUpdating: boolean;
  isUpdated: boolean;
  errorMessage: string;
  handleSubmit: (values: initialValuesType) => void;
}
