import { render, fireEvent, act } from '@testing-library/react';

import { QuestionForm } from './index';

import type { Question } from '@/entities/question';

const question: Question = {
  id: 1,
  questionText: 'What is the capital of France?',
  correctAnswer: 'b',
  prizeAmount: 100,
  options: [
    { id: 'a', text: 'Berlin' },
    { id: 'b', text: 'Paris' },
    { id: 'c', text: 'Madrid' },
    { id: 'd', text: 'Rome' },
  ],
};

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

it('renders question text', () => {
  const { getByText } = render(<QuestionForm question={question} onSubmit={jest.fn()} />);

  expect(getByText(question.questionText)).toBeInTheDocument();
});

it('renders all answer options', () => {
  const { getByText } = render(<QuestionForm question={question} onSubmit={jest.fn()} />);

  question.options.forEach((opt) => {
    expect(getByText(opt.text)).toBeInTheDocument();
  });
});

it('calls onSubmit with prizeAmount for correct answer', () => {
  const onSubmit = jest.fn();
  const { getByText } = render(<QuestionForm question={question} onSubmit={onSubmit} />);

  fireEvent.click(getByText('Paris'));

  act(() => {
    jest.advanceTimersByTime(1500);
  });

  expect(onSubmit).toHaveBeenCalledWith(100);
});

it('calls onSubmit with 0 for incorrect answer', () => {
  const onSubmit = jest.fn();
  const { getByText } = render(<QuestionForm question={question} onSubmit={onSubmit} />);

  fireEvent.click(getByText('Berlin'));

  act(() => {
    jest.advanceTimersByTime(1500);
  });

  expect(onSubmit).toHaveBeenCalledWith(0);
});

it('applies custom className and passes additional props', () => {
  const { container, getByTestId } = render(
    <QuestionForm className="custom-class" question={question} onSubmit={jest.fn()} data-testid="qform" />
  );

  const root = getByTestId('qform');

  expect(root).toHaveClass('custom-class');
  expect(container.firstChild).toHaveClass('question-form');
});
