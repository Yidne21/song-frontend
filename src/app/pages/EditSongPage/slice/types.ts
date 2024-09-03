export interface ISong {
  _id: string;
  title: string;
  album: string;
  genre: string;
  artist: string;
}
export interface EditSongPageState {
  songs?: ISong;
  isUpdating: boolean;
  isUpdated: boolean;
  errorMessage: string;
}

export interface IUploadAction {
  _id: string;
  title: string;
  album: string;
  genre: string;
  artist: string;
}
