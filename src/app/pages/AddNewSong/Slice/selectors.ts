import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.addsongPage || initialState;
export const selectAddSongPage = createSelector([selectSlice], state => state);
export const selectIsAdding = createSelector([selectSlice], state => state.isAdding);
export const selectErrorMessage = createSelector([selectSlice], state => state.errorMessage);
export const selectIsAdded = createSelector([selectSlice], state => state.isAdded);