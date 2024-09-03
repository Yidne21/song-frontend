import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import { EditSongPageSaga } from './saga';
import { EditSongPageState, IUploadAction } from './types';

export const initialState: EditSongPageState = {
  songs: {
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
    updateSong: (state, action: PayloadAction<IUploadAction>) => {
      state.isUpdating = true;
      state.errorMessage = '';
      console.log(action);
    },
    updateSongSuccess(state) {
      state.isUpdating = false;
      state.isUpdated = true;
      console.log('successfull');
    },
    updateSongFailed(state) {
      state.isUpdating = false;
      console.log('Song not updated');
    },
  },
});

export const { actions: editsongspageActions } = slice;

export const useEditSongPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: EditSongPageSaga });
  return { actions: slice.actions };
};
