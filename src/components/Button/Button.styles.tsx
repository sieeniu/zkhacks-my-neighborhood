import styled, { css } from 'styled-components';

import type { ButtonVariant } from '../Button';

export const PrimitiveButton = styled.button<{ $variant?: ButtonVariant }>`
    border: none;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    border-radius: 16px;
    font-family: ${({ theme }) => theme.fontFamily.montserrat};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xsm};
    cursor: pointer;
    text-wrap: nowrap;

    transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;

    svg {
        height: ${({ theme }) => theme.icon.default};
        width: auto;
    }

    ${({ $variant }) => {
        switch ($variant) {
            case 'success':
                return css`
                    background-color: ${({ theme }) => theme.colors.success['100']};
                    color: ${({ theme }) => theme.colors.success['600']};
                    font-weight: 600;

                    &:hover {
                        background-color: ${({ theme }) => theme.colors.success['200']};
                    }
                `;
            case 'danger':
                return css`
                    background-color: ${({ theme }) => theme.colors.danger['100']};
                    color: ${({ theme }) => theme.colors.danger['600']};
                    font-weight: 600;

                    &:hover {
                        background-color: ${({ theme }) => theme.colors.danger['200']};
                    }
                `;
            case 'primary':
            default:
                return css`
                    background-color: ${({ theme }) => theme.colors.primary['100']};
                    color: ${({ theme }) => theme.colors.primary['600']};
                    font-weight: 600;

                    &:hover {
                        background-color: ${({ theme }) => theme.colors.primary['200']};
                    }
                `;
        }
    }}
`;
