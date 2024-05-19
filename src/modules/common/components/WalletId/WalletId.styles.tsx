import styled from 'styled-components';

export const WalletIdWrapper = styled.div`
    display: inline-flex;
    color: ${({ theme }) => theme.colors.primary['100']};
    font-size: ${({ theme }) => theme.font.md.size};
    line-height: ${({ theme }) => theme.font.md.lineHeight};
    font-weight: 600;
    gap: 12px;

    svg {
        height: ${({ theme }) => theme.icon.md};
        width: auto;
    }
`;
