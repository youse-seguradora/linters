/*eslint-env node*/
module.exports = {
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module'
  },
  'globals': {
    'accounting': true,
    'autosize': false,
    'EventDispatcher': true,
    'I18n': true,
    'latinize': true,
    'mixpanel': true,
    'module': true,
    'page': false,
    'UAParser': false,
    'YouseChat': false
  },
  'env': {
    'browser': true,
    'amd': true,
    'jquery': true,
    'node': true,
    'mocha': true
  },
  'rules': {
    'camelcase': 2,
    'comma-dangle': [2, 'never'],
    'comma-style': [2, 'last'],
    'eqeqeq': 2,
    'indent': [2, 2, { 'VariableDeclarator': 2 }],
    'no-eq-null': 2,
    'no-extra-parens': 2,
    'no-extra-semi': 2,
    'no-lonely-if': 2,
    'no-multi-spaces': 0,
    'no-nested-ternary': 2,
    'no-param-reassign': 2,
    'no-self-compare': 2,
    'no-shadow': 2,
    'no-throw-literal': 2,
    'no-undef': 2,
    'no-underscore-dangle': 0,
    'no-void': 2,
    'quotes': [2, 'single'],
    'semi': [2, 'always'],
    'keyword-spacing': ['error', { 'before': true, 'after': true}],
    'space-before-blocks': 2,
    'space-infix-ops': 2,
    'padded-blocks': ['error', 'never'],
    'space-in-parens': 2,
    'comma-spacing': [2, { 'before': false, 'after': true }]
  }
};
