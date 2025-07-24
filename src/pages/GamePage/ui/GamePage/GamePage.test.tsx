import { render, fireEvent } from '@testing-library/react';

import { AppRouterContextProviderMock } from '@/app-router-context-provider-mock';
import { useGameStats } from '@/entities/gameStats';

import { GamePage } from './index';

import type { Question } from '@/entities/question';

jest.mock('@/entities/gameStats', () => ({
  useGameStats: jest.fn(),
}));

jest.mock('@/entities/question', () => ({
  questions: [
    {
      id: 1,
      correctAnswer: 'Q1',
      prizeAmount: 100,
      questionText: 'What is 1+1?',
      options: [
        { id: 'Q1', text: '2' },
        { id: 'Q2', text: '3' },
      ],
    },

    {
      id: 2,
      correctAnswer: 'Q1',
      prizeAmount: 200,
      questionText: 'What is 2+2?',
      options: [
        { id: 'Q1', text: '3' },
        { id: 'Q2', text: '4' },
      ],
    },
  ] satisfies Question[],
}));

beforeEach(() => {
  (useGameStats as jest.Mock).mockReturnValue([{ currentQuestionIndex: 0, score: 0, status: 'playing' }, jest.fn()]);
});

afterEach(() => {
  jest.clearAllMocks();
});

const renderGamePage = ({ push }: { push?: jest.Mock } = {}) =>
  render(
    <AppRouterContextProviderMock router={{ push }}>
      <GamePage />
    </AppRouterContextProviderMock>
  );

it('renders question and winning total', () => {
  const { getByText } = renderGamePage();

  expect(getByText('Q1')).toBeInTheDocument();
  expect(getByText('$100')).toBeInTheDocument();
});

it('calls setStats and navigates to game-over on last question', () => {
  jest.useFakeTimers();

  const push = jest.fn();

  (useGameStats as jest.Mock).mockReturnValue([{ currentQuestionIndex: 1, score: 0, status: 'playing' }, jest.fn()]);
  const { getByText } = renderGamePage({ push });

  fireEvent.click(getByText('Q2'));

  jest.runAllTimers();

  expect(push).toHaveBeenCalledWith('/game-over', {});

  jest.useRealTimers();
});

it('throws error if question not found', () => {
  (useGameStats as jest.Mock).mockReturnValue([{ currentQuestionIndex: 10, score: 0, status: 'playing' }, jest.fn()]);

  expect(() => renderGamePage()).toThrow('Something went wrong: question not found');
});
