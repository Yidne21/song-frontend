import { SpaceProps, LayoutProps, TypographyProps } from 'styled-system';

export interface HeaderProps
    extends SpaceProps,
    LayoutProps,
    TypographyProps {
    loggedIn: boolean;
    onLogout: () => void
}
