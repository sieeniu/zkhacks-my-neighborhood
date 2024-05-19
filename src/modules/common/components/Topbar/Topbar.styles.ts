import styled from 'styled-components';

export const TopbarWrapper = styled.header`
  display: flex;
  height: 96px;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TopbarActions = styled.div``;
