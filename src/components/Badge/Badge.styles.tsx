import styled, { css } from 'styled-components';

import { BadgeVariant } from '@/types';

export const BadgeWrapper = styled.div<{
  $variant?: BadgeVariant;
}>`
  border-radius: 16px;
  display: inline-flex;
  padding: 8px 16px;
  align-items: center;
  gap: 6px;
  cursor: default;

  svg {
    height: ${({ theme }) => theme.icon.md};
    width: auto;
  }

  ${({ theme, $variant }) => {
    switch ($variant) {
      case 'success':
        return css`
          background-color: ${theme.colors.success['600']};
          color: ${theme.colors.success['100']};

          svg {
            color: ${theme.colors.success['100']};
          }
        `;
      case 'warning':
        return css`
          background-color: ${theme.colors.warning['600']};
          color: ${theme.colors.warning['100']};

          svg {
            color: ${theme.colors.warning['100']};
          }
        `;
      case 'danger':
        return css`
          background-color: ${theme.colors.danger['600']};
          color: ${theme.colors.danger['100']};

          svg {
            color: ${theme.colors.danger['100']};
          }
        `;
      case 'mute':
        return css`
          background-color: ${theme.colors.typography['600']};
          color: ${theme.colors.typography['100']};

          svg {
            color: ${theme.colors.typography['100']};
          }
        `;
      case 'primary':
      default:
        return css`
          background-color: ${theme.colors.primary['600']};
          color: ${theme.colors.primary['100']};

          svg {
            color: ${theme.colors.primary['100']};
          }
        `;
    }
  }}
`;

export const BadgeText = styled.span`
  font-size: ${({ theme }) => theme.font.sm.size};
  line-height: ${({ theme }) => theme.font.sm.lineHeight};
  font-weight: 600;
`;
