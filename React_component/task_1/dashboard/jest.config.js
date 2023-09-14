module.exports = {
    setupFilesAfterEnv: ['./config/setupTests.js'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
      '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
    },
    "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$": "<rootDir>/fileMock.js"
    },
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    },
    "transformIgnorePatterns": [
      "/node_modules/(?!@testing-library/jest-dom).+\\.js$"
    ],
    "setupFiles": ["./jest.setup.js"]
  };
  