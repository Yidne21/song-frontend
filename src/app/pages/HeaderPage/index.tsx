import { Box } from '../../components/Blocks';
import { Header } from '../../components/Header';
import { IDefaultProps } from './types';

export const DefaultLayout = (props: IDefaultProps) => {
  return (
    <>
      <Header />
      <Box maxWidth={'1536'} minHeight="50vh" mx={'auto'} my={50}>
        {props.children}
      </Box>
    </>
  );
};
