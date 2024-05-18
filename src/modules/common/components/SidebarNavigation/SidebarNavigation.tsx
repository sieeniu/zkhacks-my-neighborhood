import Link from 'next/link';
import { useRouter } from 'next/router';

import { NavLink } from '../../types';
import { isRouteActive } from '../../utils';
import { AppLogo } from '../AppLogo';
import {
  NavigationList,
  NavigationListItem,
  SidebarWrapper,
} from './SidebarNavigation.styles';

type SidebarNavigationProps = {
  navLinks: NavLink[];
};

export const SidebarNavigation = ({ navLinks }: SidebarNavigationProps) => {
  const { pathname } = useRouter();

  return (
    <SidebarWrapper>
      <AppLogo />

      <NavigationList>
        {navLinks.map(({ id, href, Icon, label }) => (
          <Link href={href} key={id}>
            <NavigationListItem $isActive={isRouteActive(pathname, href)}>
              <Icon />
              <span>{label}</span>
            </NavigationListItem>
          </Link>
        ))}
      </NavigationList>
    </SidebarWrapper>
  );
};
