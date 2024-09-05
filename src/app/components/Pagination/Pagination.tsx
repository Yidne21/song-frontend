import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginationProps } from './types';
import { useManageSongPageSlice } from 'app/pages/ManageSong/slices';
import { useDispatch } from 'react-redux';

export default function CustomPagination(props: PaginationProps) {
  const { actions } = useManageSongPageSlice();
  const dispatch = useDispatch();
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(actions.setSkip(value));
    setPage(value);
  };
  return <Pagination count={props.count} onChange={handleChange} page={page} />;
}
