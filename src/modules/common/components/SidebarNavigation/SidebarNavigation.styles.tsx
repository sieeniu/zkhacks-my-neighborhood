import styled from 'styled-components';

export const SidebarWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 40px;
    height: 100vh;
    width: 350px;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 48px 0 48px 12px;
`;

export const NavigationList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const NavigationListItem = styled.li<{ $isActive?: boolean }>`
    display: inline-flex;
    height: auto;
    width: 100%;
    padding: 5px 20px;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    color: ${({ $isActive, theme }) =>
            $isActive ? theme.colors.primary['100'] : theme.colors.typography['400']};

    font-size: ${({ theme }) => theme.font.lg.size};
    line-height: ${({ theme }) => theme.font.lg.lineHeight};
    font-weight: 600;

    border-right: ${({ $isActive, theme }) =>
            $isActive ? `3px solid ${theme.colors.primary['100']}` : 'none'};

    svg {
        height: ${({ theme }) => theme.icon.lg};
        width: auto;
        color: ${({ $isActive, theme }) =>
                $isActive ? theme.colors.primary['100'] : theme.colors.typography['400']};
    }
`;
