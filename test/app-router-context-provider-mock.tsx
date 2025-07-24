import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import React from 'react';

import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

type AppRouterContextProviderMockProps = {
  children: React.ReactNode;
  router: Partial<AppRouterInstance>;
};

export const AppRouterContextProviderMock = ({
  children,
  router,
}: AppRouterContextProviderMockProps): React.ReactNode => {
  const mockedRouter: AppRouterInstance = {
    back: jest.fn(),
    forward: jest.fn(),
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
    ...router,
  };
  return <AppRouterContext.Provider value={mockedRouter}>{children}</AppRouterContext.Provider>;
};
