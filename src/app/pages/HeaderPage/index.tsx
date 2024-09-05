import { Box } from '../../components/Blocks';
import { Header } from '../../components/Header';
import { IDefaultProps } from './types';
import { useDefaultLayoutSlice } from './slices';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const DefaultLayout = (props: IDefaultProps) => {
  const { actions } = useDefaultLayoutSlice();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      dispatch(actions.loginWithAccessToken());
    }
  }, []);

  return (
    <>
      <Header />
      <Box maxWidth={'1536'} minHeight="50vh" mx={'auto'} my={50}>
        {props.children}
      </Box>
    </>
  );
};
