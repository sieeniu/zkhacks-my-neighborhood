import Link from 'next/link';
import { ReactNode } from 'react';

import { BreadcrumbsList, BreadcrumbsListElement } from './Breadcrumbs.styles';

type BreadcrumbsProps = {
  paths: string[];
  separator: ReactNode;
};

export const Breadcrumbs = ({ paths, separator }: BreadcrumbsProps) => {
  return (
    <BreadcrumbsList>
      {paths.map((path, index) => {
        const href = `/${paths.slice(1, index + 1).join('/')}`;
        return (
          <>
            <Link href={href} key={path}>
              <BreadcrumbsListElement>{path}</BreadcrumbsListElement>
            </Link>
            {paths.length !== index + 1 && separator}
          </>
        );
      })}
    </BreadcrumbsList>
  );
};
