import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.managesongspage || initialState;

export const selectSongs = createSelector([selectSlice], state => state.songs);

export const selectCount = createSelector([selectSlice], state => state.count);

export const selectSkip = createSelector([selectSlice], state => state.skip);

export const selectlimit = createSelector([selectSlice], state => state.limit);
export const selectIsDeleting = createSelector([selectSlice], state => state.isDeleting);

