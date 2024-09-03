import {
  FlexboxProps,
  SpaceProps,
  ColorProps,
  LayoutProps,
  GridProps,
  BackgroundProps,
  BorderProps,
  BorderRadiusProps,
  PositionProps,
  ShadowProps,
  ResponsiveValue,
  FontFamilyProps,
  FontSizeProps,
  FontWeightProps,
} from 'styled-system';

// Box Props
export interface BoxProps
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    GridProps,
    BackgroundProps,
    BorderProps,
    BorderRadiusProps,
    PositionProps,
    FlexboxProps,
    FontFamilyProps,
    FontSizeProps,
    FontWeightProps,
    ShadowProps {
  hoverBgColor?: string;
  hoverColor?: string;
  activeBgColor?: string;
  activeColor?: string;
  hoverStyles?: string;
  activeStyles?: string;
    }

// Flex Props
export interface FlexProps extends FlexboxProps {
  gap?:ResponsiveValue<number | string>
}

