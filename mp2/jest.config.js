module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'jsx'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
};