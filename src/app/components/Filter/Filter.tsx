import React from 'react';
import { Box, Button, Flex } from '../Blocks';
import { Form, Formik } from 'formik';
import { Text } from '../Blocks';
import { SelectInput } from '../Blocks/input/input';
import { filterBy } from 'utils/constant';
import * as Yup from 'yup';
import SearchBy from './SearchBy';
import { useManageSongPageSlice } from 'app/pages/ManageSong/slices';
import { useDispatch } from 'react-redux';
import { IFilterProps } from './types';

function Filter(props: IFilterProps) {
  const dispatch = useDispatch();
  const { actions } = useManageSongPageSlice();
  const validationSchema = Yup.object({
    filterBy: Yup.string().required('atleast one filter type is required'),
  });
  return (
    <Box
      backgroundColor={'white'}
      border={'1px solid #e5e5e5'}
      borderRadius={2}
      p={3}
      width={['100%', '700px']}
    >
      <Flex flexDirection="column">
        <Formik
          initialValues={{ filterBy: 'title', search: '' }}
          onSubmit={values => {
            dispatch(
              actions.filterSongs({
                filterBy: values.filterBy,
                search: values.search,
              }),
            );
            props.setFilter(values.filterBy);
            props.setSearch(values.search);
          }}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, values, setFieldValue }) => {
            return (
              <Form>
                <Flex
                  // alignItems="center"
                  alignItems={['flex-start', 'center']}
                  flexDirection={['column', 'row']}
                  gap="10px"
                  justifyContent="space-between"
                >
                  <Flex alignItems="center" gap="10px">
                    <Text fontSize={2} fontWeight={3}>
                      Filter By:
                    </Text>
                    <SelectInput
                      background={'white.3'}
                      border={'1px solid black'}
                      borderColor="white.7"
                      borderRadius={2}
                      fontSize={1}
                      name="filterBy"
                      onChange={e => {
                        setFieldValue('filterBy', e.target.value);
                        setFieldValue('search', '');
                      }}
                      padding={3}
                      width={'200px'}
                    >
                      {filterBy.map((filter, index) => {
                        return <option key={index}>{filter}</option>;
                      })}
                    </SelectInput>
                  </Flex>
                  <Flex alignItems="center" gap="10px">
                    <SearchBy
                      filterBy={values.filterBy}
                      onChange={value => {
                        setFieldValue('search', value);
                      }}
                      placeholder={values.filterBy}
                    />
                    <Button
                      background={'blue'}
                      borderRadius={2}
                      color="white.0"
                      fontSize={1}
                      fontWeight={3}
                      lineHeight="18px"
                      onClick={() => {
                        handleSubmit();
                      }}
                      padding={'13px 30px'}
                      type="button"
                    >
                      Search
                    </Button>
                  </Flex>
                </Flex>
              </Form>
            );
          }}
        </Formik>
      </Flex>
    </Box>
  );
}

export default Filter;
