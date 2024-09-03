import { theme } from 'styles/theme';
import { InputProps, TextAreaProps, InputFileProps } from './types';
import styled from 'styled-components';
import {
  borderColor,
  compose,
  border,
  borderRadius,
  color,
  fontSize,
  fontWeight,
  layout,
  space,
  lineHeight,
  fontFamily,
  boxShadow,
  flexbox,
  background,
} from 'styled-system';
import { Field } from 'formik';

export const Input = styled.input<InputProps>`
  border: none;
  outline: none;

  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary[2]};
  }

  /* from styled-system */
  ${compose(
    border,
    borderRadius,
    color,
    fontSize,
    fontWeight,
    layout,
    space,
    lineHeight,
    fontFamily,
    boxShadow,
    flexbox,
    background,
    borderColor,
  )}
`;
export const TextAreaInput = styled(Field)<TextAreaProps>`
  color: ${theme.colors.black[5]};
  background-color: ${theme.colors.white[5]};
  border: 1.5px solid ${theme.colors.black[3]};
  border-radius: 8px;
  font-size: ${theme.fontSizes[1]};
  border: none;
  outline: none;
  resize: none;
  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary[2]};
    border-width: 2px;
  }

  ${compose(
    background,
    border,
    borderRadius,
    color,
    fontSize,
    fontWeight,
    layout,
    space,
    lineHeight,
    fontFamily,
    boxShadow,
    flexbox,
  )}
`;
export const FileInput = styled.input<InputFileProps>`
  color: ${theme.colors.black};
  ::file-selector-button {
    font-weight: bold;
    color: black.2;
    padding: 0.6em;
    border: thin solid grey;
    border-radius: 8px;
  }

  ${compose(
    border,
    borderRadius,
    color,
    fontSize,
    fontWeight,
    layout,
    space,
    lineHeight,
    fontFamily,
    boxShadow,
    flexbox,
  )}
`;

export const SelectInput = styled.select<InputProps>`
  outline: none;
  appearance: none;
  /* border: none; */

  ${compose(
    border,
    borderRadius,
    color,
    fontSize,
    fontWeight,
    layout,
    space,
    lineHeight,
    fontFamily,
    boxShadow,
    flexbox,
    background,
    borderColor,
  )}
`;
