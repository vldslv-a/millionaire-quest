import React from 'react';

import { Link } from '../Link';
import { Typography } from '../Typography';

import { HexClip } from './HexClip';

import type { LinkProps } from '../Link';
import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonColor = 'primary' | 'negative' | 'positive';
type ButtonVariant = 'icon' | 'option' | 'primary';

type CommonButtonProps = {
  prefix?: ReactNode;
  suffix?: ReactNode;
  color?: ButtonColor;
  fullWidth?: boolean;
  isBlinking?: boolean;
  variant?: ButtonVariant;
  size?: 'small' | 'default';
};

type ButtonAsLinkProps = Omit<LinkProps, 'color'> & PropsWithChildren<CommonButtonProps & { asLink: true }>;

type ButtonAsButtonProps = PropsWithChildren<CommonButtonProps & { asLink?: false }> &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'prefix' | 'suffix'>;

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

export const Button = ({
  asLink = false,
  children,
  className = '',
  color = 'primary',
  fullWidth = false,
  isBlinking = false,
  prefix,
  size = 'default',
  suffix,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const colorClassName = styles[`button--color-${color}`];
  const variantClassName = styles[`button--variant-${variant}`];
  const sizeClassName = styles[`button--size-${size}`];
  const buttonClassNames = `${styles.button} ${variantClassName} ${colorClassName} ${isBlinking ? styles['button--blinking'] : ''} ${fullWidth ? styles['button--fullWidth'] : ''} ${className}`;

  const child = (
    <span className={`${styles.button__content} ${sizeClassName}`}>
      {Boolean(prefix) && <span className={styles.button__prefix}>{prefix}</span>}

      <Typography as="span" variant="button" color={variant === 'primary' ? 'white' : 'primary'}>
        {children}
      </Typography>

      {Boolean(suffix) && <span className={styles.button__suffix}>{suffix}</span>}

      {variant === 'option' && <HexClip />}
    </span>
  );

  if (asLink) {
    return (
      <Link className={buttonClassNames} {...(props as LinkProps)}>
        {child}
      </Link>
    );
  }

  return (
    <button type="button" className={buttonClassNames} {...props}>
      {child}
    </button>
  );
};
