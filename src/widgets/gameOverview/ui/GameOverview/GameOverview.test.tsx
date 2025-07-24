import { render } from '@testing-library/react';

import { GameOverview } from './index';

const renderGameOverview = (children?: React.ReactNode) => render(<GameOverview>{children}</GameOverview>);

it('renders component correctly', () => {
  const testContent = 'Test content';
  const { getByTestId, getByText } = renderGameOverview(<div>{testContent}</div>);

  expect(getByTestId('svg-mock')).toBeInTheDocument();
  expect(getByText(testContent)).toBeInTheDocument();
});

it('applies custom className', () => {
  const customClass = 'custom-class';
  const { container } = render(
    <GameOverview className={customClass}>
      <div>Content</div>
    </GameOverview>
  );

  const gameOverview = container.firstChild as HTMLElement;
  expect(gameOverview).toHaveClass(customClass);
});

it('passes through additional props', () => {
  const testId = 'test-overview';
  const { getByTestId } = render(
    <GameOverview data-testid={testId}>
      <div>Content</div>
    </GameOverview>
  );

  expect(getByTestId(testId)).toBeInTheDocument();
});
