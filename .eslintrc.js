module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['airbnb', 'airbnb/hooks', 'react-app', 'plugin:prettier/recommended', 'plugin:jsx-a11y/recommended'],
  plugins: ['prettier', 'jsx-a11y'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/no-unused-prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'import/prefer-default-export': 'off',
    'default-case': 'off',
    'func-names': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
    'max-len': ['error', { code: 120, ignoreUrls: true }],
  },
};
