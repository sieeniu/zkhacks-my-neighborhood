import Link from 'next/link';

import { Card } from '@/components';
import { routes } from '@/routes';

import { iniciativesList } from '../../mocks';
import { iniciativeStatusMap } from '../../utils';
import { IniciativeListWrapper } from './IniciativeList.styles';

export const IniciativeList = () => {
  return (
    <IniciativeListWrapper>
      {iniciativesList.map(({ id, title, status, content }) => (
        <Link key={id} href={routes.getIniciative(id)}>
          <Card
            key={id}
            id={id}
            title={title}
            description={content}
            status={{
              label: iniciativeStatusMap[status].label,
              variant: iniciativeStatusMap[status].variant,
              icon: iniciativeStatusMap[status].icon,
            }}
          />
        </Link>
      ))}
    </IniciativeListWrapper>
  );
};
