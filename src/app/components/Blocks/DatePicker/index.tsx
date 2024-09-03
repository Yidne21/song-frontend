import styled from 'styled-components';
import { DatePickerProps } from './type';
import {
  compose,
  border,
  borderRadius,
  color,
  fontSize,
  fontWeight,
  layout,
  space,
  fontFamily,
  boxShadow,
  flexbox,
} from 'styled-system';
import { theme } from '../../../../styles/theme';
import { Field } from 'formik';

export const DatePicker = styled(Field)<DatePickerProps>`
  border: 1.5px solid ${theme.colors.black[3]};
  padding: ${theme.space[1]} ${theme.space[1]};
  font-size: ${theme.fontSizes[1]};
  border-radius: 8px;

  &:focus {
    outline: none;
    border-color: ${theme.colors.black[3]};
    border-width: 2px;
  }

  ${compose(
    compose,
    border,
    borderRadius,
    color,
    fontSize,
    fontWeight,
    layout,
    space,
    fontFamily,
    boxShadow,
    flexbox,
  )}
`;
