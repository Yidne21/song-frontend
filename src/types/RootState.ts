import { AddSongPageState } from 'app/pages/AddNewSong/Slice/types';
import { EditSongPageState } from 'app/pages/EditSongPage/slice/types';
import { ManageSongPageState } from 'app/pages/ManageSong/slices/types';


export interface RootState {
  addsongPage?: AddSongPageState;
  managesongspage?: ManageSongPageState;
  editsongspage?: EditSongPageState;
}
