import { IniciativeStatus } from './IniciativeStatus';

export type Iniciative = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  status: IniciativeStatus;
};
