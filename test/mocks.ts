jest.mock('@/shared/lib/react-dom/useMediaQuery', () => ({
  useMediaQuery: jest.fn(),
}));
