import styled from 'styled-components';
import { SelectorProps } from './types';
import { theme } from '../../../../styles/theme';
import {
  compose,
  space,
  layout,
  border,
  borderRadius,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  boxShadow,
  flexbox,
  background,
} from 'styled-system';
import { Field } from 'formik';

export const Selector = styled(Field)<SelectorProps>`
  width: ${theme.sizes[26]};
  border-radius: ${theme.radii[1]};
  padding: ${theme.space[2]} ${theme.space[1]};
  font-size: ${theme.fontSizes[1]};
  border: none;
  outline: none;

  ${compose(
    space,
    layout,
    border,
    borderRadius,
    fontSize,
    fontWeight,
    fontFamily,
    lineHeight,
    boxShadow,
    flexbox,
    background,
  )}
`;
