export const routes = {
  home: '/',
  voting: '/voting',
  getVote: (id: string) => `/voting/${id}`,
} as const;

export type Routes = (typeof routes)[keyof typeof routes];
