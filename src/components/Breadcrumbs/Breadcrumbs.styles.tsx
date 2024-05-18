import styled from 'styled-components';

export const BreadcrumbsList = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 8px;
    color: ${({ theme }) => theme.colors.primary['300']};
    font-size: ${({ theme }) => theme.font.md.size};
    line-height: ${({ theme }) => theme.font.md.lineHeight};
    font-weight: 400;
    cursor: default;

    > :last-child {
        font-weight: 700;
    }
`;

export const BreadcrumbsListElement = styled.li`
    text-transform: capitalize;
    cursor: pointer;
`;
