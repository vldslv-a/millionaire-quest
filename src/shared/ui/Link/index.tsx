import NextLink from 'next/link';
import React from 'react';

import { Typography } from '../Typography';

import type { TypographyProps } from '../Typography';
import type { LinkProps as NextLinkProps } from 'next/link';

export type LinkProps = NextLinkProps & TypographyProps;

export const Link = (props: LinkProps) => <Typography as={NextLink} {...props} />;
