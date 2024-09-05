import React from 'react';
import { Flex } from '../Blocks';
import SongCard from '../Card/SongCard';
import { ISongListProps } from './types';

function SongList(props: ISongListProps) {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      gap="20px"
      justifyContent="center"
      mt={5}
      width="100%"
    >
      {props.songs.map((item, index) => (
        <SongCard key={index} song={item} />
      ))}
    </Flex>
  );
}

export default SongList;
