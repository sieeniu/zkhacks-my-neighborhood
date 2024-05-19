import { Card } from '@/components';

import { Iniciative } from '../../types';
import { iniciativeStatusMap } from '../../utils';
import { ResolutionDetailsWrapper } from './IniciativeDetails.styles';

type VoteDetailsProps = {
  iniciative: Iniciative;
};

export const IniciativeDetails = ({ iniciative }: VoteDetailsProps) => {
  return (
    <ResolutionDetailsWrapper>
      <Card
        id={iniciative.id}
        title={`${iniciative.title}`}
        subtitle={iniciative.title}
        description={iniciative.content}
        status={{
          label: iniciativeStatusMap[iniciative.status].label,
          variant: iniciativeStatusMap[iniciative.status].variant,
          icon: iniciativeStatusMap[iniciative.status].icon,
        }}
        createdAt={iniciative.createdAt}
      />
    </ResolutionDetailsWrapper>
  );
};
