import { render } from '@testing-library/react';

import { RootLayout } from './index';

import type { ReactNode } from 'react';

const renderRootLayout = (children: ReactNode) => render(<RootLayout>{children}</RootLayout>);

it('renders children correctly', () => {
  const testContent = 'Test content';
  const { getByText } = renderRootLayout(<div>{testContent}</div>);

  expect(getByText(testContent)).toBeInTheDocument();
});
