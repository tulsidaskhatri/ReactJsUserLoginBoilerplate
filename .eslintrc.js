module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        'plugin:react/recommended',
    ],
    plugins: ['react-hooks'],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        noEmit: true,
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/trailing-comma': 'off',
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/no-object-literal-type-assertion': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'no-confusing-arrow': 'error',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/class-name-casing': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/camelcase': 'warn',
    },

    overrides: [
        {
            files: ['*/**/*.test.{js,ts,tsx}'],
            rules: {
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-non-null-assertion': 'off',
            },
        },
    ],

    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
};
