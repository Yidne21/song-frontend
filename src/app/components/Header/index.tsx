import { Flex } from '../Blocks';
import { theme } from '../../../styles/theme';
import { Link } from 'react-router-dom';
import { Text } from '../Blocks/Text/Text';

export const Header = () => {
  return (
    <Flex
      alignItems={'start'}
      backgroundColor={theme.colors.white[6]}
      color={theme.colors.black[2]}
      fontFamily={'Roboto'}
      fontSize={['14px', '16px', '18px']}
      pl={[4, 5, 6, 7]}
      py={[3, 4, 4]}
    >
      <Link to="/">
        <Text color={'black.1'}>MusicK</Text>
      </Link>
      <Flex
        alignItems={'center'}
        gap={[3, 4, 5]}
        justifyContent={'end'}
        pr={[6, 7, 8]}
        width={'100%'}
      >
        <Link to="/manage">
          <Text color={'black.1'}>Manage Song</Text>
        </Link>
      </Flex>
    </Flex>
  );
};
