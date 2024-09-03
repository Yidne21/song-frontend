import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.addsongPage || initialState;
export const selectAddSongPage = createSelector([selectSlice], state => state);
export const selectAudioPath = createSelector(
  [selectSlice],
  state => state.audioPath,
);
export const selectIsUploading =  createSelector([selectSlice], state => state.isUploading);
export const selectIsUploaded =  createSelector([selectSlice], state => state.isUploaded);
export const selectErrorMessage = createSelector([selectSlice], state => state.errorMessage);
export const selectIsAdded = createSelector([selectSlice], state => state.isAdded);