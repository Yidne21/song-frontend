import React from 'react';
import { Flex } from '../Blocks';
import { Skeleton } from '@mui/material';

function PieStatSkeleton() {
  return (
    <Flex
      alignItems={'center'}
      border="1px solid whitesmoke"
      borderRadius={4}
      flexDirection="column"
      gap="5px"
      justifyContent="center"
      maxWidth="400px"
      p={4}
      width="100%"
    >
      <Skeleton
        height={28}
        style={{ marginBottom: '16px' }}
        variant="text"
        width={'60%'}
      />

      <Skeleton
        height={200}
        style={{ margin: '0 auto' }}
        variant="circular"
        width={200}
      />
    </Flex>
  );
}

export default PieStatSkeleton;
