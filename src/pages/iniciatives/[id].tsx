import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import { AppLayout } from '@/layouts';
import { IniciativeDetails, iniciativesList } from '@/modules/iniciatives';
import { NextPageWithLayout } from '@/pages/_app';

const IniciativePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const data = iniciativesList.find(iniciative => iniciative.id === id);

  if (!data) {
    return <span>Loading...</span>;
  }

  return <IniciativeDetails iniciative={data}></IniciativeDetails>;
};

IniciativePage.getLayout = function (page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default IniciativePage;
