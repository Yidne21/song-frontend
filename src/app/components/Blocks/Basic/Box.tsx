import styled from 'styled-components';
import {
  space,
  color,
  layout,
  grid,
  flex,
  background,
  border,
  borderRadius,
  position,
  shadow,
  compose,
} from 'styled-system';
import { BoxProps } from './types';

export const Box = styled.div<BoxProps>`
  ${compose(
    flex,
    space,
    color,
    layout,
    grid,
    background,
    border,
    borderRadius,
    position,
    shadow,
  )}
`;
