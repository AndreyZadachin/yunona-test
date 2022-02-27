const presets = [
  [
    '@babel/env',
    {
      targets: {
        firefox: '97',
        chrome: '98',
      },
      useBuiltIns: 'usage',
      corejs: '3.4.1',
    },
  ],
];

module.exports = { presets };
