import { ReactElement } from 'react';

import { AppLayout } from '@/layouts';
import { NextPageWithLayout } from '@/pages/_app';

const IniciativesPage: NextPageWithLayout = () => {
  return <></>;
};

IniciativesPage.getLayout = function (page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default IniciativesPage;
