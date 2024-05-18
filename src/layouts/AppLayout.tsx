import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { SidebarNavigation, Topbar, useNavigation } from '@/modules/common';

const Main = styled.main`
  display: flex;
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PageContent = styled.div`
    padding: 30px;`;

export const AppLayout = ({ children }: PropsWithChildren) => {
  const { navLinks } = useNavigation();
  return (
    <Main>
      <SidebarNavigation navLinks={navLinks} />
      <PageContainer>
        <Topbar />
        <PageContent>{children}</PageContent>
      </PageContainer>
    </Main>
  );
};
