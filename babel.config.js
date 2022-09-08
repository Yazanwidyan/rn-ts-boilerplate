module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        allowUndefined: true,
      },
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: {
          /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
          '@APPNAME/assets': ['./App/assets'],
          '@APPNAME/components': ['./App/components'],
          '@APPNAME/constants': ['./App/constants'],
          '@APPNAME/hooks': ['./App/hooks'],
          '@APPNAME/i18n': ['./App/i18n'],
          '@APPNAME/navigation': ['./App/navigation'],
          '@APPNAME/redux': ['./App/redux'],
          '@APPNAME/screens': ['./App/screens'],
          '@APPNAME/utils': ['./App/utils'],
          '@APPNAME/services': ['./App/services'],
          '@APPNAME/api': ['./App/api'],
          '@types': ['./App/@types'],
          '@env': ['./env'],
        },
      },
    ],
  ],
};
