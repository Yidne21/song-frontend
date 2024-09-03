type apiRouteType = {
  createSong: string;
  updateSong: string;
  deleteSong: string;
  listSong: string;

}
const apiRoute: apiRouteType = {
  createSong: '/song/createSong',
  updateSong: '/song/updateSong',
  deleteSong: '/song/deleteSong',
  listSong: '/song/list'
};

export default apiRoute;
