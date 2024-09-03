import React from 'react';
import { Box, Flex } from '../Blocks';
import { Text } from '../Blocks/Text/Text';
import { SongCardProps } from './types';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';

function SongCard(props: SongCardProps) {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/edit/${props.song._id}`);
  };

  const handleDelete = () => {
    console.log('Delete', props.song._id);
  };

  return (
    <Flex
      alignItems={'center'}
      backgroundColor="white"
      border={'1px solid #e5e5e5'}
      borderRadius={12}
      flexDirection="row"
      gap={3}
      height={'100%'}
      hoverBgColor="whitesmoke"
      justifyContent="space-between"
      width="100%"
    >
      <Flex
        alignItems={'center'}
        flexDirection="row"
        gap={2}
        justifyContent="space-between"
        p={4}
      >
        <Text fontSize={'20px'}>{props.song.title}</Text>
        <Text color="black" fontSize={1} fontWeight="normal">
          By: {props.song.artist}
        </Text>
        <Text color="black" fontSize={1} fontWeight="normal">
          Album: {props.song.album}
        </Text>
        <Text color="black" fontSize={1} fontWeight="normal">
          Genre: {props.song.genre}
        </Text>
      </Flex>
      <Flex
        alignItems="center"
        display="flex"
        gap={2}
        justifyContent="center"
        padding={5}
      >
        <Box borderRadius={'5px'} hoverStyles={'border: 1px solid blue;'}>
          <PlayCircleOutlineOutlinedIcon
            color="primary"
            fontSize="large"
            sx={{
              cursor: 'pointer',
              width: '24px',
              height: '24px',
              '&:hover': { color: 'blue', transition: '0.3s' },
            }}
          />
        </Box>
        <Box borderRadius={'5px'} hoverStyles={'border: 1px solid blue;'}>
          <ModeEditOutlineOutlinedIcon
            color="info"
            fontSize="large"
            onClick={handleEdit}
            sx={{
              cursor: 'pointer',
              width: '24px',
              height: '24px',
              '&:hover': { color: 'blue', transition: '0.3s' },
            }}
          />
        </Box>

        <Box borderRadius={'5px'} hoverStyles={'border: 1px solid red;'}>
          <DeleteOutlineOutlinedIcon
            color="error"
            fontSize="large"
            onClick={handleDelete}
            sx={{
              cursor: 'pointer',
              width: '24px',
              height: '24px',
              '&:hover': {
                color: 'red',
                transition: '0.3s',
              },
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default SongCard;
