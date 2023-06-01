module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    '../../.eslintrc.cjs',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  rules: {},
}
