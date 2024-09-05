/* eslint-disable no-unused-vars */

export interface IAddNewSong {
  artist: string;
  album: string;
  genre: string;
  title: string;
}

export type AddSongPageState = {
  errorMessage: string;
  isAdding:boolean,
  isAdded:boolean
};
export interface ISong {
  _id: string;
  title: string;
  album: string;
  genre: string;
  artist: string;
}
