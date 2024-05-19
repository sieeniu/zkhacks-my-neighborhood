import { WalletIcon } from '@/components';

import { WalletIdWrapper } from './WalletId.styles';

type WalletIdProps = {
  address: string;
};

export const WalletId = ({ address }: WalletIdProps) => {
  return (
    <WalletIdWrapper>
      <WalletIcon />
      <span>{address}</span>
    </WalletIdWrapper>
  );
};
