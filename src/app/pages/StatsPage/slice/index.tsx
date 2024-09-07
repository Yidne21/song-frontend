/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { StatsPageSaga } from './saga';
import { StatsPageState } from './types';

export const initialState: StatsPageState = {
  mainStats: [],
  genresStat: [],
  albumsStat: [],
  artists: [],
  isMainStatLoading: false,
  isMainStatLoaded: false,
  isGenreStatLoading: false,
  isGenreStatLoaded: false,
  isAlbumsStatLoading: false,
  isAlbumsStatLoaded: false,
  isArtistsLoading: false,
  isArtistsLoaded: false,
  errorMsgMainStat: '',
  errorMsgArtists: '',
  errorGenreStat: '',
  errorAlbumsStat: '',
  artistsCount: 0,
  skip: 1,
  limit: 5,
};

const slice = createSlice({
  name: 'statsPage',
  initialState,
  reducers: {
    getMainStats(state) {
      state.isMainStatLoading = true;
      state.isMainStatLoaded = false;
    },
    getMainStatsSuccess(state, action) {
      console.log('Main stat response', action.payload);
      state.mainStats = action.payload;
      state.isMainStatLoading = false;
      state.isMainStatLoaded = true;
    },
    getMainStatsError(state, action) {
      state.isMainStatLoading = false;
      state.errorMsgMainStat = action.payload;
    },
    getGenreStats(state) {
      state.isGenreStatLoading = true;
      state.isGenreStatLoaded = false;
    },
    getGenreStatsSuccess(state, action) {
      state.genresStat = action.payload;
      state.isGenreStatLoading = false;
      state.isGenreStatLoaded = true;
    },
    getGenreStatsError(state, action) {
      state.isGenreStatLoading = false;
      state.errorGenreStat = action.payload;
    },
    getArtists(state, action: PayloadAction<{ skip: number; limit: number }>) {
      state.isArtistsLoading = true;
      state.isArtistsLoaded = false;
    },
    getArtistsSuccess(state, action) {
      state.artists = action.payload.data;
      state.isArtistsLoading = false;
      state.isArtistsLoaded = true;
      state.artistsCount = action.payload.totalPages;
    },
    getArtistsError(state, action) {
      state.isArtistsLoading = false;
      state.errorMsgArtists = action.payload;
    },
    getAlbumsStats(state) {
      state.isAlbumsStatLoading = true;
      state.isAlbumsStatLoaded = false;
    },
    getAlbumsStatsSuccess(state, action) {
      state.albumsStat = action.payload;
      state.isAlbumsStatLoading = false;
      state.isAlbumsStatLoaded = true;
    },
    getAlbumsStatsError(state, action) {
      state.isAlbumsStatLoading = false;
      state.errorAlbumsStat = action.payload;
    },
    setSkip(state, action: PayloadAction<number>) {
      state.skip = action.payload;
    },
  },
});
export const { actions: statsPageActions } = slice;

export const useStatsPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: StatsPageSaga });
  return { actions: slice.actions };
};
