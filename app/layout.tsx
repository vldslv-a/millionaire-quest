import { RootLayout } from '@/app';

// TODO: Remove after we find an solution
import '@/shared/ui/Typography/Typography.module.scss';
import '@/shared/ui/Button/Button.module.scss';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Millionaire Quest',
  description: 'A thrilling quest for wealth and success',
  keywords: 'quiz, game, millionaire, trivia, knowledge, questions',
  authors: [{ name: 'Millionaire Quest Team' }],
};

type Props = Readonly<{
  children: ReactNode;
}>;

export default function Layout({ children }: Props) {
  return <RootLayout>{children}</RootLayout>;
}
