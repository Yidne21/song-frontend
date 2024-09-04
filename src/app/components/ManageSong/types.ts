import { ISong } from 'app/pages/EditSongPage/slice/types';

export interface IManageSongProps {
  songs: ISong[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;  
}