module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {alias: {'@': './src'}}],
    'react-native-reanimated/plugin', // 항상 마지막에 위치
  ],
};
