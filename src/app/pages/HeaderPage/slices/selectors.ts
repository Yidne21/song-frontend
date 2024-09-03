import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.defaultLayout || initialState;
export const selectLogin = createSelector([selectSlice], state => state);
export const selectIsLoggedIn = createSelector([selectSlice], state => state.loggedIn);
export const selectError = createSelector([selectSlice], state => state.hasErrors);
export const selectUser = createSelector([selectSlice], state => state.user);
export const selectIsLogging = createSelector([selectSlice], state => state.isLogging);