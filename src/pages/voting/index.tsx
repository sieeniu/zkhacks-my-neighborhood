import { ReactElement } from 'react';

import { AppLayout } from '@/layouts';
import { VoteList } from '@/modules/voting';
import { NextPageWithLayout } from '@/pages/_app';

const VotingPage: NextPageWithLayout = () => {
  return (
    <>
      <VoteList />
    </>
  );
};

VotingPage.getLayout = function (page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default VotingPage;
