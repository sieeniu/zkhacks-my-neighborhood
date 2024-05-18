import { FunctionComponent, SVGAttributes } from 'react';

export type NavLink = {
  id: string;
  href: string;
  Icon: FunctionComponent<SVGAttributes<SVGElement>>;
  label: string;
};
