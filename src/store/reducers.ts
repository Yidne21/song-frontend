import { combineReducers } from '@reduxjs/toolkit';
import { InjectedReducersType } from './types/type';

export const createReducer = (injectedReducers: InjectedReducersType = {}) => {
  if (Object.keys(injectedReducers).length === 0) {
    return (state: any) => state;
  } else {
    return combineReducers({ ...injectedReducers });
  }
};
