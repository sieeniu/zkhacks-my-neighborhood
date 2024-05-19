import { usePathname } from 'next/navigation';

import { Breadcrumbs } from '@/components';
import { WalletId } from '@/modules/common/components/WalletId';

import { TopbarActions, TopbarWrapper } from './Topbar.styles';

type TopbarProps = {
  userWallet: string;
};

export const Topbar = ({ userWallet }: TopbarProps) => {
  const pathname = usePathname();
  const paths = pathname?.split('/')?.filter(path => path) ?? [];
  return (
    <TopbarWrapper>
      <Breadcrumbs paths={['home', ...paths]} separator={<span> / </span>} />
      <TopbarActions>

        <WalletId address={userWallet} />
      </TopbarActions>
    </TopbarWrapper>
  );
};
