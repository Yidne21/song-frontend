import { createSlice } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { EditSongPageSaga } from './saga';
import { EditSongPageState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import { IUpdateAction } from './types';

export const initialState: EditSongPageState = {
  song: {
    _id: '',
    title: '',
    album: '',
    genre: '',
    artist: '',
  },
  isUpdating: false,
  isUpdated: false,
  errorMessage: '',
};

export const slice = createSlice({
  name: 'editsongspage',
  initialState,
  reducers: {
    updateSong: (state, action: PayloadAction<IUpdateAction>) => {
      state.isUpdating = true;
      state.isUpdated = false;
      state.errorMessage = '';
      console.log(action.payload);
    },
    updateSongSuccess(state) {
      state.isUpdating = false;
      state.isUpdated = true;
      state.errorMessage = '';
    },
    updateSongFailed(state, action) {
      state.isUpdating = false;
      state.isUpdated = false;
      state.errorMessage = action.payload;
    },
    resetState(state) {
      state.isUpdated = false;
      state.isUpdating = false;
      state.errorMessage = '';
    },
  },
});

export const { actions: editsongspageActions } = slice;

export const useEditSongPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: EditSongPageSaga });
  return { actions: slice.actions };
};
