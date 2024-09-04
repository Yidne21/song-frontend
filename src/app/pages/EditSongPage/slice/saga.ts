import { AxiosResponse } from 'axios';
import {  put, takeLatest } from 'redux-saga/effects';
import { editsongspageActions as actions } from '.';
import API from '../../../../api/index';
import { IUpdateAction } from './types';
import { PayloadAction } from '@reduxjs/toolkit';


function* handleUpdateSong(action: PayloadAction<IUpdateAction>) {
  try {
    const res: AxiosResponse = yield API({
      method: 'PUT',
      payload: {
        title: action.payload.title,
        genre: action.payload.genre,
        artist: action.payload.artist,
        album: action.payload.album, 
      },
      route: `/song/update/${action.payload._id}`,
    });
    if (res.status === 200) {
      yield put(actions.updateSongSuccess);
    }
  } catch (error) {
    yield put(actions.updateSongFailed);
    console.log(error);
  }
}


export function* EditSongPageSaga() {
  yield takeLatest(actions.updateSong.type, handleUpdateSong);
}
