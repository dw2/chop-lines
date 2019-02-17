module.exports = {
  collectCoverageFrom: ["src/chop-lines.tsx", "src/components.tsx"],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  globals: {
    "ts-jest": {
      tsConfig: "<rootDir>/config/tsconfig.json"
    }
  },
  moduleFileExtensions: ["ts", "tsx", "json", "js", "jsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  modulePathIgnorePatterns: ["<rootDir>/dist", "<rootDir>/config"],
  preset: "ts-jest",
  rootDir: "../../",
  setupFiles: [
    "<rootDir>/config/jest/enzyme.js",
    "<rootDir>/config/jest/jsdom-polyfills.js"
  ],
  testEnvironment: "jest-environment-jsdom-global",
  testMatch: ["<rootDir>/src/*.test.tsx"],
  testURL: "http://localhost/",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  }
};
