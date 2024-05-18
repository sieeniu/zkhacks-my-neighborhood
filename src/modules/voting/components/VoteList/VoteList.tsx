import { Card, VoteIcon } from '@/components';

import { voteList } from '../../mocks';
import { VoteListWrapper } from './VoteList.styles';

export const VoteList = () => {
  return (
    <VoteListWrapper>
      {voteList.map(({ id, resolutionNumber, title }) => (
        <Card
          key={id}
          id={id}
          title={`Resolution No. ${resolutionNumber}`}
          descriptions={title}
          status={{
            label: 'Ongoing',
            icon: VoteIcon,
          }}
        />
      ))}
    </VoteListWrapper>
  );
};
