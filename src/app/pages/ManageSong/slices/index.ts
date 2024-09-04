/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer } from 'redux-injectors';
import { useInjectSaga } from 'utils/redux-injectors';
import { IDeleteSong, IFilterSongsPayload, IFilterSongsSuccessPayload, IGetAllSongs, IResponsePayload, ManageSongPageState } from './types';
import { ManageSongsSaga } from './saga';

export const initialState: ManageSongPageState = {
  isDeleting: false,
  songs: [],
  errorMessage: '',
  count: 1,
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
      state.skip = action.payload.skip;
    },
    getAllSongsFailed(state, action) {
      state.errorMessage = action.payload;
    },
    getAllSongsSuccess(state, action: PayloadAction<IResponsePayload>) {
      state.songs = action.payload.songs;
      state.count = action.payload.count;
    },
    setSkip(state, action: PayloadAction<number>) {
      state.skip = action.payload;
    },
    filterSongs: (state, action: PayloadAction<IFilterSongsPayload>) => { },
    filterSongsSucces: (state, action: PayloadAction<IFilterSongsSuccessPayload>) => {
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
