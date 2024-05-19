import { FunctionComponent, SVGAttributes } from 'react';

import { ThumbsdownIcon, ThumbsupIcon } from '@/components';
import { IniciativeStatus } from '@/modules/iniciatives';
import { BadgeVariant } from '@/types';

export const iniciativeStatusMap: Record<
  IniciativeStatus,
  {
    variant: BadgeVariant;
    icon?: FunctionComponent<SVGAttributes<SVGElement>>;
    label: string;
  }
> = {
  sent: {
    variant: 'primary',
    label: 'Sent',
  },
  approved: {
    icon: ThumbsupIcon,
    variant: 'success',
    label: 'Approved',
  },
  rejected: {
    icon: ThumbsdownIcon,
    variant: 'danger',
    label: 'Rejected',
  },
};
