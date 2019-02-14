module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: [
    'src/chop-lines.tsx',
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  globals: {
    'ts-jest': {
      tsConfig: "<rootDir>/tsconfig.json",
    },
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'json',
    'js',
    'jsx',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^styled-components': '<rootDir>/node_modules/styled-components',
  },
  modulePathIgnorePatterns: [
    'dist',
    'config',
  ],
  setupFiles: [
    '<rootDir>/config/jest/enzyme.js',
    '<rootDir>/config/jest/jsdom-polyfills.js',
  ],
  testEnvironment: 'jest-environment-jsdom-global',
  testMatch: [
    '<rootDir>/src/*.test.tsx',
  ],
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  }
};
