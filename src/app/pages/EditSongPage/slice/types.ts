export interface ISong {
  _id: string;
  title: string;
  album: string;
  genre: string;
  artist: string;
}
export interface EditSongPageState {
  song?: ISong;
  isUpdating: boolean;
  isUpdated: boolean;
  errorMessage: string;
}

export interface IUpdateAction {
  _id: string;
  title: string;
  album: string;
  genre: string;
  artist: string;
}
