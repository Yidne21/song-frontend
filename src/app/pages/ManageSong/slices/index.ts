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

export const initialState: ManageSongPageState = {
  isDeleting: false,
  isDeleted: false,
  isSongsLoading: false,
  isSongsLoaded: false,
  songs: [],
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
      state.isDeleted = false;
      state.errorMessage = '';
    },
    deleteSongSuccess(state, action: PayloadAction<IDeleteSong>) {
      state.isDeleting = false;
      state.isDeleted = true;
    },
    deleteSongFailed: (state, action) => {
      state.isDeleting = false;
      state.isDeleted = false;
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
      state.songs = action.payload.data;
      state.count = action.payload.totalPages;
    },
    setSkip(state, action: PayloadAction<number>) {
      state.skip = action.payload;
    },
    filterSongs: (state, action: PayloadAction<IFilterSongsPayload>) => {
      state.isSongsLoading = true;
      state.isSongsLoaded = false;
    },
    filterSongsSucces: (
      state,
      action: PayloadAction<IFilterSongsSuccessPayload>,
    ) => {
      state.isSongsLoading = false;
      state.isSongsLoaded = true;
      state.songs = action.payload.songs;
    },
    filterSongsFailed: (state, action) => {
      state.isSongsLoading = false;
      state.isSongsLoaded = false;
      state.errorMessage = action.payload;
    },
    resetState(state) {
      state.isDeleting = false;
      state.isDeleted = false;
      state.isSongsLoading = false;
      state.isSongsLoaded = false;
      state.errorMessage = '';
    },
  },
});
export const { actions: manageSongPageActions } = slice;
export const useManageSongPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ManageSongsSaga });
  return { actions: slice.actions };
};
