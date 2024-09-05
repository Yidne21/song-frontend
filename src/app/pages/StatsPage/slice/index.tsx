/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { StatsPageSaga } from './saga';
import { StatsPageState } from './types';

const data = [
  {
    title: 'Songs',
    stat: 100,
  },
  {
    title: 'Artists',
    stat: 50,
  },
  {
    title: 'Albums',
    stat: 20,
  },
  {
    title: 'Genres',
    stat: 10,
  },
];

const genres = [
  {
    id: 1,
    label: 'Pop',
    value: 20,
  },
  {
    id: 2,
    label: 'Rock',
    value: 15,
  },
  {
    id: 3,
    label: 'Rap',
    value: 10,
  },
  {
    id: 4,
    label: 'Country',
    value: 5,
  },
];

const artists = [
  {
    name: 'Adele',
    songs: 10,
    albums: 2,
  },
  {
    name: 'Taylor Swift',
    songs: 5,
    albums: 1,
  },
  {
    name: 'Michael Jackson',
    songs: 2,
    albums: 1,
  },
  {
    name: 'Eminem',
    songs: 1,
    albums: 1,
  },
];

const albums = [
  {
    id: 1,
    label: '21',
    value: 10,
  },
  {
    id: 2,
    label: '1989',
    value: 5,
  },
  {
    id: 3,
    label: 'Thriller',
    value: 2,
  },
  {
    id: 4,
    label: 'Recovery',
    value: 1,
  },
];

export const initialState: StatsPageState = {
  mainStats: data,
  genresStat: genres,
  albumsStat: albums,
  artists: artists,
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
  artistsCount: 40,
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
      state.artists = action.payload;
      state.isArtistsLoading = false;
      state.isArtistsLoaded = true;
      state.artistsCount = action.payload.length;
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
  },
});
export const { actions: statsPageActions } = slice;

export const useStatsPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: StatsPageSaga });
  return { actions: slice.actions };
};
