import { ReactElement } from 'react';
import styled from 'styled-components';

import { Button, Heading } from '@/components';
import { AppLayout } from '@/layouts';
import { IniciativeList } from '@/modules/iniciatives/components/IniciativeList';
import { NextPageWithLayout } from '@/pages/_app';

const HeadingWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

const IniciativesPage: NextPageWithLayout = () => {
  return (
    <>
      <HeadingWrapper>
        <Heading>Iniciative list</Heading>
        <Button>Create iniciative</Button>
      </HeadingWrapper>
      <IniciativeList />
    </>
  );
};

IniciativesPage.getLayout = function (page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default IniciativesPage;
