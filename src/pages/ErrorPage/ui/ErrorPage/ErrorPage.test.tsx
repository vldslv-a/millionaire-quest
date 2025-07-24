import { render, fireEvent } from '@testing-library/react';

import { ErrorPage } from './index';

import type { ErrorPageProps } from './index';

const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => undefined);

beforeEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  mockConsoleError.mockRestore();
});

const renderErrorPage = (props: ErrorPageProps) => render(<ErrorPage {...props} />);

const mockReset = jest.fn();
const mockError = new Error('Test error message');

it('renders component correctly', () => {
  const { getByText } = renderErrorPage({
    error: mockError,
    reset: mockReset,
  });

  expect(getByText('Something went wrong!')).toBeInTheDocument();
  expect(getByText('Try again')).toBeInTheDocument();
});

it('logs error to console', () => {
  renderErrorPage({
    error: mockError,
    reset: mockReset,
  });

  expect(mockConsoleError).toHaveBeenCalledWith(mockError);
  expect(mockConsoleError).toHaveBeenCalledTimes(1);
});

it('calls reset when button is clicked', () => {
  const { getByRole } = renderErrorPage({
    error: mockError,
    reset: mockReset,
  });

  const tryAgainButton = getByRole('button', { name: 'Try again' });
  fireEvent.click(tryAgainButton);

  expect(mockReset).toHaveBeenCalledTimes(1);
});
