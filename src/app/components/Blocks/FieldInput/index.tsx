import styled from 'styled-components';
import { FieldInputProp } from './types';
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
  color,
} from 'styled-system';
import { theme } from '../../../../styles/theme';
import { Field } from 'formik';

export const FieldInput = styled(Field)<FieldInputProp>`
  border: none;
  outline: none;
  resize: none;
  font-size: ${theme.fontSizes[1]};
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
    color,
  )}
`;
