import { ReactElement } from 'react';

import { AppLayout } from '@/layouts';
import { NextPageWithLayout } from '@/pages/_app';

const HomePage: NextPageWithLayout = () => {
  return <></>;
};

HomePage.getLayout = function (page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default HomePage;
