module.exports = {
  setupFiles: ['<rootDir>test/setup.js'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
};
