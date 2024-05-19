import { FunctionComponent, SVGAttributes } from 'react';

import { ThumbsdownIcon, ThumbsupIcon } from '@/components';
import { IniciativeStatus } from '@/modules/iniciatives';
import { BadgeVariant } from '@/types';

export const iniciativeStatusMap: Record<
  IniciativeStatus,
  {
    variant: BadgeVariant;
    icon?: FunctionComponent<SVGAttributes<SVGElement>>;
  }
> = {
  sent: {
    variant: 'primary',
  },
  approved: {
    icon: ThumbsupIcon,
    variant: 'success',
  },
  rejected: {
    icon: ThumbsdownIcon,
    variant: 'danger',
  },
};
