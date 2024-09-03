import { call, put, takeLatest } from 'redux-saga/effects';
import { defaultLayoutActions as actions } from '.';
import { PayloadAction } from '@reduxjs/toolkit';
import API from '../../../../api';
import { AxiosResponse } from 'axios';
import apiRoute from '../../../../api/constants';
import { User } from './types';

function* handleLogin(action: PayloadAction<any>) {

    try {
        const res: AxiosResponse = yield call(API, {
            method: 'POST',
            route: apiRoute.login,
            payload: action.payload,
        });

        if (res.status === 200) {
            console.log(res.data);
            yield put(actions.loginSuccess(res.data));
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            // localStorage.setItem('id', res.data.user.user.id);
            // localStorage.setItem('email', res.data.user.user.email);
            // localStorage.setItem('name', res.data.user.user.name);

        }
    } catch (error) {
        yield put(actions.loginFailure(error));
    }
}


function* handleLoginWithAccessToken() {
    try {
        const res: AxiosResponse<User> = yield call(API, {
            method: 'GET',
            route: apiRoute.loginWithToken,
            payload: { token: localStorage.getItem('token') },
        });

        if (res.status === 200) {
            yield put({ type: actions.loginSuccess.type, payload: res.data });
            // localStorage.setItem('id', `${res.data.id}`);
            // localStorage.setItem('email', `${res.data.email}`);
            // localStorage.setItem('firstName', `${res.data.name}`);
        }
    } catch (error) {
        yield put(actions.loginFailure(error));

    }
}


// function handleFirebase(): any {
//     return new Promise((resolve, reject) => {
//         signInWithPopup(auth, provider).then((result) => {
//             const user = {
//                 email: result.user?.email,
//                 name: result.user?.displayName,
//             };
//             resolve(user);
//         }).catch((error) => {
//             reject(error);
//         });
//     });
// }

// function* handleFirebaseLogin(): any {
//     try {

//         const user = yield call(handleFirebase);

//         const res: AxiosResponse = yield call(API, {
//             method: 'POST',
//             route: apiRoute.google,
//             payload: user,
//         });

//         if (res.status === 200) {
//             console.log(res.data);
//             yield put(actions.loginSuccess(res.data));
//         }

//     } catch (error) {
//         console.log(error);
//     }
// }







export function* DefaultLayoutPageSaga() {
    yield takeLatest(actions.login.type, handleLogin);
    yield takeLatest(actions.loginWithAccessToken.type, handleLoginWithAccessToken);
}