module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: "babel-eslint",
  plugins: [
    'react-hooks',
    'import'
  ],
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-param-reassign': ['error', { props: false }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { "extensions": ['.js', '.jsx'] }],
    'import/extensions': 0,
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      'node': {
        "extensions": ['.js', '.jsx']
      }
    }
  }
};
