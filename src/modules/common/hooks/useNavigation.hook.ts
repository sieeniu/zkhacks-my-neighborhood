import { HomeIcon, VoteIcon } from '@/components';
import { routes } from '@/routes';

import { NavLink } from '../types';

export const useNavigation = () => {
  const navLinks: NavLink[] = [
    {
      id: 'home',
      href: routes.home,
      Icon: HomeIcon,
      label: 'Home',
    },
    {
      id: 'voting',
      href: routes.voting,
      Icon: VoteIcon,
      label: 'Voting',
    },
  ];

  return { navLinks };
};
