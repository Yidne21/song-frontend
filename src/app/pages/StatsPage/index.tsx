import React from 'react';
import { H4 } from '../../components/Blocks/Text/Text';
import MainStat from 'app/components/StatPageComponent/MainStat';
import PieStat from 'app/components/StatPageComponent/PieStat';
import ArtistStat from 'app/components/StatPageComponent/ArtistStat';
import { Flex } from 'app/components/Blocks';

function Stats() {
  const data = [
    {
      title: 'Songs',
      stat: 100,
    },
    {
      title: 'Artists',
      stat: 50,
    },
    {
      title: 'Albums',
      stat: 20,
    },
    {
      title: 'Genres',
      stat: 10,
    },
  ];

  const genres = [
    {
      id: 1,
      label: 'Pop',
      value: 20,
    },
    {
      id: 2,
      label: 'Rock',
      value: 15,
    },
    {
      id: 3,
      label: 'Rap',
      value: 10,
    },
    {
      id: 4,
      label: 'Country',
      value: 5,
    },
  ];

  const artists = [
    {
      name: 'Adele',
      songs: 10,
      albums: 2,
    },
    {
      name: 'Taylor Swift',
      songs: 5,
      albums: 1,
    },
    {
      name: 'Michael Jackson',
      songs: 2,
      albums: 1,
    },
    {
      name: 'Eminem',
      songs: 1,
      albums: 1,
    },
  ];

  const albums = [
    {
      id: 1,
      label: '21',
      value: 10,
    },
    {
      id: 2,
      label: '1989',
      value: 5,
    },
    {
      id: 3,
      label: 'Thriller',
      value: 2,
    },
    {
      id: 4,
      label: 'Recovery',
      value: 1,
    },
  ];

  return (
    <Flex flexDirection={'column'}>
      <H4
        color="black"
        fontFamily="sans-serif"
        fontSize="24px"
        lineHeight="1.5"
        pt={6}
        textAlign="center"
      >
        Well Come
      </H4>
      <MainStat stat={data} />
      <Flex alignItems={'center'} gap={'10px'} justifyContent={'center'} p={6}>
        <PieStat stat={genres} title="Number of Songs per Genres" />
        <PieStat stat={albums} title="Number of Songs per Albums" />
      </Flex>
      <ArtistStat stat={artists} />
    </Flex>
  );
}

export default Stats;
