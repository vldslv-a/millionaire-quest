'use client';

import { ErrorPage as ErrorComponent } from '@/pages/ErrorPage';

import type { ErrorPageProps } from '@/pages/ErrorPage';

export default function ErrorPage(props: ErrorPageProps) {
  return <ErrorComponent {...props} />;
}
