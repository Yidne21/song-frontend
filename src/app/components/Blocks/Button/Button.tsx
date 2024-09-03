import styled from 'styled-components';
import {
  border,
  borderRadius,
  boxShadow,
  color,
  compose,
  fontSize,
  fontWeight,
  layout,
  opacity,
  position,
  shadow,
  space,
  size,
  textAlign,
  flexbox,
  background,
  lineHeight,
} from 'styled-system';
import { ButtonProps } from './types';

export const Button = styled.button<ButtonProps>`
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${compose(
    lineHeight,
    space,
    size,
    shadow,
    layout,
    fontSize,
    fontWeight,
    borderRadius,
    color,
    textAlign,
    fontWeight,
    boxShadow,
    position,
    border,
    opacity,
    flexbox,
    background,
  )};
`;

Button.defaultProps = {
  borderRadius: '8px',
};
