import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  next: {
    entry: ['next.config.ts', 'app/**/*.tsx'],
  },

  ignore: [],
  ignoreDependencies: [
    '@svgr/webpack',
    'eslint-config-next',
    'eslint-import-resolver-typescript',
    'postcss',
    'ts-node',
  ],
  ignoreBinaries: [],
  rules: {
    binaries: 'error',
    classMembers: 'off',
    dependencies: 'error',
    devDependencies: 'error',
    duplicates: 'error',
    enumMembers: 'error',
    exports: 'error',
    files: 'error',
    nsExports: 'error',
    nsTypes: 'error',
    optionalPeerDependencies: 'error',
    types: 'error',
    unlisted: 'off',
    unresolved: 'error',
  },
};

export default config;
