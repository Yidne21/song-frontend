import { call, put, takeLatest } from 'redux-saga/effects';
import { addSongPageActions as actions } from '.';
import { PayloadAction } from '@reduxjs/toolkit';
import API from '../../../../api';
import { AxiosResponse } from 'axios';
import apiRoute from '../../../../api/constants';
import { IAddNewSong } from './types';


function* handleAddSong(action: PayloadAction<IAddNewSong>) {
  
  try {
    const res: AxiosResponse<IAddNewSong> = yield call(API, {
      method: 'POST',
      route: apiRoute.createSong,
      payload: {
        title: action.payload.title,
        genre: action.payload.genre,
        artist: action.payload.artist,
        album: action.payload.album,
      },
    });

   

    if (res.status === 200) {
      yield put(actions.addSongSuccess(res.data));
    }
  } catch (error) {
    yield put({ type: actions.addSongFailed.type, payload: error });
  }
}


export function* AddSongPageSaga() {
  yield takeLatest(actions.addSong.type, handleAddSong);
}
