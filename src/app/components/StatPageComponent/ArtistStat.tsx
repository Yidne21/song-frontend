import React from 'react';
import { ArtistStatProps } from './types';
import { Flex, Text } from 'app/components/Blocks';
import { FaMusic, FaCompactDisc } from 'react-icons/fa';

function ArtistStat(props: ArtistStatProps) {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      width="100%"
    >
      <Text color="black" fontSize="24px" padding={6} textAlign="center">
        Artists
      </Text>
      {props.stat.map((artist, index) => (
        <Flex
          alignItems="center"
          backgroundColor="white"
          border="1px solid #e5e5e5"
          borderRadius="12px"
          flexDirection="row"
          gap={4}
          justifyContent="space-between"
          key={index}
          mb={2}
          padding="20px"
          width="80%"
        >
          <Text color="#333" fontSize="24px" fontWeight="bold">
            {artist.name}
          </Text>

          <Flex alignItems="center" gap={4}>
            <Flex alignItems="center" gap={1}>
              <FaMusic color="#0073e6" />
              <Text color="#0073e6" fontSize="18px" fontWeight="medium">
                {artist.songs} Songs
              </Text>
            </Flex>

            <Flex alignItems="center" gap={1}>
              <FaCompactDisc color="#ff6600" />
              <Text color="#ff6600" fontSize="18px" fontWeight="medium">
                {artist.albums} Albums
              </Text>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default ArtistStat;
