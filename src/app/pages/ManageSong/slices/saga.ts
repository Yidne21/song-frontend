import { call, put, takeLatest } from 'redux-saga/effects';
import { manageSongPageActions as actions } from '.';
import { PayloadAction } from '@reduxjs/toolkit';
import apiRoute from '../../../../api/constants';
import { AxiosResponse } from 'axios';
import API from '../../../../api/index';
import { IFilterSongsPayload, IGetAllSongs } from './types';

function* handleDeleteSong(action: PayloadAction<string>) {
  console.log(action.payload);
  try {
    const res: AxiosResponse = yield call(API, {
      method: 'DELETE',
      route: `${apiRoute.deleteSong}/${action.payload}`,
      payload: action.payload,
    });
    if (res.status === 200) {
      yield put(actions.deleteSongSuccess(res.data));
    }
  } catch (error) {
    yield put(actions.deleteSongFailed(error));
  }
}
function* handleFilterSong(action: PayloadAction<IFilterSongsPayload>) {
  try {
    const res: AxiosResponse = yield call(API, {
      method: 'GET',
      route: `${apiRoute.listSong}?${action.payload.filterBy}=${action.payload.search}`,
      payload: action.payload,
    });

    if (res.status === 200) {
      yield put({ type: actions.filterSongsSucces.type, payload: res.data });
    }
  } catch (error) {
    yield put(actions.filterSongsFailed(error));
  }
}

function* handleGetAllSongs(action: PayloadAction<IGetAllSongs>) {
  const route = action.payload.search
    ? `${apiRoute.listSong}?${action.payload.filter}=${action.payload.search}&skip=${action.payload.skip}&limit=${action.payload.limit}`
    : `${apiRoute.listSong}?skip=${action.payload.skip}&limit=${action.payload.limit}`;
  try {
    const res: AxiosResponse = yield call(API, {
      method: 'GET',
      route: route,
    });
    yield put(actions.getAllSongsSuccess(res.data));
  } catch (error) {
    yield put(actions.getAllSongsFailed(error));
  }
}

export function* ManageSongsSaga() {
  yield takeLatest(actions.deleteSong.type, handleDeleteSong);
  yield takeLatest(actions.filterSongs.type, handleFilterSong);
  yield takeLatest(actions.getAllSongs.type, handleGetAllSongs);
}
