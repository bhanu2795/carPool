module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
        'jest': true,
    },
    'rules': {
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
        'comma-dangle': 'off',
        'curly': 'multi-line',
        'no-shadow': ['error', { 'builtinGlobals': false, 'hoist': 'functions', 'allow': [] }],
        'camelcase': ['error', { allow: ['^UNSAFE_'] }],
        'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
        'jsx-quotes': ['error', 'prefer-single']
    },
    'globals': {
        'fetch': false
    }
}