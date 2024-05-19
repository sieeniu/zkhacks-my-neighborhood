import styled from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CardTitle = styled.h4`
  color: ${({ theme }) => theme.colors.typography['100']};
  font-size: ${({ theme }) => theme.font.xxl.size};
  line-height: ${({ theme }) => theme.font.xxl.lineHeight};
  font-weight: 600;
`;

export const CardSubtitle = styled.h5`
  color: ${({ theme }) => theme.colors.primary['100']};
  font-size: ${({ theme }) => theme.font.md.size};
  line-height: ${({ theme }) => theme.font.md.lineHeight};
  font-weight: 600;
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.typography['300']};
  font-size: ${({ theme }) => theme.font.lg.size};
  line-height: ${({ theme }) => theme.font.lg.lineHeight};
  font-weight: 400;
`;

export const CardCreatedAt = styled.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.colors.typography['400']};
    font-size: ${({ theme }) => theme.font.sm.size};
    line-height: ${({ theme }) => theme.font.sm.lineHeight};
    font-weight: 600;

    svg {
        height: 18px;
        width: auto;
    }
`;
