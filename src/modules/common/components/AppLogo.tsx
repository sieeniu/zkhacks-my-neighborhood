import styled from 'styled-components';

const AppLogoWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary['100']};
  font-size: ${({ theme }) => theme.font.lg.size};
  line-height: ${({ theme }) => theme.font.lg.lineHeight};
  font-weight: 700;
  text-align: center;
  cursor: default;
`;

export const AppLogo = () => {
  return <AppLogoWrapper>My neighborhood dApp</AppLogoWrapper>;
};
