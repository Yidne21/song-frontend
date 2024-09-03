import styled from 'styled-components';
import { Box } from './Box';
import { flexbox, compose, flex, layout, system, typography } from 'styled-system';
import { FlexProps } from './types';

const gap = system({
  gap: {
    property: 'gap',
    scale: 'space',
  },
});

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${compose(flexbox, flex, gap, layout, typography)};
`;
