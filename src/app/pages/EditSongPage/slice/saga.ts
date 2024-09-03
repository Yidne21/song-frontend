import apiRoute from '../../../../api/constants';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { editsongspageActions as actions } from '.';
import API from '../../../../api/index';

function* handleUpdateSong(action: any) {
  try {
    const res: AxiosResponse = yield API({
      method: 'PUT',
      payload: action.payload,
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

function* handleUpdateAudio(action: any) {
  const data = new FormData();
  data.append('audio', action.payload);
  try {
    const res: AxiosResponse = yield call(API, {
      method: 'POST',
      route: apiRoute.audioUpload,
      payload: data,
    });    
    yield put(actions.updateAudioSuccess(res.data));
  } catch (error) {
    yield put(actions.updateAudioFailed(error));
  }
}

export function* EditSongPageSaga() {
  yield takeLatest(actions.updateSong.type, handleUpdateSong);
  yield takeLatest(actions.UpdateAudio.type, handleUpdateAudio);

}
