module.exports = {
  name: 'api',
  displayName: 'Api',
  testMatch: [
    '**/api/**/specs/*spec.js?(x)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  testEnvironment: 'node',
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js'
};
