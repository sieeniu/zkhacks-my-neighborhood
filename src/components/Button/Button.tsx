import type {
  ButtonHTMLAttributes,
  FunctionComponent,
  PropsWithChildren,
  ReactElement,
  SVGAttributes,
} from 'react';

import { PrimitiveButton } from './Button.styles';

export type ButtonVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'mute';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon?: FunctionComponent<SVGAttributes<SVGElement>>;
  variant?: ButtonVariant;
};

const Button = ({
  children,
  Icon,
  variant = 'primary',
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <PrimitiveButton $variant={variant} {...props}>
      {Icon && <Icon />}
      {children}
    </PrimitiveButton>
  );
};

Button.displayName = 'Button';

export { Button };
