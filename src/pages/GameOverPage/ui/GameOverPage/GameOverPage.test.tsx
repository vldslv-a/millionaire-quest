import { render, fireEvent } from '@testing-library/react';

import { AppRouterContextProviderMock } from '@/app-router-context-provider-mock';
import { useGameStats } from '@/entities/gameStats';

import { GameOverPage } from './index';

import type { GameStats } from '@/entities/gameStats';

jest.mock('@/entities/gameStats', () => ({
  useGameStats: jest.fn(),
}));

const renderGameOverPage = ({
  push = jest.fn(),
  replace = jest.fn(),
}: { push?: jest.Mock; replace?: jest.Mock } = {}) =>
  render(
    <AppRouterContextProviderMock router={{ push, replace }}>
      <GameOverPage />
    </AppRouterContextProviderMock>
  );

it('renders component correctly', () => {
  (useGameStats as jest.Mock).mockReturnValue([
    { currentQuestionIndex: 0, score: 8000, status: 'finished' } satisfies GameStats,
    jest.fn(),
  ]);

  const { getByTestId, getByText } = renderGameOverPage();

  expect(getByTestId('svg-mock')).toBeInTheDocument();

  expect(getByText('Total score:')).toBeInTheDocument();
  expect(getByText('$8,000 earned')).toBeInTheDocument();
  expect(getByText('Try again')).toBeInTheDocument();
});

it('navigates to game page on try again button click', () => {
  const push = jest.fn();

  (useGameStats as jest.Mock).mockReturnValue([
    { currentQuestionIndex: 0, score: 0, status: 'finished' } satisfies GameStats,
    jest.fn(),
  ]);

  const { getByRole } = renderGameOverPage({ push });

  const tryAgainButton = getByRole('button', { name: 'Try again' });

  expect(tryAgainButton).toBeInTheDocument();

  fireEvent.click(tryAgainButton);

  expect(push).toHaveBeenCalledWith('/game');
});

it('redirects to /game if status is not finished', () => {
  const replace = jest.fn();

  (useGameStats as jest.Mock).mockReturnValue([{ currentQuestionIndex: 0, score: 0, status: 'playing' }, jest.fn()]);

  renderGameOverPage({ replace });

  expect(replace).toHaveBeenCalledWith('/game');
});

it('redirects to / if status is initial', () => {
  const replace = jest.fn();

  (useGameStats as jest.Mock).mockReturnValue([{ currentQuestionIndex: 0, score: 0, status: 'initial' }, jest.fn()]);

  renderGameOverPage({ replace });

  expect(replace).toHaveBeenCalledWith('/');
});
