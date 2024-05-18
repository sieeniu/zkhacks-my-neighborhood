import styled from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
`;

export const CardTitle = styled.h4`
  color: ${({ theme }) => theme.colors.typography['100']};
`;

export const CardDescription = styled.p`
  color: ${({ theme }) => theme.colors.typography['300']};
  font-size: ${({ theme }) => theme.font.lg.size};
  line-height: ${({ theme }) => theme.font.lg.lineHeight};
  font-weight: 400;
`;
