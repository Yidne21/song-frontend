type apiRouteType = {
  createSong: string;
  updateSong: string;
  deleteSong: string;
  listSong: string;
  getMainStats: string;
  getArtists: string;
  getGenreStats: string;
  getAlbumsStats: string;
};
const apiRoute: apiRouteType = {
  createSong: '/song',
  updateSong: '/song/',
  deleteSong: '/song',
  listSong: '/song',
  getMainStats: '/song/stats/main',
  getArtists: '/song/stats/artists',
  getGenreStats: '/song/stats/genres',
  getAlbumsStats: '/song/stats/albums',
};

export default apiRoute;
