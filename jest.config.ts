import nextJest from 'next/jest';

import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/test/jest.setup.ts'],

  moduleNameMapper: {
    '\\.(css|scss|ttf|woff|woff2|otf|png|jpg|gif|webp)$': '<rootDir>/test/emptyModule.js',
    '^.+\\.(svg)$': '<rootDir>/test/svgMock.js',
  },

  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'reports',
        outputName: 'jest-junit.xml',
        suiteNameTemplate: '{filename}',
        ancestorSeparator: ' › ',
        uniqueOutputName: 'false',
      },
    ],
  ],

  verbose: true,
};

export default createJestConfig(config);
