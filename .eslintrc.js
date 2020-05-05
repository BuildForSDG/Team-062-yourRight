module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: ['react-app', 'airbnb-base', 'plugin:jsx-a11y/recommended', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    semi: 1,
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true
      }
    ]
  }
};
