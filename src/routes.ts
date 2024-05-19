export const routes = {
  home: '/',
  voting: '/voting',
  getVote: (id: string) => `/voting/${id}`,
  iniciatives: '/iniciatives',
  complaints: '/complaints',
} as const;

export type Routes = (typeof routes)[keyof typeof routes];
