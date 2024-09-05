import { call, put, takeLatest } from 'redux-saga/effects';
import apiRoute from '../../../../api/constants';
import { AxiosResponse } from 'axios';
import API from '../../../../api/index';
import { statsPageActions as actions } from '.';
import { PayloadAction } from '@reduxjs/toolkit';

function* handleGetMainStats() {
  try {
    const res: AxiosResponse = yield call(API, {
      method: 'GET',
      route: apiRoute.getMainStats,
    });
    yield put(actions.getMainStatsSuccess(res.data));
  } catch (error) {
    yield put(actions.getMainStatsError(error));
  }
}

function* handleGetGenreStats() {
  try {
    const res: AxiosResponse = yield call(API, {
      method: 'GET',
      route: apiRoute.getGenreStats,
    });
    yield put(actions.getGenreStatsSuccess(res.data));
  } catch (error) {
    yield put(actions.getGenreStatsError(error));
  }
}

function* handleGetAlbumsStats() {
  try {
    const res: AxiosResponse = yield call(API, {
      method: 'GET',
      route: apiRoute.getAlbumsStats,
    });
    yield put(actions.getAlbumsStatsSuccess(res.data));
  } catch (error) {
    yield put(actions.getAlbumsStatsError(error));
  }
}

function* handleGetArtists(
  action: PayloadAction<{ skip: number; limit: number }>,
) {
  try {
    const res: AxiosResponse = yield call(API, {
      method: 'GET',
      route: `${apiRoute.getArtists}?limit=${action.payload.limit}&skip=${action.payload.skip}`,
    });
    yield put(actions.getArtistsSuccess(res.data));
  } catch (error) {
    yield put(actions.getArtistsError(error));
  }
}

export function* StatsPageSaga() {
  yield takeLatest(actions.getMainStats.type, handleGetMainStats);
  yield takeLatest(actions.getArtists.type, handleGetArtists);
  yield takeLatest(actions.getGenreStats.type, handleGetGenreStats);
  yield takeLatest(actions.getAlbumsStats.type, handleGetAlbumsStats);
}
