import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginationProps } from './types';

export default function CustomPagination(props: PaginationProps) {
  return (
    <Pagination
      count={props.count}
      onChange={props.handleChange}
      page={props.page}
    />
  );
}
