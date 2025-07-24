import '@testing-library/jest-dom';

global.console.error = jest.fn().mockImplementation((error: Error | string | undefined) => {
  const errorMessage = typeof error === 'string' ? error : (error?.message ?? '');

  const hasHydrationError = ['In HTML, <html> cannot be a child of <div>', 'This will cause a hydration error'].some(
    (warning) => errorMessage.includes(warning)
  );

  if (hasHydrationError) {
    return;
  }

  throw new Error(errorMessage);
});

global.console.warn = jest.fn().mockImplementation((warning: string | undefined) => {
  throw new Error(warning);
});
