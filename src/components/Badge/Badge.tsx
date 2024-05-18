import { FunctionComponent, SVGAttributes } from 'react';

import { BadgeVariant } from '@/types';

import { BadgeText, BadgeWrapper } from './Badge.styles';

type BadgeProps = {
  Icon?: FunctionComponent<SVGAttributes<SVGElement>>;
  value: string;
  variant?: BadgeVariant;
};

export const Badge = ({ variant, Icon, value }: BadgeProps) => {
  return (
    <BadgeWrapper $variant={variant}>
      {!!Icon && <Icon />}
      <BadgeText>{value}</BadgeText>
    </BadgeWrapper>
  );
};
