/* eslint-disable no-unused-vars */


export interface IAddNewSong {
  artist: string;
  _id: string;
  audio: string;
  genre: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  name: string;
  description: string;
  releaseDate: string;

}
export interface IAddNewSongAction {
  artist: string;
  album: string;
  genre: string;
  title: string;
}


export type AddSongPageState = {
  errorMessage: string;
  isAdding:boolean,
  isAdded:boolean
  audioPath: string;
  isUploading: boolean;
  isUploaded: boolean;
};
export interface ISong {
  _id: string;
  title: string;
  album: string;
  genre: string;
  artist: string;
}
