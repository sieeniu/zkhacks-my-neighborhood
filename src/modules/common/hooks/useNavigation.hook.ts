import {
  ComplaintsIcon,
  HomeIcon,
  LightBulbIcon,
  VoteIcon,
} from '@/components';
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
    {
      id: 'iniciatives',
      href: routes.iniciatives,
      Icon: LightBulbIcon,
      label: 'Iniciatives',
    },
    {
      id: 'complaints',
      href: routes.complaints,
      Icon: ComplaintsIcon,
      label: 'Complaints',
    },
  ];

  return { navLinks };
};
