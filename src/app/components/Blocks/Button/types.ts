import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  BackgroundProps,
  BorderProps,
  BorderRadiusProps,
  PositionProps,
  ShadowProps,
  BoxShadowProps,
  FontSizeProps,
  FontWeightProps,
  OpacityProps,
  SizeProps,
  TextAlignProps,
  FlexboxProps,
  LineHeightProps,
} from 'styled-system';
export interface ButtonProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    LineHeightProps,
    BackgroundProps,
    BorderProps,
    BorderRadiusProps,
    PositionProps,
    ShadowProps,
    BoxShadowProps,
    FontSizeProps,
    FontWeightProps,
    OpacityProps,
    SizeProps,
    TextAlignProps,
    FlexboxProps {
   onClick:() => void;
}
