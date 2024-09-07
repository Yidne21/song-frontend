import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state?.statsPage || initialState;

export const selectMainStats = createSelector(
  [selectSlice],
  state => state.mainStats,
);

export const selectGenresStat = createSelector(
  [selectSlice],
  state => state.genresStat,
);

export const selectAlbumsStat = createSelector(
  [selectSlice],
  state => state.albumsStat,
);

export const selectArtists = createSelector(
  [selectSlice],
  state => state.artists,
);

export const selectIsMainStatLoading = createSelector(
  [selectSlice],
  state => state.isMainStatLoading,
);

export const selectIsMainStatLoaded = createSelector(
  [selectSlice],
  state => state.isMainStatLoaded,
);

export const selectIsGenreStatLoading = createSelector(
  [selectSlice],
  state => state.isGenreStatLoading,
);

export const selectIsGenreStatLoaded = createSelector(
  [selectSlice],
  state => state.isGenreStatLoaded,
);

export const selectIsAlbumsStatLoading = createSelector(
  [selectSlice],
  state => state.isAlbumsStatLoading,
);

export const selectIsAlbumsStatLoaded = createSelector(
  [selectSlice],
  state => state.isAlbumsStatLoaded,
);

export const selectIsArtistsLoading = createSelector(
  [selectSlice],
  state => state.isArtistsLoading,
);

export const selectIsArtistsLoaded = createSelector(
  [selectSlice],
  state => state.isArtistsLoaded,
);

export const selectErrorMsgMainStat = createSelector(
  [selectSlice],
  state => state.errorMsgMainStat,
);

export const selectErrorMsgArtists = createSelector(
  [selectSlice],
  state => state.errorMsgArtists,
);

export const selectErrorGenreStat = createSelector(
  [selectSlice],
  state => state.errorGenreStat,
);

export const selectErrorAlbumsStat = createSelector(
  [selectSlice],
  state => state.errorAlbumsStat,
);

export const selectArtistsCount = createSelector(
  [selectSlice],
  state => state.artistsCount,
);

export const selectSkip = createSelector([selectSlice], state => state.skip);

export const selectlimit = createSelector([selectSlice], state => state.limit);
