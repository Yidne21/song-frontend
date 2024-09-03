import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../../../types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.editsongspage || initialState;



export const selectErrorMessage = createSelector(
    [selectSlice],
    state => state.errorMessage,
  );
  export const selectIsUpdating = createSelector(
    [selectSlice],
    state => state.isUpdating,
  );
  export const selectIsUpdated = createSelector(
    [selectSlice],
    state => state.isUpdated,
  );