export const isRouteActive = (pathname: string, href: string) => {
  const pattern = new RegExp(`^${href}($|/)`);
  return !!pathname.match(pattern);
};
