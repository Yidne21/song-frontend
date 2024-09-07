import React, { useEffect, useState } from 'react';
import ManageSong from 'app/components/ManageSong/ManageSong';
import { useManageSongPageSlice } from './slices';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCount,
  selectlimit,
  selectSkip,
  selectIsDeleted,
} from './slices/selector';
import { Flex } from 'app/components/Blocks';

function ManageSongPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const { actions } = useManageSongPageSlice();
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const limit = useSelector(selectlimit);
  const skip = useSelector(selectSkip);
  const isDeleted = useSelector(selectIsDeleted);

  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(actions.setSkip(value));
    setPage(value);
  };

  useEffect(() => {
    dispatch(actions.getAllSongs({ skip, limit, search, filter }));
  }, [skip, limit, search, filter, isDeleted, page]);

  return (
    <Flex flexDirection="column" pt={6} width={'100%'}>
      <ManageSong
        count={count}
        handleChange={handleChange}
        page={page}
        setFilter={setFilter}
        setSearch={setSearch}
      />
    </Flex>
  );
}

export default ManageSongPage;
