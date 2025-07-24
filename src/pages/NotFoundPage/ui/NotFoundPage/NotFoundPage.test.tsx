import { render } from '@testing-library/react';

import { NotFoundPage } from './index';

const renderNotFoundPage = () => render(<NotFoundPage />);

it('renders component correctly', () => {
  const { getByText } = renderNotFoundPage();

  expect(getByText('Page Not Found')).toBeInTheDocument();
  expect(getByText('Could not find requested resource')).toBeInTheDocument();
  expect(getByText('Go Home')).toBeInTheDocument();
});

it('has correct link to home page', () => {
  const { getByRole } = renderNotFoundPage();

  const homeLink = getByRole('link', { name: 'Go to the main page' });
  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveAttribute('href', '/');
});
