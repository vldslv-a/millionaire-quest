import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  }),
}));

global.console.error = jest.fn().mockImplementation((error: string | undefined) => {
  const hasHydrationError = ['In HTML, <html> cannot be a child of <div>', 'This will cause a hydration error'].some(
    (warning) => error?.includes(warning)
  );

  if (hasHydrationError) {
    return;
  }

  throw new Error(error);
});

global.console.warn = jest.fn().mockImplementation((warning: string | undefined) => {
  throw new Error(warning);
});
