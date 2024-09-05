/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer } from 'redux-injectors';
import { useInjectSaga } from 'utils/redux-injectors';
import {
  IDeleteSong,
  IFilterSongsPayload,
  IFilterSongsSuccessPayload,
  IGetAllSongs,
  IResponsePayload,
  ManageSongPageState,
} from './types';
import { ManageSongsSaga } from './saga';

const songs = [
  {
    title: 'Hello',
    artist: 'Adele',
    album: '21',
    genre: 'classical',
    _id: '1',
  },
  {
    title: 'Shake It Off',
    artist: 'Taylor Swift',
    album: '1989',
    genre: 'classical',
    _id: '2',
  },
  {
    title: 'Billie Jean',
    artist: 'Michael Jackson',
    album: 'Thriller',
    genre: 'classical',
    _id: '3',
  },
  {
    title: 'Not Afraid',
    artist: 'Eminem',
    album: 'Recovery',
    genre: 'classical',
    _id: '4',
  },
];

export const initialState: ManageSongPageState = {
  isDeleting: false,
  isSongsLoading: false,
  isSongsLoaded: false,
  songs: songs,
  errorMessage: '',
  count: 40,
  skip: 1,
  limit: 5,
};

export const slice = createSlice({
  name: 'managesongspage',
  initialState,
  reducers: {
    deleteSong(state, action) {
      state.isDeleting = true;
    },
    deleteSongSuccess(state, action: PayloadAction<IDeleteSong>) {
      state.isDeleting = false;
    },
    deleteSongFailed: (state, action) => {
      state.errorMessage = action.payload;
    },
    getAllSongs(state, action: PayloadAction<IGetAllSongs>) {
      state.isSongsLoading = true;
      state.isSongsLoaded = false;
    },
    getAllSongsFailed(state, action) {
      state.isSongsLoading = false;
      state.isSongsLoaded = false;
      state.errorMessage = action.payload;
    },
    getAllSongsSuccess(state, action: PayloadAction<IResponsePayload>) {
      state.isSongsLoading = false;
      state.isSongsLoaded = true;
      state.songs = action.payload.songs;
      state.count = action.payload.count;
    },
    setSkip(state, action: PayloadAction<number>) {
      state.skip = action.payload;
    },
    filterSongs: (state, action: PayloadAction<IFilterSongsPayload>) => {},
    filterSongsSucces: (
      state,
      action: PayloadAction<IFilterSongsSuccessPayload>,
    ) => {
      state.songs = action.payload.songs;
    },
    filterSongsFailed: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});
export const { actions: manageSongPageActions } = slice;
export const useManageSongPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ManageSongsSaga });
  return { actions: slice.actions };
};
