import React, { useEffect, useState } from 'react';
import ManageSong from 'app/components/ManageSong/ManageSong';
import { useManageSongPageSlice } from './slices';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCount,
  selectlimit,
  selectSkip,
  selectSongs,
} from './slices/selector';

function ManageSongPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const { actions } = useManageSongPageSlice();
  const dispatch = useDispatch();
  // const songs = useSelector(selectSongs);
  const count = useSelector(selectCount);
  const limit = useSelector(selectlimit);
  const skip = useSelector(selectSkip);

  const songs = [
    {
      title: 'Hello',
      artist: 'Adele',
      album: '21',
      genre: 'classical',
      _id: '1',
    },
    {
      title: 'Shake It Off',
      artist: 'Taylor Swift',
      album: '1989',
      genre: 'classical',
      _id: '2',
    },
    {
      title: 'Billie Jean',
      artist: 'Michael Jackson',
      album: 'Thriller',
      genre: 'classical',
      _id: '3',
    },
    {
      title: 'Not Afraid',
      artist: 'Eminem',
      album: 'Recovery',
      genre: 'classical',
      _id: '4',
    },
  ];

  useEffect(() => {
    dispatch(actions.getAllSongs({ skip, limit, search, filter }));
  }, [skip, limit, search, filter]);

  return (
    <>
      <ManageSong setFilter={setFilter} setSearch={setSearch} songs={songs} />
    </>
  );
}

export default ManageSongPage;
