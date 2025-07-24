import { render, waitFor } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';

import { AppRouterContextProviderMock } from '@/app-router-context-provider-mock';

import { GameStartPage } from './index';

const renderGameStartPage = ({ push }: { push?: jest.Mock } = {}) =>
  render(
    <AppRouterContextProviderMock router={{ push }}>
      <GameStartPage />
    </AppRouterContextProviderMock>
  );

it('renders component correctly', async () => {
  const { getByTestId, getByText } = renderGameStartPage();

  expect(getByTestId('svg-mock')).toBeInTheDocument();
  expect(getByText('Who wants to be a millionaire?')).toBeInTheDocument();

  await waitFor(() => {
    expect(getByText('Start')).toBeInTheDocument();
  });
});

it('navigates to game page on start button click', async () => {
  const push = jest.fn();
  const { findByRole } = renderGameStartPage({ push });

  const startButton = await findByRole('button', { name: 'Start' });
  expect(startButton).toBeInTheDocument();

  fireEvent.click(startButton);
  expect(push).toHaveBeenCalledWith('/game');
});
