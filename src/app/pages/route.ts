import { routesType } from './types';
import Stats from './StatsPage';
import AddNewSong from './AddNewSong';
import {EditSongPage} from './EditSongPage';
import ManageSongPage from './ManageSong';

export const routes: routesType[] = [
  {
    component: Stats,
    path: '/',
    protectedRoute: false,
  },
  {
    component: AddNewSong,
    path: '/add',
    protectedRoute: false,
  },
  {
    component: EditSongPage,
    path: '/edit/:songId',
    protectedRoute: false,
  },
  {
    component: ManageSongPage,
    path: '/manage',
    protectedRoute: false,
  }
];
