import styled from 'styled-components';
import Image from 'next/image';

const AppLogoWrapper = styled.div`
  color: ${({ theme }) => theme.colors.primary['100']};
  font-size: ${({ theme }) => theme.font.lg.size};
  line-height: ${({ theme }) => theme.font.lg.lineHeight};
  font-weight: 700;
  text-align: center;
  cursor: default;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const AppLogo = () => {
  return (
    <Wrapper>
      <Image src={'/assets/logo.jpg'} alt="Logo" width={80} height={80} />
      <AppLogoWrapper>My neighborhood dApp</AppLogoWrapper>
    </Wrapper>
  );
};
