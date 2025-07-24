import { NotFoundPage } from '@/pages/NotFoundPage';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The requested page could not be found.',
};

export default function NotFound() {
  return <NotFoundPage />;
}
