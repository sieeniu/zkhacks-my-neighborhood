import { ReactElement } from 'react';
import styled from 'styled-components';

import { Button } from '@/components';
import { Heading } from '@/components/Heading';
import { AppLayout } from '@/layouts';
import { ResolutionList } from '@/modules/voting';
import { NextPageWithLayout } from '@/pages/_app';

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const VotingPage: NextPageWithLayout = () => {
  return (
    <>
      <HeadingWrapper>
        <Heading>Voting list</Heading>
      </HeadingWrapper>
      <ResolutionList />
    </>
  );
};

VotingPage.getLayout = function (page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default VotingPage;
