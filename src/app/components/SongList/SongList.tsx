import React from 'react';
import { Flex } from '../Blocks';
import SongCard from '../Card/SongCard';
import CustomePagination from '../Pagination/Pagination';

function SongList() {
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
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      gap="20px"
      justifyContent="center"
      mt={5}
      width="100%"
    >
      {songs.map((item, index) => (
        <SongCard key={index} song={item} />
      ))}
      <CustomePagination
        count={40}
        onChange={() => console.log('page changed')}
        page={4}
      />
    </Flex>
  );
}

export default SongList;
