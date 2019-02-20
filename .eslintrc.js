module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: 'airbnb',
  plugins: ['jest'],
  rules: {
    'no-param-reassign': ['error', { props: false }],
    'react/jsx-filename-extension': 'off',
  },
};
