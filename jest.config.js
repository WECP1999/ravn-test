import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const babelConfigStyledComponents = {
  presets: [['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: [
    'babel-plugin-macros',
    ['babel-plugin-styled-components', { ssr: true }],
    '@babel/plugin-syntax-typescript',
  ],
};

// const babelConfigStitches = {
//   presets: [['next/babel', { 'preset-react': { runtime: 'automatic' } }]],
//   plugins: ['babel-plugin-macros'],
// }

export default {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
  },
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': ['babel-jest', babelConfigStyledComponents],
    '.+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$':
      'jest-transform-stub',
  },
};
