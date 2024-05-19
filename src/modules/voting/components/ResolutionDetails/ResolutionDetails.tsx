import { Button, Card, ThumbsdownIcon, ThumbsupIcon } from '@/components';

import { Resolution } from '../../types';
import {
  ResolutionAside,
  ResolutionDetailsWrapper,
  ResolutionStats,
  ResolutionVote,
} from './ResolutionDetails.styles';

type VoteDetailsProps = {
  resolution: Resolution;
};

export const ResolutionDetails = ({ resolution }: VoteDetailsProps) => {
  return (
    <ResolutionDetailsWrapper>
      <Card
        id={resolution.id}
        title={`Resolution No. ${resolution.resolutionNumber}`}
        subtitle={resolution.title}
        description={resolution.content}
        status={{
          label: 'Ongoing',
        }}
        createdAt={resolution.createdAt}
      />
      <ResolutionAside>
        <ResolutionVote>
          <Button Icon={ThumbsupIcon} variant="success">
            <span>Vote for</span>
          </Button>
          <Button Icon={ThumbsdownIcon} variant="danger">
            <span>Vote against</span>
          </Button>
        </ResolutionVote>
      </ResolutionAside>
    </ResolutionDetailsWrapper>
  );
};
