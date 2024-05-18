import { usePathname } from 'next/navigation';

import { Breadcrumbs } from '@/components';

import { TopbarWrapper } from './Topbar.styles';

type TopbarProps = {};

export const Topbar = ({}: TopbarProps) => {
  const pathname = usePathname();

  const paths = pathname.split('/').filter(path => path);
  return (
    <TopbarWrapper>
      <Breadcrumbs paths={['home', ...paths]} separator={<span> / </span>} />
    </TopbarWrapper>
  );
};
