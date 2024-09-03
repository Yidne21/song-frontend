import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DefaultLayoutState } from './types';
import { useInjectSaga, useInjectReducer } from 'utils/redux-injectors';
import { DefaultLayoutPageSaga } from './saga';

export const initialState: DefaultLayoutState = {
    isLogging: false,
    loggedIn: false,
    hasErrors: false,
    errors: '',
    user: undefined,
};

const slice = createSlice({
    name: 'defaultLayout',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<any>) => {
            state.isLogging = true;
        },
        loginSuccess: (state, { payload }: PayloadAction<any>) => {
            state.user = payload;
            state.loggedIn = true;
            state.isLogging = false;
        },
        loginFailure: (state, { payload }: PayloadAction<any>) => {
            state.loggedIn = false;
            state.hasErrors = true;
            state.errors = payload;
        },
        loginWithAccessToken: (state) => {
            state.loggedIn = true;
        },
        logout: (state) => {
            state.loggedIn = false;
            state.hasErrors = false;
            state.user = undefined;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            // localStorage.removeItem('id');
            // localStorage.removeItem('email');
            // localStorage.removeItem('name');
        },
    }
});


export const { actions: defaultLayoutActions } = slice;

export const useDefaultLayoutSlice = () => {
    useInjectReducer({ key: slice.name, reducer: slice.reducer });
    useInjectSaga({ key: slice.name, saga: DefaultLayoutPageSaga });
    return { actions: slice.actions };
};