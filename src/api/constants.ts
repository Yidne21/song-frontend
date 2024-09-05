type apiRouteType = {
  createSong: string;
  updateSong: string;
  deleteSong: string;
  listSong: string;
  getMainStats: string;
  getArtists: string;
  getGenreStats: string;
  getAlbumsStats: string;
}
const apiRoute: apiRouteType = {
  createSong: '/song/createSong',
  updateSong: '/song/updateSong',
  deleteSong: '/song/deleteSong',
  listSong: '/song/list',
  getMainStats: '/stats/main',
  getArtists: '/stats/artists',
  getGenreStats: '/stats/genres',
  getAlbumsStats: '/stats/albums',
};

export default apiRoute;
