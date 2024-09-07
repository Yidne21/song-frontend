/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { AddSongPageSaga } from './saga';
import { AddSongPageState, IAddNewSong } from './types';

export const initialState: AddSongPageState = {
  errorMessage: '',
  isAdding: false,
  isAdded: false,
};

const slice = createSlice({
  name: 'addsongPage',
  initialState,
  reducers: {
    addSong(state, action: PayloadAction<IAddNewSong>) {
      state.isAdding = true;
      state.isAdded = false;
    },
    addSongSuccess: (state, action: PayloadAction<IAddNewSong>) => {
      state.isAdded = true;
      state.isAdding = false;
    },
    addSongFailed: (state, action: PayloadAction<string>) => {
      state.isAdded = false;
      state.isAdding = false;
      state.errorMessage = action.payload;
    },
    resetState(state) {
      state.isAdded = false;
      state.isAdding = false;
      state.errorMessage = '';
    },
  },
});
export const { actions: addSongPageActions } = slice;

export const useAddSongPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: AddSongPageSaga });
  return { actions: slice.actions };
};
