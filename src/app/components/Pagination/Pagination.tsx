import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginationProps } from './types';

export default function CustomPagination(props: PaginationProps) {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return <Pagination count={props.count} onChange={handleChange} page={page} />;
}
