import { PropsWithChildren } from 'react';

import { HeadingWrapper } from './Heading.styles';

export const Heading = ({ children }: PropsWithChildren) => {
  return <HeadingWrapper>{children}</HeadingWrapper>;
};
