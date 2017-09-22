module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'plugins': [
    'react', 'jsx-a11y', 'import'
  ],
  "rules": {
    "react/jsx-filename-extension": [
      1, {
        "extensions": [".js", ".jsx"]
      }
    ],
    "indent": [
      2, 4
    ],
    "import/no-named-as-default": "off"
  }
};
