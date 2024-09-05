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
  const songs = useSelector(selectSongs);
  const count = useSelector(selectCount);
  const limit = useSelector(selectlimit);
  const skip = useSelector(selectSkip);

  useEffect(() => {
    dispatch(actions.getAllSongs({ skip, limit, search, filter }));
  }, [skip, limit, search, filter]);

  return (
    <>
      {songs && (
        <ManageSong
          count={count}
          setFilter={setFilter}
          setSearch={setSearch}
          songs={songs}
        />
      )}
    </>
  );
}

export default ManageSongPage;
