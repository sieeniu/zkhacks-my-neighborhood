import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { AppLayout } from '@/layouts';
import { ResolutionDetails, resolutionList } from '@/modules/voting';
import { NextPageWithLayout } from '@/pages/_app';

const VotingPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const data = resolutionList.find(resolution => resolution.id === id);

  if (!data) {
    return <span>Loading...</span>;
  }

  return <ResolutionDetails resolution={data}></ResolutionDetails>;
};

VotingPage.getLayout = function (page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default VotingPage;
