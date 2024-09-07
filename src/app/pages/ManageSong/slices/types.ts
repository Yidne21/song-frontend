import { ISong } from 'app/pages/EditSongPage/slice/types';

export interface ManageSongPageState {
  isDeleting: boolean;
  isDeleted: boolean;
  isSongsLoading: boolean;
  isSongsLoaded: boolean;
  songs?: ISong[];
  errorMessage: string;
  count: number;
  skip: number;
  limit: number;
}

export interface IResponsePayload {
  data?: ISong[];
  totalPages: number;
}
export interface IFilterSongsPayload {
  filterBy: string;
  search: string;
}
export interface IFilterSongsSuccessPayload {
  songs: ISong[];
  count: number;
}
export interface IGetAllSongs {
  limit?: number;
  skip: number;
  search: string;
  filter: string;
}
export interface IDeleteSong {
  message: string;
}
