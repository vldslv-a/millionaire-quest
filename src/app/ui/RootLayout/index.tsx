import { Inter } from 'next/font/google';

import '../../config/globals.scss';

import type { ReactNode } from 'react';

import styles from './RootLayout.module.scss';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  preload: true,
});

type Props = Readonly<{
  children: ReactNode;
}>;

export const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body className={`${inter.variable} ${styles['root-layout']}`}>{children}</body>
  </html>
);
