import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box } from '../Blocks';

function SongList() {
  return (
    <Box>
      <Skeleton height={118} variant="rectangular" width={210} />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </Box>
  );
}

export default SongList;
