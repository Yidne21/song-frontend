export interface IMainStat {
  title: string;
  stat: number;
}

export interface IPiesStat {
  id: number;
  label: string;
  value: number;
}

export interface IArtist {
  name: string;
  songs: number;
  albums: number;
}

export type StatsPageState = {
  mainStats: IMainStat[];
  genresStat: IPiesStat[];
  albumsStat: IPiesStat[];
  artists: IArtist[];
  isMainStatLoading: boolean;
  isMainStatLoaded: boolean;
  isGenreStatLoading: boolean;
  isGenreStatLoaded: boolean;
  isAlbumsStatLoading: boolean;
  isAlbumsStatLoaded: boolean;
  isArtistsLoading: boolean;
  isArtistsLoaded: boolean;
  errorMsgMainStat: string;
  errorGenreStat: string;
  errorAlbumsStat: string;
  errorMsgArtists: string;
  artistsCount: number;
  skip: number;
  limit: number;
};
