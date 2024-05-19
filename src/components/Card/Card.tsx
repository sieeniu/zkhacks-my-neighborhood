import { FunctionComponent, SVGAttributes } from 'react';

import { BadgeVariant } from '@/types';
import { dateFormat } from '@/utils/dateFormat';

import { Badge } from '../Badge';
import { CreatedAtIcon } from '../Icons';
import {
  CardCreatedAt,
  CardDescription,
  CardSubtitle,
  CardTitle,
  CardWrapper,
} from './Card.styles';

type CardProps = {
  id?: string;
  title: string;
  subtitle?: string;
  description?: string;
  status?: {
    icon?: FunctionComponent<SVGAttributes<SVGElement>>;
    label: string;
    variant?: BadgeVariant;
  };
  createdAt?: string;
};

export const Card = ({
  title,
  subtitle,
  description,
  status,
  createdAt,
}: CardProps) => {
  return (
    <CardWrapper>
      {status && (
        <Badge
          variant={status.variant}
          Icon={status?.icon}
          value={status.label}
        />
      )}
      <CardTitle>{title}</CardTitle>
      {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      {createdAt && (
        <CardCreatedAt>
          <CreatedAtIcon />
          {dateFormat(createdAt)}
        </CardCreatedAt>
      )}
      {description && <CardDescription>{description}</CardDescription>}
    </CardWrapper>
  );
};
