import { FunctionComponent, SVGAttributes } from 'react';

import { Badge } from '../Badge';
import { CardDescription, CardTitle, CardWrapper } from './Card.styles';

type CardProps = {
  id: string;
  title: string;
  descriptions: string;
  status?: {
    icon?: FunctionComponent<SVGAttributes<SVGElement>>;
    label: string;
  };
};

export const Card = ({ id, title, descriptions, status }: CardProps) => {
  return (
    <CardWrapper>
      {status && <Badge Icon={status?.icon} value={status.label} />}
      <CardTitle>{title}</CardTitle>
      <CardDescription>{descriptions}</CardDescription>
    </CardWrapper>
  );
};
