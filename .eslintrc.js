module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    '@next/next/no-img-element': 'off',
    "react/react-in-jsx-scope": "off",
    'func-style': ['error', 'declaration'],
    'no-console': ['error', {allow: ['warn', 'error']}]
  },
  settings: {
    "react": {
      "version": "detect"
    }
  }
}
