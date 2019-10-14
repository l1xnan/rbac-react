module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  plugins: ['react-hooks', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/prop-types': 0,
    'react/display-name': 0,
    // @typescript-eslint

    // 是否必须显式可见性声明 public、private，若关闭则默认为 public
    // tslint 中配置项为：{"member-access": [true, "no-public"],}
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/array-type': ['error', 'array-simple'],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', args: 'after-used' },
    ],
    // '@typescript-eslint/tslint/config': [
    //   1,
    //   {
    //     lintFile: './tslint.json',
    //     rules: {},
    //   },
    // ],
    // react hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};

// TODO: 使用 typescript-eslint 替换 tslint
// https://github.com/Microsoft/TypeScript/issues/29288
// https://medium.com/@dors718/linting-your-react-typescript-project-with-eslint-and-prettier-2423170c3d42
// https://dev.to/robertcoopercode/using-eslint-and-prettier-in-a-typescript-project-53jb
