import { render, fireEvent, within } from '@testing-library/react';

import { useMediaQuery } from '@/shared/lib/react-dom/useMediaQuery';

import { WinningTotal } from './index';

const prizes = [100, 200, 300, 400, 500];
const currentPrize = 300;

afterEach(() => {
  jest.clearAllMocks();
});

it('renders PrizesList directly on desktop', () => {
  (useMediaQuery as jest.Mock).mockReturnValue(true);
  const { getByTestId, queryByTestId } = render(<WinningTotal prizes={prizes} currentPrize={currentPrize} />);

  expect(getByTestId('prizesList')).toBeInTheDocument();

  expect(queryByTestId('drawer')).not.toBeInTheDocument();
});

it('renders Button and Drawer on mobile, toggles Drawer', () => {
  (useMediaQuery as jest.Mock).mockReturnValue(false);
  const { getByTestId } = render(<WinningTotal prizes={prizes} currentPrize={currentPrize} />);

  const toggleButton = getByTestId('toggleButton');

  expect(getByTestId('toggleButton')).toBeInTheDocument();

  const drawer = getByTestId('drawer');

  expect(drawer).toHaveClass('hidden');

  fireEvent.click(toggleButton);

  expect(getByTestId('drawer')).not.toHaveClass('hidden');

  fireEvent.click(within(drawer).getByTestId('closeButton'));

  expect(drawer).toHaveClass('hidden');
});
