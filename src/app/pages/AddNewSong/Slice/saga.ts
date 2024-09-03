import { call, put, takeLatest } from 'redux-saga/effects';
import { addSongPageActions as actions } from '.';
import { PayloadAction } from '@reduxjs/toolkit';
import API from '../../../../api';
import { AxiosResponse } from 'axios';
import apiRoute from '../../../../api/constants';
import { IAddNewSong } from './types';


function* handleAddSong(action: PayloadAction<any>) {
  
  try {
    const res: AxiosResponse<IAddNewSong> = yield call(API, {
      method: 'POST',
      route: apiRoute.createSong,
      payload: {
        name: action.payload.name,
        description: action.payload.description,
        artist: action.payload.artist,
        releaseDate: action.payload.releaseDate,
        genre: action.payload.genre,
        audio: action.payload.audio,
      },
    });

   

    if (res.status === 200) {
      yield put(actions.addSongSuccess(res.data));
    }
  } catch (error) {
    yield put({ type: actions.addSongFailed.type, payload: error });
  }
}

function* handleAudioUpload(action: any) {
  const data = new FormData();
  data.append('audio', action.payload);
  try {
    const res: AxiosResponse = yield call(API, {
      method: 'POST',
      route: apiRoute.audioUpload,
      payload: data,
    });

    yield put(actions.audioUploadSuccess(res.data));
  } catch (error) {
    yield put(actions.audioUploadFailed(error));
  }
}

export function* AddSongPageSaga() {
  yield takeLatest(actions.addSong.type, handleAddSong);
  yield takeLatest(actions.audioUpload.type, handleAudioUpload);
}
