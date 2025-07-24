import React from 'react';

import type { ElementType, HTMLAttributes, PropsWithChildren } from 'react';

import styles from './Typography.module.scss';

type TypographyVariant = 'h1' | 'h2' | 'body' | 'button';
type TypographyColor = 'white' | 'orange' | 'primary' | 'secondary';
type TypographyWeight = 'bold' | 'normal';

const colors: Record<TypographyColor, string> = {
  orange: styles.typography_orange ?? '',
  primary: styles.typography_primary ?? '',
  secondary: styles.typography_secondary ?? '',
  white: styles.typography_white ?? '',
};

const weights: Record<TypographyWeight, string> = {
  bold: styles.typography_bold ?? '',
  normal: styles.typography_normal ?? '',
};

const variants: Record<TypographyVariant, string> = {
  h1: styles.typography_h1 ?? '',
  h2: styles.typography_h2 ?? '',
  body: styles.typography_body ?? '',
  button: styles.typography_button ?? '',
};

export type TypographyProps = HTMLAttributes<HTMLElement> &
  PropsWithChildren<{
    as?: ElementType;
    color?: TypographyColor;
    weight?: TypographyWeight;
    variant?: TypographyVariant;
  }>;

export const Typography = ({
  as: Component = 'p',
  children,
  className = '',
  color = 'primary',
  variant = 'body',
  weight,
  ...props
}: TypographyProps) => (
  <Component
    className={`${styles.typography} ${variants[variant]} ${colors[color]} ${weight ? weights[weight] : ''} ${className}`}
    {...props}
  >
    {children}
  </Component>
);
