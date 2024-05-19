import Link from 'next/link';

import { Card, VoteIcon } from '@/components';
import { routes } from '@/routes';

import { resolutionList } from '../../mocks';
import { VoteListWrapper } from './ResolutionList.styles';

export const ResolutionList = () => {
  return (
    <VoteListWrapper>
      {resolutionList.map(({ id, resolutionNumber, title }) => (
        <Link key={id} href={routes.getVote(id)}>
          <Card
            key={id}
            id={id}
            title={`Resolution No. ${resolutionNumber}`}
            description={title}
            status={{
              label: 'Ongoing',
              icon: VoteIcon,
            }}
          />
        </Link>
      ))}
    </VoteListWrapper>
  );
};
