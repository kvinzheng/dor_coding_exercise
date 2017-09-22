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
    "import/no-named-as-default": "off",
    "no-plusplus": [
      1, {
        "allowForLoopAfterthoughts": true
      }
    ],
    "react/prop-types": 0
  }
};
